import React, { useState } from "react";

const MediaCard = ({ media }) => {
  return (
    <div className="flex rounded-lg flex-col h-full">
      {media.type === "video" ? (
        <div className="relative pt-[56.25%] rounded-xl overflow-hidden"> {/* 16:9 aspect ratio */}
          <iframe
            src={media.image}
            className="absolute top-0 left-0 w-full h-[382px] "
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Portfolio video"
          />
        </div>
      ) : (
        <img 
          src={media.image} 
          alt="Portfolio" 
          className="w-full h-[382px] object-cover rounded-xl" 
        />
      )}
    </div>
  );
};

export default function GenericPortfolioCard({ 
  data,
  servicesKey = "services",
  itemsToShow = 6
}) {
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
            <MediaCard key={`work-${work.id}`} media={work} />
          ))}
        </div>
      </div>
    </div>
  );
}