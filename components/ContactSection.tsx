'use client';
import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import emailjs from "emailjs-com";
require("dotenv").config();

const config = {
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  userId: process.env.NEXT_PUBLIC_USER_ID,
};

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false); // Track the email sending status

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      emailjs
        .send(
          config.serviceId as string,
          config.templateId as string,
          {
            name,
            email,
            message,
          },
          config.userId as string
        )
        .then((response) => {
          console.log("Email sent successfully!", response.text);
          setIsEmailSent(true); // Set the email sent status to true
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
        </h1>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-neutral-400"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-neutral-400 ${
                  nameError ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Bob"
                value={name}
                onChange={handleNameChange}
              />
              {nameError && <p className="text-red-500 mt-2 text-xs italic">{nameError}</p>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-neutral-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-neutral-400 ${
                  emailError ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="bob@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-500 mt-2 text-xs italic">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-neutral-400"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-neutral-400 ${
                  messageError ? "border-red-500" : ""
                }`}
                id="message"
                rows={4}
                placeholder="I would like to send you a job offer..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {messageError && <p className="text-red-500 mt-2 text-xs italic">{messageError}</p>}
            </div>
            <div className="flex justify-center">
              {isEmailSent ? (
                <p className="text-blue-600 font-semibold">
                  Email sent successfully!
                </p>
              ) : (
                <button
                  className="text-neutral-100 font-semibold px-6 py-2 bg-blue-600 rounded shadow hover:bg-blue-700"
                  type="submit"
                >
                  <RiMailSendLine className="inline-block mr-2" /> Send Email
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
