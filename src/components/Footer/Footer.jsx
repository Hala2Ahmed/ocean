import logo from "../../assets/Group 2 2.svg";
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
      <div className="max-w-screen-xl mx-auto px-7 pt-[40px]">
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
                  className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-white transition duration-300 ease-linear hover:text-blue"
                >
                  <svg
                    fill="currentColor"
                    aria-label="Facebook"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                  >
                    <g>
                      <path d="M16.403 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18h-2.77c-3.593 0-4.8 1.657-4.8 4.54V9H7v3h2.66v9h3.34v-9h2.797l.426-3h-3.223z"></path>
                    </g>
                  </svg>{" "}
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-white transition duration-300 ease-linear hover:text-blue"
                >
                  <svg
                    fill="currentColor"
                    aria-label="Twitter"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                  >
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-white transition duration-300 ease-linear hover:text-blue"
                >
                  <svg
                    fill="currentColor"
                    aria-label="Instagram"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                  >
                    <g>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </g>
                  </svg>{" "}
                </a>
              )}
            </div>
          </div>
          <div className="sm:col-span-1 md:mx-auto">
            <p className="font-bold text-[22px] text-[#ffffff] pb-[25px]">
              {t("footerExplore")}
            </p>
            <div className="flex flex-col items-start ">
              <Link to="/projects" className="hover:text-blue duration-300">
                {t("footerProjects")}
              </Link>
              <Link
                to="/HowItWork"
                className="pt-[20px] pb-[20px] hover:text-blue duration-300"
              >
                {t("footerWorks")}
              </Link>
              <Link to="/contact" className="hover:text-blue duration-300">
                {t("footerContact")}
              </Link>
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
