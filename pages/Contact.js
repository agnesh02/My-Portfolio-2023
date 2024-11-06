import React, { useState, useContext } from "react";
import { firestore } from "./Backend";
import { setDoc, doc } from "firebase/firestore";
import AppContext from "../state/AppContext";

const Contact = function () {
  const { darkMode } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", msg: "" });

  const validateFields = (name, email, msg) => {
    let valid = true;
    let tempErrors = { name: "", email: "", msg: "" };

    if (!name) {
      tempErrors.name = "Name is required";
      valid = false;
    }
    if (!email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      tempErrors.email = "Enter a valid email";
      valid = false;
    }
    if (!msg) {
      tempErrors.msg = "Message is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const obtainInformation = function () {
    const nameVal = document.getElementById("nameInput").value;
    const emailVal = document.getElementById("emailInput").value;
    const msgVal = document.getElementById("messageInput").value;
    return {
      name: nameVal,
      email: emailVal,
      msg: msgVal,
    };
  };

  const sendData = async function () {
    const { name, email, msg } = obtainInformation();

    // Validate before submitting
    if (!validateFields(name, email, msg)) return;

    setIsSubmitting(true); // Start the submission process

    await setDoc(doc(firestore, "Users", email), {
      name: name,
      email_id: email,
      message: msg,
    })
      .then(() => {
        setIsSubmitting(false); // Stop the loader
        alert(
          `Hey ${name},\nYour response was recorded successfully. I will get back to you :)`
        );
      })
      .catch((e) => {
        setIsSubmitting(false); // Stop the loader
        alert(
          "Oops..some error occurred while submitting your response. Please try again :( ."
        );
      });
  };

  return (
    <section className={`h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div
        className={`mx-auto mt-32 max-w-[700px] rounded-3xl px-5 py-10 ${
          darkMode ? "bg-white" : "bg-gray-100"
        } lg:px-10`}
      >
        <h2
          className={`mb-12 font-poppins_medium text-3xl font-bold ${
            darkMode ? "text-black" : "text-gray-900"
          }`}
        >
          Contact / Enquire
        </h2>

        <div className="form-group mb-6">
          <input
            type="text"
            className={`form-control m-0 block w-full rounded border border-solid ${
              darkMode
                ? "border-gray-500 bg-white text-black" // Darker border in dark mode
                : "border-gray-300 bg-white text-gray-700"
            } px-3 py-1.5 text-base transition ease-in-out focus:border-blue-600 focus:outline-none`}
            id="nameInput"
            placeholder="Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="form-group mb-6">
          <input
            type="email"
            className={`form-control m-0 block w-full rounded border border-solid ${
              darkMode
                ? "border-gray-500 bg-white text-black" // Darker border in dark mode
                : "border-gray-300 bg-white text-gray-700"
            } px-3 py-1.5 text-base transition ease-in-out focus:border-blue-600 focus:outline-none`}
            id="emailInput"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="form-group mb-6">
          <textarea
            className={`form-control m-0 block w-full rounded border border-solid ${
              darkMode
                ? "border-gray-500 bg-white text-black" // Darker border in dark mode
                : "border-gray-300 bg-white text-gray-700"
            } px-3 py-1.5 text-base transition ease-in-out focus:border-blue-600 focus:outline-none`}
            id="messageInput"
            rows="3"
            placeholder="Message"
          ></textarea>
          {errors.msg && (
            <p className="mt-1 text-sm text-red-500">{errors.msg}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full rounded-md px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() => sendData()}
          disabled={isSubmitting} // Disable button when submitting
        >
          {isSubmitting ? (
            <div className="flex justify-center">
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0116 0"
                />
              </svg>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </section>
  );
};

export default Contact;
