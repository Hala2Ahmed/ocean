import React from 'react';
import blog1 from '../../assets/blog-img1.png';
import blog2 from '../../assets/blog-img2.png';
import blog3 from '../../assets/blog-img3.png';

export default function BlogCard() {
  const cards = [
    {
      image: blog1,
      title: 'The Top Benefits of AI for Marketers, State of AI Data',
    },
    {
      image: blog2,
      title: 'AI Tools to Help You Grow Your AI Graphics Business',
    },
    {
      image: blog3,
      title: 'When Is the Best Time to Post on Instagram in 2023?',
    },
  ];

  return (
    <div className="pt-4 md:pt-[102px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="rounded-[10px] flex flex-col justify-between bg-primary">
            <img src={card.image} className="w-full mb-[74px] rounded-t-[10px]" alt={card.title} />
            <div>
              <div className="mb-[37px] ml-[28px]">
                <p className="text-2xl font-semibold leading-tight tracking-tight">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
