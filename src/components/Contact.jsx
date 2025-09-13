import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sendEmail = () => {
    emailjs.sendForm('service_87qkbe5', 'template_rzt38ai', form.current, 'sqtRn6kCv90_OlcDM')
      .then(() => {
        setIsSent(true);
        form.current.reset(); // Reset the form fields after Sending
        toast.success("Message sent successfully!"
          , { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "dark", }
        );
      }, (error) => {
        toast.error("Failed to send message. Please try again."
          , { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "dark", }
        );
      }).finally(() => {
        setIsSending(false)
      });
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      {/* toast container */}
      <ToastContainer />
      {/* heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* contact form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>
        <form ref={form} className="mt-4 flex flex-col space-y-4 ">
          <input
            type="Email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* send button */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setIsSending(true);
              // Validate inputs before sending
              const email = form.current.user_email.value.trim();
              const name = form.current.user_name.value.trim();
              const message = form.current.message.value.trim();
              const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

              if (!email || !emailRegex.test(email)) {
                toast.error("Please enter a valid email address.", { position: "top-right", autoClose: 5000, theme: "dark" });
                setIsSending(false);
                return;
              }
              if (!name) {
                toast.error("Please enter your name.", { position: "top-right", autoClose: 5000, theme: "dark" });
                setIsSending(false);
                return;
              }
              if (!message) {
                toast.error("Please enter your message.", { position: "top-right", autoClose: 5000, theme: "dark" });
                setIsSending(false);
                return;
              }
              sendEmail();
            }}
            className="w-full py-3  bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition flex items-center justify-center hover:cursor-pointer"
            disabled={isSending}
          >
            {isSending ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
