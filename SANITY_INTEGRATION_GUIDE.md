# Sanity CMS Integration Guide

Complete step-by-step guide for integrating Sanity CMS content into TaxArc React pages.

## Overview

This document explains how to make any page section editable through Sanity Studio. The process follows a consistent pattern across all sections and pages.

---

## Part 1: Schema Definition (Sanity Studio)

### Location: `studio/schemaTypes/{pageName}.ts`

**Purpose:** Define the content structure that editors can manage in Sanity Studio.

### Steps:

1. **Create or Edit Schema File**
   - For About page: `studio/schemaTypes/aboutPage.ts`
   - For Home page: `studio/schemaTypes/homePage.ts`
   - For Contact page: `studio/schemaTypes/contactPage.ts`

2. **Define Section Object Structure**

   Example for simple text section:
   ```typescript
   {
     name: 'sectionName',
     title: 'Section Title',
     type: 'object',
     fields: [
       {
         name: 'heading',
         title: 'Section Heading',
         type: 'string',
         initialValue: 'Default heading text',
       },
       {
         name: 'description',
         title: 'Section Description',
         type: 'text',
         rows: 4,
         initialValue: 'Default description text',
       },
     ],
   }
   ```

3. **For Array Fields (Multiple Items)**

   Example for infrastructure items with icons and titles:
   ```typescript
   {
     name: 'items',
     title: 'Items',
     type: 'array',
     of: [
       {
         type: 'object',
         name: 'item',
         title: 'Item',
         fields: [
           {
             name: 'icon',
             title: 'Icon Name',
             type: 'string',
             description: 'Lucide icon name (e.g., Cpu, Key, Building)',
             initialValue: '',
           },
           {
             name: 'title',
             title: 'Item Title',
             type: 'string',
             initialValue: '',
           },
         ],
       },
     ],
     initialValue: [
       { icon: 'Cpu', title: 'Latest configuration devices' },
       { icon: 'Key', title: 'Licensed support software' },
       // ... more items
     ],
   }
   ```

4. **For Complex Nested Objects**

   Example for team members (About page):
   ```typescript
   {
     name: 'teamMembers',
     title: 'Team Members',
     type: 'array',
     of: [
       {
         type: 'object',
         fields: [
           {
             name: 'name',
             title: 'Full Name',
             type: 'string',
           },
           {
             name: 'title',
             title: 'Job Title',
             type: 'string',
           },
           {
             name: 'image',
             title: 'Profile Image',
             type: 'image',
             options: { hotspot: true },
           },
           {
             name: 'description',
             title: 'Bio',
             type: 'text',
             rows: 6,
           },
         ],
       },
     ],
   }
   ```

5. **Key Field Types Used:**
   - `string` - Single line text (headings, titles)
   - `text` - Multi-line text (descriptions, bios)
   - `array` - Multiple items (services, team members, FAQs)
   - `object` - Grouped fields (sections within sections)
   - `image` - Image with hotspot editing
   - `url` - Links and URLs
   - `number` - Numeric values

---

## Part 2: GROQ Query Definition

### Location: `src/sanity/queries.js`

**Purpose:** Fetch specific fields from Sanity for use in React components.

### Steps:

1. **Update Query to Fetch New Fields**

   Original query:
   ```javascript
   export const ABOUT_QUERY = `
   *[_type == "aboutPage"][0] {
     _id,
     title,
     heroSection { heading, description }
   }
   `
   ```

   Updated with infrastructure and FAQs:
   ```javascript
   export const ABOUT_QUERY = `
   *[_type == "aboutPage"][0] {
     _id,
     title,
     heroSection { heading, description },
     infrastructureSection {
       heading,
       items[] { icon, title }
     },
     faqSection {
       faqs[] { question, answer }
     }
   }
   `
   ```

2. **Query Syntax Rules:**
   - `*[_type == "pageName"][0]` - Fetch first document of this type
   - `fieldName { subField1, subField2 }` - Nested object fields
   - `items[]` - Array fields use `[]`
   - `image { asset -> { url } }` - Image URLs with asset resolution

3. **For Complex Image References:**
   ```javascript
   image {
     asset -> { url }
   }
   ```
   This fetches the image URL from Sanity's asset pipeline.

---

## Part 3: React Implementation

### Location: `src/pages/{pageName}.jsx`

**Purpose:** Create fallback data objects, fetch Sanity data, and render dynamic components.

### Steps:

1. **Create Fallback Data Object**

   At the top of the component (after imports, inside component function):
   ```javascript
   // Infrastructure section with fallback
   const infrastructureData = aboutData?.infrastructureSection || {
     heading: 'Our IT Infrastructure & Security Measures',
     items: [
       { icon: 'Cpu', title: 'Latest configuration devices' },
       { icon: 'Key', title: 'Licensed support software' },
       // ... more items matching schema
     ],
   }
   ```

   **Why fallback?** If Sanity data hasn't loaded yet, the page uses these defaults to prevent errors.

2. **Fetch Data from Sanity**

   This is handled globally in the component:
   ```javascript
   const { data: aboutData } = useSanityData(ABOUT_QUERY)
   ```

   The hook handles:
   - API calls to Sanity
   - Loading states
   - Error handling
   - 10-second timeout
   - Cleanup on unmount

3. **Create Icon Mapping Function** (for icon-based sections)

   ```javascript
   const getIcon = (iconName) => {
     const icons = {
       Cpu,
       Key,
       MonitorCheck,
       Building,
       Database,
       ShieldAlert,
       // ... all icons used in the section
     }
     return icons[iconName] || null
   }
   ```

   **Why?** Sanity stores icon names as strings, but React needs actual component imports. This maps strings to components.

4. **Convert Hardcoded JSX to Dynamic Rendering**

   **Before (Hardcoded):**
   ```javascript
   <div>
     <h3>Latest configuration devices</h3>
     <Icon1 />
   </div>
   <div>
     <h3>Licensed support software</h3>
     <Icon2 />
   </div>
   ```

   **After (Dynamic):**
   ```javascript
   <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
     {infrastructureData?.items?.map((item, index) => {
       const IconComponent = getIcon(item?.icon)
       return (
         <motion.div
           key={index}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: index * 0.1 }}
           className='flex flex-col items-center text-center'
         >
           <div className='w-16 h-16 mx-auto mb-4 bg-[#17D3CF]/10 rounded-lg flex items-center justify-center'>
             {IconComponent ? <IconComponent className='w-8 h-8 text-[#015482]' /> : null}
           </div>
           <p className='text-[1.19rem] font-semibold'>{item?.title}</p>
         </motion.div>
       )
     })}
   </div>
   ```

5. **Safe Data Access (Optional Chaining)**

   Always use optional chaining and fallbacks:
   ```javascript
   // Good ✅
   {aboutData?.infrastructureSection?.items?.map(...)}
   
   // Bad ❌
   {aboutData.infrastructureSection.items.map(...)}
   
   // With string fallback ✅
   {item?.title || 'Default Title'}
   ```

---

## Part 4: Multiple Item Rendering Patterns

### Pattern 1: Simple List (Services, Features)

```javascript
{serviceData?.services?.map((service, index) => (
  <div key={index} className='service-card'>
    <h3>{service?.title}</h3>
    <p>{service?.description}</p>
  </div>
))}
```

### Pattern 2: Grid with Conditional Wrapping (Infrastructure)

For responsive layouts with different column counts:

```javascript
{infrastructureData?.items && (
  <>
    {/* First 4 items in 4 columns */}
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
      {infrastructureData.items.slice(0, 4).map((item, index) => (
        <ItemComponent key={index} item={item} index={index} />
      ))}
    </div>
    
    {/* Remaining items in 3 columns */}
    {infrastructureData.items.length > 4 && (
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
        {infrastructureData.items.slice(4).map((item, index) => (
          <ItemComponent key={index + 4} item={item} index={index + 4} />
        ))}
      </div>
    )}
  </>
)}
```

**Benefits:**
- Scales automatically: Add items in Sanity, they appear on site
- Responsive layouts adjust with content
- No code changes needed for new items

### Pattern 3: Alternating Layout (Team Members, Features)

```javascript
{teamData?.teamMembers?.map((member, index) => (
  <div
    key={index}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <div className='image-section'>
      <img src={member?.image?.asset?.url} alt={member?.name} />
    </div>
    <div className='content-section'>
      <h3>{member?.name}</h3>
      <p>{member?.description}</p>
    </div>
  </div>
))}
```

### Pattern 4: Auto-Numbering (Workflow Steps)

```javascript
{workflowData?.workflows?.map((workflow, index) => (
  <div key={index}>
    <div className='step-number'>
      {String(index + 1).padStart(2, '0')} {/* 01, 02, 03... */}
    </div>
    <h3>{workflow?.title}</h3>
    <p>{workflow?.description}</p>
  </div>
))}
```

---

## Step-by-Step Example: Adding a New Section

Let's add a new "Gallery" section to the About page.

### Step 1: Add Schema (aboutPage.ts)

```typescript
{
  name: 'gallerySection',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Our Gallery',
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'caption',
              title: 'Image Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
```

### Step 2: Update Query (queries.js)

```javascript
export const ABOUT_QUERY = `
*[_type == "aboutPage"][0] {
  // ... existing fields
  gallerySection {
    heading,
    images[] {
      image { asset -> { url } },
      caption
    }
  }
}
`
```

### Step 3: Update React Component (About.jsx)

```javascript
// Create fallback
const galleryData = aboutData?.gallerySection || {
  heading: 'Our Gallery',
  images: [],
}

// Render dynamically
<section className='gallery-section'>
  <h2>{galleryData?.heading}</h2>
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {galleryData?.images?.map((item, index) => (
      <div key={index} className='gallery-item'>
        <img src={item?.image?.asset?.url} alt={item?.caption} />
        <p>{item?.caption}</p>
      </div>
    ))}
  </div>
</section>
```

### Step 4: Visit Sanity Studio

1. Go to `localhost:3333`
2. Open the About Page document
3. Scroll to "Gallery Section"
4. Add images and captions
5. Changes appear instantly on the website!

---

## Common Patterns & Best Practices

### 1. Always Use Safe Chaining

```javascript
// Safe ✅
aboutData?.section?.items?.map(...)

// Unsafe ❌
aboutData.section.items.map(...)
```

### 2. Provide Fallback Data

```javascript
const sectionData = aboutData?.section || {
  heading: 'Default Heading',
  items: [],
}
```

### 3. Use Proper Key Props

```javascript
{items.map((item, index) => (
  <div key={index}>  // Use unique index
    {item.name}
  </div>
))}
```

### 4. Handle Null Images Gracefully

```javascript
<img
  src={item?.image?.asset?.url || '/placeholder.png'}
  alt={item?.title || 'Item'}
/>
```

### 5. Use Framer Motion for Animations

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
  {/* Content */}
</motion.div>
```

---

## File Structure Summary

```
project-root/
├── studio/
│   └── schemaTypes/
│       ├── aboutPage.ts      ← Schema definitions
│       ├── homePage.ts       ← Homepage schema
│       ├── contactPage.ts    ← Contact page schema
│       └── index.ts          ← Export all schemas
├── src/
│   ├── sanity/
│   │   └── queries.js        ← GROQ queries
│   ├── pages/
│   │   ├── About.jsx         ← React component
│   │   ├── Home.jsx          ← React component
│   │   └── Contact.jsx       ← React component
│   └── hooks/
│       └── useSanityData.js  ← Data fetching hook
```

---

## Troubleshooting

### Issue: Data not showing on website

**Solutions:**
1. Check if data is saved in Sanity Studio
2. Verify query syntax in `queries.js`
3. Confirm field names match schema
4. Check browser console for errors
5. Ensure `useSanityData` hook is called with correct query

### Issue: Fallback data showing instead of Sanity data

**Solutions:**
1. Check if Sanity API token is in `.env.local`
2. Verify project ID and dataset in `client.js`
3. Check network tab in DevTools for API calls
4. Ensure `ABOUT_QUERY` is imported in component

### Issue: Icons not rendering

**Solutions:**
1. Verify icon is imported in component file
2. Check icon name matches in `getIcon()` function
3. Ensure icon name is stored correctly in Sanity

---

## Environment Setup (.env.local)

Required variables for Sanity integration:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your_auth_token
```

Get these from Sanity dashboard → Project Settings → API Tokens.

---

## Next Steps

To integrate a new page like "Contact" or "Services":

1. Create `studio/schemaTypes/contactPage.ts` with all sections
2. Add `CONTACT_QUERY` to `src/sanity/queries.js`
3. Create `src/pages/Contact.jsx` with data objects and dynamic rendering
4. Import the schema in `studio/schemaTypes/index.ts`
5. Run `npm run dev` in Sanity studio folder
6. Visit `localhost:3333` to manage content

---

## Key Takeaways

✅ **Schema** - Define content structure in Sanity  
✅ **Query** - Fetch specific fields with GROQ  
✅ **React** - Create fallbacks, map data, render dynamically  
✅ **Patterns** - Use consistent rendering patterns across sections  
✅ **Safe Access** - Always use optional chaining (`?.`)  
✅ **Maintenance** - Changes in Sanity automatically update the site
