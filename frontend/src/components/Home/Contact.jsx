import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const submitHandler = (e) => {

    e.preventDefault();

    if(
      !formData.name ||
      !formData.email ||
      !formData.message
    ){
      toast.error("Please fill all fields");
      return;
    }


    toast.success("Message sent successfully!");


    setFormData({
      name:"",
      email:"",
      message:""
    });

  };



  return (

    <div className="contact-page">


      {/* Hero */}

      <section className="contact-hero">

        <h1>
          Let's Connect
          <span> With Us</span>
        </h1>


        <p>
          Have questions about your order?
          Our support team is always ready to help you.
        </p>

      </section>



      {/* Contact Cards */}

      <section className="contact-cards">


        <div className="contact-card">

          <div className="icon">
            📞
          </div>

          <h3>
            Call Us
          </h3>

          <p>
            +91 98765 43210
          </p>

        </div>



        <div className="contact-card">

          <div className="icon">
            ✉️
          </div>

          <h3>
            Email
          </h3>

          <p>
            support@orderit.com
          </p>

        </div>




        <div className="contact-card">

          <div className="icon">
            📍
          </div>

          <h3>
            Location
          </h3>

          <p>
            Nagpur, Maharashtra
          </p>

        </div>



      </section>





      {/* Contact Form */}


      <section className="contact-form-section">


        <form
          className="form-box"
          onSubmit={submitHandler}
        >


          <h2>
            Send Us A Message
          </h2>



          <input

            type="text"

            name="name"

            value={formData.name}

            onChange={handleChange}

            placeholder="Your Name"

          />




          <input

            type="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            placeholder="Your Email"

          />





          <textarea

            name="message"

            value={formData.message}

            onChange={handleChange}

            placeholder="Your Message"

          />




          <button type="submit">

            Send Message

          </button>



        </form>



      </section>



    </div>

  );

};


export default Contact;