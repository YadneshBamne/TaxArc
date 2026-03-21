"use client";;
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RadialOrbitalTimeline({
  timelineData
}) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode, setViewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset, setCenterOffset] = useState({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [radius, setRadius] = useState(200);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(140);
      } else if (window.innerWidth < 768) {
        setRadius(180);
      } else {
        setRadius(200);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = itemId => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = itemId => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = status => {
    switch (status) {
      case "completed":
        return "text-white bg-[#015482] border-transparent";
      case "in-progress":
        return "text-[#015482] bg-white border-[#015482]";
      case "pending":
        return "text-white bg-[#015482]/60 border-transparent";
      default:
        return "text-white bg-[#015482]/60 border-transparent";
    }
  };

  return (
    <div
      className="w-full flex min-h-[420px] sm:min-h-[600px] h-[60vh] sm:h-[75vh] flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}>
      <div
        className={`relative w-full max-w-4xl h-full flex items-center justify-center ${radius < 200 ? 'scale-90' : ''}`}>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}>
          <div
            className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#015482] via-[#0D8CC0] to-[#17D3CF] animate-pulse flex items-center justify-center z-10">
            <div
              className="absolute w-20 h-20 rounded-full border border-[#015482]/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-[#015482]/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm"></div>
          </div>

          <div className="absolute rounded-full border border-[#015482]/20" style={{ width: radius * 2, height: radius * 2 }}></div>
          <div className="absolute rounded-full border border-[#015482]/10" style={{ width: radius * 1.5, height: radius * 1.5 }}></div>
          <div className="absolute rounded-full border border-[#015482]/5" style={{ width: radius, height: radius }}></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const stepNumber = index + 1;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}>
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(1,84,130,0.1) 0%, rgba(1,84,130,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}></div>
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 shadow-sm shadow-[#015482]/10
                  ${
                    isExpanded
                      ? "bg-[#015482] text-white"
                      : isRelated
                      ? "bg-[#17D3CF]/20 text-[#015482]"
                      : "bg-white text-[#015482]"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-[#015482] shadow-lg shadow-[#015482]/30"
                      : isRelated
                      ? "border-[#17D3CF] animate-pulse"
                      : "border-[#015482]/30 hover:border-[#015482]"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150 shadow-md shadow-[#015482]/30" : ""}
                `}>
                  <span className="text-xl font-extrabold leading-none">{stepNumber}</span>
                </div>
                <div
                  className={`
                  absolute top-12 whitespace-normal text-center w-24 -left-7 leading-tight
                  text-xs tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-[#015482] scale-125 font-bold top-[3.75rem]" : "text-gray-600 font-semibold"}
                `}>
                  {item.title}
                </div>
                {isExpanded && (
                  <Card
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-lg border-[#015482]/20 shadow-2xl shadow-[#015482]/10 overflow-visible z-[300]">
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-px h-3 bg-[#015482]/50"></div>
                    <CardContent className="text-xs text-gray-700 font-medium pb-4 text-center mt-4">
                      <p className="leading-relaxed">{item.content}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
