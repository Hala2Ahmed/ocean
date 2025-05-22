import React from 'react'

export default function ProjectStructuredData ({ services }) {
        if (!services || services.length === 0) return null;
      
        const itemListElements = services.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://ocean-it.net/projects#service-${service.id}`,
          "name": service.title,
          "image": service.image
        }));
      
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Ocean IT Projects",
          "itemListElement": itemListElements
        };
        
  return (
    <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
  )
}
