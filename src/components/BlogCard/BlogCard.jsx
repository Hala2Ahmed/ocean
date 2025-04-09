import React from 'react';
import blog1 from '../../assets/blog-img1.png';
import blog2 from '../../assets/blog-img2.png';
import blog3 from '../../assets/blog-img3.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function BlogCard() {
    const { t, i18n } = useTranslation();
  const cards = [
    {
      image: blog1,
      title: t("blogCard1"),
    },
    {
      image: blog2,
      title: t("blogCard2"),
    },
    {
      image: blog3,
      title: t("blogCard3"),
    },
  ];

  return (
    <div className="pt-4 md:pt-[102px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="rounded-[10px] flex flex-col bg-primary">
            <Link to="/blog">
            <img src={card.image} className="w-full mb-[74px] rounded-t-[10px]" alt={card.title} />
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
