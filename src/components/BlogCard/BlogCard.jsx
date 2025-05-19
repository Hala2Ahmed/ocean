import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({latest_blogs}) {
  return (
    <div className="pt-4 md:pt-[102px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {latest_blogs.map((card, index) => (
          <div key={index} className="rounded-[10px] flex flex-col bg-primary">
             <Link to={`/blog-details/${index+1}`}>
            <img src={card.image} className="w-full h-[260px] object-cover mb-[74px] rounded-t-[10px]" alt={card.title} />
            <div>
              <div className="mb-[37px] ms-[28px]">
                <p className="text-2xl font-semibold leading-tight tracking-tight">{card.title}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
