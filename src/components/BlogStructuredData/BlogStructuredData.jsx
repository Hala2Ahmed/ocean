import React from "react";

export default function BlogStructuredData({ blog }) {    
    if (!blog) return null;

    const { title, description, image, by, date, id } = blog;    

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "image": [image],
      "author": {
        "@type": "Person",
        "name": by
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ocean IT",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ocean-it.net/assets/Group%202%202-CnZ77SGV.svg"
        }
      },  
      "datePublished": new Date(date).toISOString(),
      "dateModified": new Date(date).toISOString(),
      "description": description,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://ocean-it.net/blog/${id}`
      }
    };
  
    return (
      <>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </>
    );
  };