import React, { useState } from "react";
const MediaCard = ({ media }) => {
  const getVideoType = (url) => {
    const extension = url.split(".").pop().split(/#|\?/)[0].toLowerCase();
    switch (extension) {
      case "mp4":
        return "video/mp4";
      case "webm":
        return "video/webm";
      case "ogg":
      case "ogv":
        return "video/ogg";
      case "mov":
        return "video/quicktime";
      case "avi":
        return "video/x-msvideo";
      default:
        return "video/mp4";
    }
  };
  return (
    <div className="flex rounded-lg flex-col h-full">
      {media.type === "video" ? (
        media.image.includes("youtube.com") ||
        media.image.includes("youtu.be") ? (
          <div className="relative pt-[56.25%]"> {/* نسبة 16:9 */}
          <iframe
            src={media.image.includes('watch?v=') ? 
                 media.image.replace('watch?v=', 'embed/') : 
                 media.image.replace('youtu.be', 'youtube.com/embed')}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Portfolio video"
          />
        </div>
      ) : (
        <div className="relative">
          <video 
            controls 
            className="w-full h-auto max-h-[382px]"
            style={{ aspectRatio: '16/9' }}
          >
            <source src={media.image} type={getVideoType(media.image)} />
            Your browser does not support the video tag.
          </video>
        </div>
        )
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
  // itemsToShow = 6
}) {
  const [activeCategory, setActiveCategory] = useState(0);

  if (!data || !data[servicesKey] || data[servicesKey].length === 0) {
    return <div className="text-white text-center py-8">No data available</div>;
  }

  const categories = data[servicesKey];
  const activeCategoryData = categories[activeCategory];
  const worksToShow = activeCategoryData?.works;

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