import logo from "../../assets/Group 2 2.svg";
import yutubeIcon from "../../assets/Vector (Stroke).svg";
import TwitterLogo from "../../assets/TwitterLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import { useTranslation } from "react-i18next";
import useNewsletterForm from "../../CustomHook/JoinOurWeekly";
import { useHomeData } from "../../CustomHook/HomeSocialLink";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { isLoading, errorMsg, formik } = useNewsletterForm();
  const { data } = useHomeData();
  const instagram = data?.data?.general_settings?.find(
    (item) => item.key_id === "instagram"
  )?.value;
  const twitter = data?.data?.general_settings?.find(
    (item) => item.key_id === "twitter"
  )?.value;
  const youtube = data?.data?.general_settings?.find(
    (item) => item.key_id === "youtube"
  )?.value;

  return (
    <footer className="bg-primary text-white">
      <div className="lg:px-[212px] px-[40px] pt-[40px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-1">
            <img src={logo} alt="logo ocean" className="w-24 md:w-32" />
            <p className="max-w-[238px] text-[#CCCCCC] pt-[30px] pb-[20px]">
              {t("footer")}
            </p>
            <p className="max-w-[238px] text-[#CCCCCC]">{t("footerHeader")}</p>
            <div className="flex gap-4 pt-[15px] pb-[30px]">
              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-95 hover:drop-shadow-md cursor-pointer"
                >
                  <img src={yutubeIcon} alt="youtube Icon" />
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-95 cursor-pointer"
                >
                  <img
                    src={TwitterLogo}
                    alt="Twitter Icon"
                    className="hover:shadow-lg"
                  />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-95 hover:drop-shadow-md cursor-pointer"
                >
                  <img src={InstagramLogo} alt="Instagram Icon" />
                </a>
              )}
            </div>
          </div>
          <div className="sm:col-span-1 md:mx-auto">
            <p className="font-bold text-[22px] text-[#ffffff] pb-[25px]">
              {t("footerExplore")}
            </p>
            <div className="flex flex-col items-start ">
              <Link to="/projects" className="hover:text-blue duration-300">{t("footerProjects")}</Link>
              <Link to="/HowItWork" className="pt-[20px] pb-[20px] hover:text-blue duration-300">{t("footerWorks")}</Link>
              <Link to="/contact" className="hover:text-blue duration-300">{t("footerContact")}</Link>
            </div>
          </div>
          <div className="sm:col-span-2">
            <h3 className="font-semibold text-[35px] max-w-[432px]">
              {t("footerContactHeader")}
            </h3>
            <p className="text-[#CCCCCC] pt-[14px] pb-[20px]">
              {t("footerContactHeader1")}
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="relative flex items-center justify-between"
            >
              <input
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                type="email"
                name="email"
                className="md:py-[16px] px-4 py-4 md:px-5 md:pl-5 border bg-white rounded-[20px] text-lg text-gray-900 placeholder:py-[19px] placeholder:text-[#000000] focus:outline-none flex-1 w-full"
                placeholder={t("footerInput")}
              />
              <button
                disabled={isLoading}
                type="submit"
                className={`absolute ${
                  i18n.language === "ar" ? "left-0" : "right-0"
                } px-4 py-5 md:py-[19px] md:px-[50px] cursor-pointer bg-blue shadow-md rounded-[20px] text-white font-semibold hover:bg-blue/88 duration-300`}
              >
                {t("footerButton")}
              </button>
              {errorMsg && <div className="text-red-600">{errorMsg}</div>}
            </form>
          </div>
        </div>
        <hr className=" border-gray-200 mt-[30px]" />
        <p className="text-[#CCCCCC] text-center pt-[20px] pb-[43px] text-[12px]">
          {t("footerCopyright")}
        </p>
      </div>
    </footer>
  );
}
