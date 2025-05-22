import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useFormik } from "formik";

export default function useNewsletterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const initialValues = {
    email: "",
  };

  const onSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    axios
      .post("https://dashboard.ocean-it.net/api/join-our-weekly", values)
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
          iconColor: '#3500fc',
          background: '#262626',
          color: '#fff'
        });
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.response?.data?.message || "An error occurred");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return {
    isLoading,
    errorMsg,
    formik,
  };
}
