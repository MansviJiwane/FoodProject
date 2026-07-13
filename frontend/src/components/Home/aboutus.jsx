import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutPage">

      {/* Hero Section */}
      <section className="aboutHero">
        <div className="heroContent">
          <h1>
            Bringing Delicious Food
            <span> To Your Doorstep</span>
          </h1>

          <p>
            We connect food lovers with their favorite restaurants,
            delivering fresh, tasty and memorable meals with just a few clicks.
          </p>

          <button>
            Explore Food
          </button>
        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
          />
        </div>
      </section>


      {/* About Section */}
      <section className="aboutSection">

        <h2>Who We Are</h2>

        <p>
          Our food ordering platform is built to make your dining experience
          easier, faster and more enjoyable. From local favorites to premium
          restaurants, we bring everything you love straight to your home.
        </p>

      </section>


      {/* Cards */}
      <section className="features">

        <div className="featureCard">
          <h3>🍕 Quality Food</h3>
          <p>
            Partnering with trusted restaurants to deliver fresh meals.
          </p>
        </div>


        <div className="featureCard">
          <h3>🚀 Fast Delivery</h3>
          <p>
            Quick and reliable delivery experience at your doorstep.
          </p>
        </div>


        <div className="featureCard">
          <h3>❤️ Customer First</h3>
          <p>
            Your satisfaction is our biggest priority.
          </p>
        </div>

      </section>


      {/* Stats */}
      <section className="stats">

        <div>
          <h1>500+</h1>
          <p>Restaurants</p>
        </div>

        <div>
          <h1>10K+</h1>
          <p>Happy Customers</p>
        </div>

        <div>
          <h1>50K+</h1>
          <p>Orders Delivered</p>
        </div>

      </section>


    </div>
  );
};

export default AboutUs;