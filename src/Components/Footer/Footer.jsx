import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_contact: "",
    message: "",
  });

  const [status, setStatus] = useState("");
3
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_czgbnrp"; 
    const templateID = "template_19s57ua"; 
    const userID = "oci8KPreVm8uKlz41"; 

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("Success!", response);
          setStatus("Message sent successfully!");
          setFormData({
            user_name: "",
            user_contact: "",
            message: "",
          });

          // Hide success message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          console.error("Failed to send message:", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer className="font-geist bg-[#0d1638] text-white p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">📬 Contact Me</h2>
        <p className="text-sm md:text-lg opacity-80">Get in Touch</p>

        {/* Added Address, Phone, Email */}
        <div className="mt-6 space-y-4">
          <p className="text-sm"> 
            <strong>Address:</strong> <br /> 
            Bhiwadi, Alwar<br /> 
            Rajasthan, India - 301019
          </p>
          <p className="text-sm">
            <strong>Email:</strong>  <br /> 
            <a href="mailto:sskumartarun@gmail.com" className="text-[#FFDD95]">sskumartarun@gmail.com</a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> <br /> 
            <a href="tel:+919269998482" className="text-[#FFDD95]">+91 9269998482</a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mt-8">
        <h3 className="text-2xl font-bold mb-4">Message Me</h3>
        
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={formData.user_name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-[#1b263b] border-2 border-[#333] text-white"
        />
        <input
          type="text"
          name="user_contact"
          placeholder="Email Address"
          value={formData.user_contact}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md bg-[#1b263b] border-2 border-[#333] text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-2 rounded-md bg-[#1b263b] border-2 border-[#333] text-white"
        />
        <button
          type="submit"
          className="w-full bg-[#FFDD95] text-black font-bold py-2 rounded-md hover:bg-[#FFBB77]"
        >
          Send Message
        </button>
      </form>

      {/* Success or Error message */}
      {status && (
        <p className="mt-4 text-center text-lg text-white">{status}</p>
      )}
    </footer>
  );
};

export default Footer;
