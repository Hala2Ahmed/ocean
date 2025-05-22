import React from 'react'

export default function WebSiteStructuredData() {
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Ocean IT",
          "url": "https://ocean-it.net",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ocean-it.net/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
  return (
    <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

  )
}
