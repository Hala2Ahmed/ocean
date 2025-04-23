import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import WhatsAppContact from "../components/WhatsAppContact/WhatsAppContact";
import ScrollToTopArrow from "../components/ScrollToTopArrow/ScrollToTopArrow";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <WhatsAppContact />
      <ScrollToTopArrow />
      <Footer />
    </>
  );
}
