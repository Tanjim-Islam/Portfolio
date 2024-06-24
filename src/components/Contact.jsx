import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const validateForm = () => {
    let errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Email is invalid";
    if (!form.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      e.preventDefault();
    }
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          ref={formRef}
          action="https://getform.io/f/jawxpozb"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium rounded-xl" // Changed to "rounded-xl"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium rounded-xl" // Changed to "rounded-xl"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium rounded-xl" // Changed to "rounded-xl"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message}</span>
          )}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary border border-white rounded-xl" // Added "border border-white rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
