import React, { useState } from "react";
import contact from "../../assets/contactImg.png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import Swal from "sweetalert2";

async function fetchContactData(lang) {
  try {
    const response = await axios.get(
      "https://dashboard.ocean-it.net/api/contact-us",
      {
        headers: { lang: lang },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
export default function Contact() {
  const { t, i18n } = useTranslation();
  const [loading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["contactData", i18n.language],
    queryFn: () => fetchContactData(i18n.language === "ar" ? "ar" : "en"),
    // staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
  // console.log(data);

  const getContactSetting = (key) => {
    return (
      data?.data?.Contact_settings?.find((item) => item.key_id === key)
        ?.value || ""
    );
  };
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  };

  const onSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    axios
      .post("https://dashboard.ocean-it.net/api/contact-us", values)
      .then(({ data }) => {
        setErrorMsg("");
        setIsLoading(true);
        Swal.fire({
          icon: "success",
          title: "Sent successfully",
          text: data.message,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        resetForm();
      })
      .catch((err) => {
        // console.log(err);
        setErrorMsg(err.response?.data?.message || "Error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues,
      onSubmit,
    });
  const highlightOceanWord = (text) => {
    if (!text) return "";
    const parts = text.split("Ocean");
    if (parts.length === 1) return text;

    return (
      <>
        {parts[0]}
        <span className="text-secondBlue">Ocean</span>
        {parts[1]}
      </>
    );
  };
  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data?.data) {
    return (
      <div className="text-white overflow-hidden pt-[130px] text-center flex flex-row gap-2 h-screen justify-center items-center bg-secondBackground">
        Error loading data
      </div>
    );
  }

  return (
    <>
     <title>{t("navbarButton")}</title>
     <meta name="description" content={t("aboutDesc")} />
    <div className="bg-secondBackground text-white overflow-hidden pt-[130px]">
      <div className="text-center lg:pt-[116px] pt-[36px]">
        <span className="text-[51px] font-semibold leading-[1.1]">
          {getContactSetting(`contactus_title_${i18n.language}`) || getContactSetting("contactus_title_en")}
        </span>
        <h2 className="text-[22px] font-semibold leading-[1.4] max-w-[787px] mx-auto px-[20px] pt-[23px] pb-[44px] lg:pb-[96px]">
          {highlightOceanWord(
            getContactSetting(`contactus_intro_${i18n.language}`)
          ) || highlightOceanWord(
            getContactSetting("contactus_intro_en")
          )}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-[50px] md:px-8 lg:pr-[100px] lg:pb-[310px] pb-[50px]">
        <div className="w-full lg:w-auto px-0 lg:px-[40px]">
          <h5 className="max-w-full lg:max-w-[581px] text-[24px] md:text-[30px] font-semibold tracking-[-0.6px]">
            {getContactSetting(`contactus_form_heading_${i18n.language}`) || getContactSetting("contactus_form_heading_en")}
          </h5>
          <p className="max-w-full lg:max-w-[608px] opacity-80 text-[13px] pt-[7px] pb-[20px] md:pb-[41px] font-medium leading-[1.6] tracking-[0.26px] text-white/80">
            {getContactSetting(`contactus_form_desc_${i18n.language}`) || getContactSetting("contactus_form_desc_en")}
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row gap-[14px]">
              <input
                name="first_name"
                required
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.first_name}
                className="w-full p-[12px_14px] rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
                placeholder={t("FirstName")}
                type="text"
              />
              <input
                name="last_name"
                required
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.last_name}
                className="w-full p-[12px_14px] rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
                placeholder={t("LastName")}
                type="text"
              />
            </div>
            <input
              name="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              className="p-[12px_14px] my-[14px] w-full rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
              placeholder={t("Email")}
              type="email"
            />
            <input
              name="phone"
              required
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              className={`p-[12px_14px] w-full rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              placeholder={t("PhoneNumber")}
              type="tel"
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              rows="4"
              className="resize-none p-[12px_14px] my-[14px] w-full rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
              placeholder={t("Message")}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer rounded-[40px] bg-secondBlue py-[12px] text-[15px] font-medium tracking-[-0.15px] text-white hover:bg-secondBlue/90 transition-colors duration-200"
            >
              {t("submitForm")}
            </button>
            {errorMsg && <div className="text-red-600">{errorMsg}</div>}
          </form>
        </div>
        <div className="w-full lg:w-auto mt-8 lg:mt-0">
          <img
            className="w-full max-w-[500px] lg:max-w-none mx-auto"
            src={contact}
            alt="space"
          />
        </div>
      </div>
    </div>
    </>
  );
}
