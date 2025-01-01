"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Script from "next/script";

// Define grecaptcha as a global variable
if (typeof window !== "undefined") {
  window.grecaptcha = window.grecaptcha || {};
}

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null); // Reset form status

    const form = e.target;

    try {

      // Obtain reCAPTCHA token
      const token = await window.grecaptcha.execute(
        "6Lf66okqAAAAAJl4KiN6G_ZD6k8WXGkCTPolNCZJ", // Replace with your Google reCAPTCHA site key
        { action: "submit" }
      );

      // Append reCAPTCHA token to the form data
      const formData = new FormData(form);
      formData.append("recaptcha-token", token);

      // Send the form data to Formspree
      const response = await fetch("https://formspree.io/f/movqkvwo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const responseBody = await response.json();

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
        console.error("Formspree error:", responseBody);
      }
    } catch (error) {
      setFormStatus("error");
      console.error("Error during form submission:", error);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>Say Hello 😊</div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleSubmit}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <label htmlFor="name">Your Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <label htmlFor="email">Your Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          ></textarea>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {formStatus === "success" && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {formStatus === "error" && (
            <span className="text-red-600 font-semibold">
              Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>
      {/* Google reCAPTCHA script */}
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6Lf66okqAAAAAJl4KiN6G_ZD6k8WXGkCTPolNCZJ"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.grecaptcha) {
            window.grecaptcha.ready(() => {
            });
          }
        }}
      />
    </motion.div>
  );
};

export default ContactPage;
