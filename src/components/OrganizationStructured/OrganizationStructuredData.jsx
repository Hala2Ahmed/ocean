import React from 'react'

export default function OrganizationStructuredData({ generalSettings, homeSettings, seoSettings }) {
        const getValue = (key) => {
          const item = generalSettings.find(i => i.key_id === key);
          return item?.value || '';
        };
      
        const name = seoSettings?.title || 'Ocean IT';
        const description = seoSettings?.description || '';
        const logo = "https://ocean-it.net/assets/Group%202%202-CnZ77SGV.svg";
        const url = "https://ocean-it.net";
      
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": name,
            "description": description,
            "url": url,
            "logo": logo,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": getValue('whatsApp'),
              "contactType": "Customer Support",
              "areaServed": "PS",
              "availableLanguage": ["English", "Arabic"]
            },
            "sameAs": [
                getValue('instagram'),
                getValue('twitter'),
                getValue('youtube')
              ]
            };
                        
  return (
    <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
  )
}
