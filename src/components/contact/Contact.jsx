import React, {useState,useRef } from "react";
import '../contact/Contact.scss'
import emailjs from "@emailjs/browser";
// import { toast} from 'react-toastify';


const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const form=useRef()
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_csifuqr', 'template_ndwzhde', form.current, 'bYUp7xoJxbhX4IkQg')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent successfully")
      }, (error) => {
          console.log(error.text);
         alert("400 Bad Request")
      })
    setName('');
    setEmail('');
    setMessage('');
  };
  
  return (
    <>
      <div className="contactus  py-1" id="contact">
        <h1 className="text-center main-heading main_heading">
          I’d love to hear from you!
        </h1>
        <p className="text-center w-75 mx-auto head-text">
          If you want to ask a question or get in touch for any query, fill the
          form and I’ll get back to you soon!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto py-5"
          style={{ maxWidth: "70%" }}
        >
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control mb-4"
              id="name"
              placeholder="Enter your full name"
              name="user_name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
          </div>
          {/* Email */}
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              autoComplete="off"
              className="form-control mb-4"
              id="email"
              placeholder="Enter your email address"
              name="user_email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>

            {/* TextArea */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                autoComplete="off"
                className="form-control mb-4 textarea"
                id="message"
                placeholder="Type your message here"
                rows="5"
                name="message"
                onChange={(e)=>setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="Submit" className="btn">
                Send
              </button>
            </div>
        </form>
      </div>
    </>
  );
};


export default Contact;
