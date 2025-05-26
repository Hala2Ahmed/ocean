import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import pdfIcon from '../../assets/Artboard.png';

async function fetchCompanyProfile() {
  const response = await fetch("https://dashboard.ocean-it.net/api/download-company-profile");
  if (!response.ok) {
    throw new Error('Failed to fetch company profile');
  }
  
  const pdfBlob = await response.blob();
  const pdfUrl = URL.createObjectURL(pdfBlob);
  
  return { pdfUrl };
}

export default function PdfDownloadButton() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const { data, isLoading, error } = useQuery({
    queryKey: ['companyProfile'],
    queryFn: fetchCompanyProfile,
  });

  React.useEffect(() => {
    return () => {
      if (data?.pdfUrl) {
        URL.revokeObjectURL(data.pdfUrl);
      }
    };
  }, [data]);

  if (isLoading) return null;
  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
  if (!data?.pdfUrl) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = data.pdfUrl;
    link.setAttribute("download", "company-profile.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`fixed bottom-[28%] z-50 ${isArabic ? "left-8" : "right-8"}`}>
      <div className="relative group">
        <a
          href={data.pdfUrl}
          onClick={handleDownload}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg"
          aria-label={t('download')}
        >
          <div className="relative z-20 w-10 h-10 overflow-hidden rounded-md">
            <img 
              src={pdfIcon} 
              alt="PDF Icon" 
              className="w-full h-full object-contain"
            />
          </div>
        </a>
        
        <div className="
          absolute -bottom-7 left-1/2 transform -translate-x-1/2
          bg-[#0d0d0d] text-white text-xs py-1 px-2 rounded
          opacity-0 group-hover:opacity-100 transition-opacity
          pointer-events-none whitespace-nowrap capitalize
        ">
          {t('download profile')}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#0d0d0d]" />
        </div>
      </div>
    </div>
  );
}