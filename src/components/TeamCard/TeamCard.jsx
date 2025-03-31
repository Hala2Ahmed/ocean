import React from 'react'
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import about5 from "../../assets/about5.png";
import about6 from "../../assets/about6.png";
import about7 from "../../assets/about7.png";
import about8 from "../../assets/about8.png";
import about9 from "../../assets/about9.png";
import about10 from "../../assets/about10.png";
import about11 from "../../assets/about11.png";
import { useTranslation } from 'react-i18next';
export default function TeamCard() {
    const { t, i18n } = useTranslation();
  
    const cards = [
        {
          image: about3,
          title: t("aboutTeam1Title"),
          description:t("aboutTeam1Desc")
        },
        {
          image: about4,
          title: t("aboutTeam2Title"),
          description:t("aboutTeam2Desc")
        },
        {
          image: about5,
          title: t("aboutTeam3Title"),
          description:t("aboutTeam3Desc")
        },
        {
          image: about6,
          title: t("aboutTeam4Title"),
          description:t("aboutTeam4Desc")
        },
        {
          image: about7,
          title: t("aboutTeam5Title"),
          description:t("aboutTeam5Desc")
        },
        {
          image: about8,
          title: t("aboutTeam6Title"),
          description:t("aboutTeam6Desc")
        },
        {
          image: about9,
          title: t("aboutTeam7Title"),
          description:t("aboutTeam7Desc")
        },
        {
          image: about10,
          title: t("aboutTeam8Title"),
          description:t("aboutTeam8Desc")
        },
        {
          image: about11,
          title: t("aboutTeam9Title"),
          description:t("aboutTeam9Desc")
        },
      ];
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col justify-between pb-[39.6px] rounded-[3px] bg-white/5">
            <img src={card.image} className="w-full mb-[40px] rounded-t-[3px]" alt={card.title} />
            <div>
              <div className="ms-[44.5px]">
                <h5 className="text-[18px] font-bold">{card.title}</h5>
                <p className='text-[14px] font-medium text-white/60'>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
