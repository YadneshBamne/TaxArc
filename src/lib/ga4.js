// GA4 tracking utility
export const trackCalendlyEvent = (eventData) => {
  if (window.gtag) {
    window.gtag('event', 'calendly_booking_initiated', {
      event_category: 'consultation',
      event_label: 'calendly_event_opened',
      value: 1,
      ...eventData,
    });
  }
};

export const trackCalendlyBooking = (eventData) => {
  if (window.gtag) {
    window.gtag('event', 'calendly_consultation_booked', {
      event_category: 'conversion',
      event_label: 'consultation_booking_complete',
      value: 1,
      ...eventData,
    });
  }
};

// Detect user timezone automatically
export const getUserTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

// Initialize GA4 based on domain
export const getGA4MeasurementId = () => {
  const hostname = window.location.hostname;
  
  if (hostname.includes('taxarcglobal.com')) {
    return import.meta.env.VITE_GA4_COM_ID || 'G-0LBNW7F7NK';
  } else if (hostname.includes('taxarcglobal.in')) {
    return import.meta.env.VITE_GA4_IN_ID || 'G-Y4TSWTTDHH';
  }
  
  // Fallback to .com
  return 'G-0LBNW7F7NK';
};
