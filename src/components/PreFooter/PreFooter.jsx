import img1 from "../../assets/253b63903a5bfc358e24dd058dc052a0.gif";
import { useTranslation } from "react-i18next";
import useNewsletterForm from "../../CustomHook/JoinOurWeekly";

export default function PreFooter() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { isLoading, errorMsg, formik } = useNewsletterForm();

  return (
    <div className="bg-secondBackground text-[#ffffff] pt-[104px] pb-[75px] px-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center max-w-screen-xl mx-auto">
        <div className="bg-blue p-[14px_32px_17px] rounded-[114px] sm:w-full md:w-[406px] sm:mx-auto mx-0">
          <img className="scale-x-[-1]" src={img1} alt="gif" />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-[45px] text-blue" data-aos="fade-up" data-aos-delay="200">{t("preFooter")}</h4>
          <form onSubmit={formik.handleSubmit} className="relative mt-[75px]">
            <input
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              type="email"
              placeholder={t("preFooterInput")}
              autoComplete="email"
              aria-label="Enter Your Mail..."
              className={`w-full py-[22px] px-[29px] outline-none placeholder:text-[#757575] bg-[#d4d8dd] rounded-[47px] caret-black text-black`}
            />
            <div
              className={`absolute inset-y-1 ${isRTL ? "left-1" : "right-1"}`}
            >
              <button
                disabled={isLoading}
                type="submit"
                aria-label="Submit"
                className="flex h-full items-center justify-center py-[17px] pr-[27px] pl-[37px] bg-blue uppercase rounded-[30px] text-[12px] text-xs font-semibold leading-[1.63] text-center text-white cursor-pointer hover:bg-blue/88 duration-300"
              >
                {t("preFooterButton")}
              </button>
              {errorMsg && <div className="text-red-600">{errorMsg}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
