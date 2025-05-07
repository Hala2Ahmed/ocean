import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const PortfolioCard = ({ image }) => {
  return (
    <div className="flex rounded-lg flex-col">
      <img src={image} alt="Portfolio" className="w-full rounded-xl" />
    </div>
  );
};

export default function GenericPortfolioCard({ 
  data,
  servicesKey = "services", // يمكن تغييرها إلى "recent_services" عند الاستخدام
  showTitle = true,
  itemsToShow = 6
}) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);

  if (!data || !data[servicesKey] || data[servicesKey].length === 0) {
    return <div className="text-white text-center py-8">No data available</div>;
  }

  const categories = data[servicesKey];
  const activeCategoryData = categories[activeCategory];
  const worksToShow = activeCategoryData?.works?.slice(0, itemsToShow) || [];

  return (
    <div className="flex flex-col items-center justify-center">

      <div className="w-full px-4 py-2 pb-[40px] pt-[20px] rounded-sm flex flex-wrap justify-center gap-2 md:gap-4 text-white cursor-pointer text-sm md:text-lg font-semibold">
        {categories.map((category, index) => (
          <div
            key={`${category.id}-${index}`}
            className={`px-2 transition-all duration-300 ${
              index === activeCategory
                ? "border-b-2 border-blue text-blue"
                : "hover:border-b-2 hover:border-blue hover:text-blue"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.title}
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {worksToShow.map((work) => (
            <PortfolioCard key={`work-${work.id}`} image={work.image} />
          ))}
        </div>
      </div>
    </div>
  );
}