import React, { useState } from "react";
import { firestore } from "./Backend";
import { setDoc, doc } from "firebase/firestore";

const Contact = function () {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className="h-screen">
      <div className="mx-auto mt-32 max-w-[700px] rounded-3xl px-5 py-10 dark:bg-white lg:px-10">
        <h2 className=" mb-12 font-poppins_medium text-3xl font-bold">
          Contact / Enquire
        </h2>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            id="nameInput"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            id="emailInput"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className=" form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            id="messageInput"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        {/* Button with loading state */}
        <button
          type="submit"
          className=" w-full rounded-md bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          onClick={() => sendData()}
          disabled={isSubmitting} // Disable button when submitting
        >
          {isSubmitting ? (
            <div className="flex justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
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
