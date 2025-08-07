import { Card, Testimonial } from "@mohansai850/react-components";
import "./App.css";
import { CARD_DATA, TESTIMONIAL_DATA } from "../util";

export default function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo-button">
          <img src="omnifood-logo.png" alt="Omnifood Logo" className="logo" />
        </a>
        <a href="#how-it-works" className="nav-link">
          How it works?
        </a>
        <a href="#meals" className="nav-link">
          Meals
        </a>
        <a href="#gallery" className="nav-link">
          Gallery
        </a>
        <a href="#plans" className="nav-link">
          Plans
        </a>
        <a href="#cta" className="hero-button nav-link">
          Subscribe
        </a>
      </header>
      <main>
        <div className="grid-container">
          <section className="hero-text-box">
            <h1 className="headline">
              A healthy meal delivered to your door, every single day
            </h1>
            <div className="description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </div>
            <div className="links">
              <a href="#cta" className="hero-button">
                Start eating well
              </a>
              <a href="#how-it-works" className="hero-button btn-outline">
                Learn more &darr;
              </a>
            </div>
            <div className="happy-faces">
              <div className="face-images">
                <img src="customer-1.jpg" alt="customer-1" />
                <img src="customer-2.jpg" alt="customer-2" />
                <img src="customer-3.jpg" alt="customer-3" />
                <img src="customer-4.jpg" alt="customer-4" />
                <img src="customer-5.jpg" alt="customer-5" />
                <img src="customer-6.jpg" alt="customer-6" />
              </div>
              <div className="delivered-number">
                <span>250,000+</span> meals delivered last year!
              </div>
            </div>
          </section>
          <div className="hero-img-box">
            <img src="app-hero.png" alt="Meals image" className="hero-img" />
          </div>
          <div className="how" id="how-it-works">
            <h4 className="how-head">How it works?</h4>
            <h3 className="how-desc">
              Your daily dose of health in 3 simple steps
            </h3>
          </div>
          <div className="steps pad-left">
            <div className="step-number">01</div>
            <div className="step-head">Tell us what you like</div>
            <div className="step-desc">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </div>
          </div>
          <div className="step-img-box">
            <img
              src="app-screen-1.png"
              alt="iPhone showing step-1"
              className="step-img"
            />
          </div>
          <div className="step-img-box">
            <img
              src="app-screen-2.png"
              alt="iPhone showing step-2"
              className="step-img"
            />
          </div>
          <div className="steps pad-right">
            <div className="step-number">02</div>
            <div className="step-head">Approve your weekly meal plan</div>
            <div className="step-desc">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes
            </div>
          </div>
          <div className="steps pad-left">
            <div className="step-number">03</div>
            <div className="step-head">Receive meals at convenient time</div>
            <div className="step-desc">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </div>
          </div>
          <div className="step-img-box">
            <img
              src="app-screen-3.png"
              alt="iPhone showing step-3"
              className="step-img"
            />
          </div>
          <section className="featured-in">
            <h5 className="feaured-head">As Featured In</h5>
            <div className="logo-container">
              <img
                src="techcrunch.png"
                alt="featured-logo"
                className="featured-in-logo"
              />
              <img
                src="business-insider.png"
                alt="featured-logo"
                className="featured-in-logo"
              />
              <img
                src="the-new-york-times.png"
                alt="featured-logo"
                className="featured-in-logo"
              />
              <img
                src="forbes.png"
                alt="featured-logo"
                className="featured-in-logo"
              />
              <img
                src="usa-today.png"
                alt="featured-logo"
                className="featured-in-logo"
              />
            </div>
          </section>
          <div className="how" id="meals">
            <h4 className="how-head">Meals</h4>
            <h3 className="how-desc">
              Omnifood AI chooses from 5,000+ recipes
            </h3>
          </div>
          <section className="meals">
            {CARD_DATA.map((cardData, index) => (
              <Card className="meal-card" key={index}>
                <img
                  src={cardData.src}
                  alt={cardData.alt}
                  className="meal-img"
                />
                <h4 className="meal-head">{cardData.mealHead}</h4>
                <div className="meal-card-body">
                  <ul className="meal-highlight-list">
                    {cardData.listItems.map((listItem, listIndex) => (
                      <li className="meal-highlight-list-item" key={listIndex}>
                        <div className="li-icon">{listItem.icon}</div>
                        <div className="li-desc">{listItem.desc}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </section>
          <div className="view-more">
            <a href="#" className="view-more-btn">
              See all recipes <span>&rarr;</span>
            </a>
          </div>

          <div className="how" id="gallery">
            <h4 className="how-head">Gallery</h4>
            <h3 className="how-desc">Have a look at them!</h3>
          </div>

          <div className="gallery-container">
            <div className="gallery">
              <figure className="gallery-figure">
                <img
                  src="gallery-1.jpg"
                  alt="gallery-1"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-2.jpg"
                  alt="gallery-2"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-3.jpg"
                  alt="gallery-3"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-4.jpg"
                  alt="gallery-4"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-5.jpg"
                  alt="gallery-5"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-6.jpg"
                  alt="gallery-6"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-7.jpg"
                  alt="gallery-7"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-8.jpg"
                  alt="gallery-8"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-9.jpg"
                  alt="gallery-9"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-10.jpg"
                  alt="gallery-10"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-11.jpg"
                  alt="gallery-11"
                  className="gallery-image"
                />
              </figure>
              <figure className="gallery-figure">
                <img
                  src="gallery-12.jpg"
                  alt="gallery-12"
                  className="gallery-image"
                />
              </figure>
            </div>
          </div>

          <div className="how" id="plans">
            <h4 className="how-head">Plans</h4>
            <h3 className="how-desc">Choose your plan!</h3>
          </div>

          <section className="pricing-section">
            <div className="plan">
              <header className="plan-head">
                <div className="plan-name">Basic</div>
                <div className="plan-price">
                  $<span>400</span>/month
                </div>
                <div className="price-desc">That's just $13 per meal</div>
              </header>
              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    1 meal per day
                  </li>
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    11am to 9pm
                  </li>
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Free Delivery
                  </li>
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Classic Receipes
                  </li>
                </ul>
              </div>
              <a href="#" className="hero-button nav-link">
                Subscribe
              </a>
            </div>
            <div className="plan recommended">
              <header className="plan-head">
                <div className="plan-name">Premium</div>
                <div className="plan-price">
                  $<span>600</span>/month
                </div>
                <div className="price-desc">That's just $10 per meal</div>
              </header>
              <div className="plan-body">
                <ul className="plan-list">
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    2 meal per day
                  </li>
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Order 24/7
                  </li>
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Free Delivery
                  </li>
                  <li className="plan-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="plan-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    All Receipes
                  </li>
                </ul>
              </div>
              <a href="#" className="hero-button nav-link">
                Subscribe
              </a>
            </div>
          </section>

          <section className="feature-section">
            <div className="feature">
              <div className="feature-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <div className="feature-title">Never cook again!</div>
              <p className="feature-body">
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <div className="feature-title">Local and organic</div>
              <p className="feature-body">
                Our cooks only use local, fresh, and organic products to prepare
                your meals.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <div className="feature-title">No waste</div>
              <p className="feature-body">
                All our partners only use reusable containers to package all
                your meals.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="feature-title">Pause anytime</div>
              <p className="feature-body">
                Going on vacation? Just pause your subscription, and we refund
                unused days.
              </p>
            </div>
          </section>

          <section className="cta" id="cta">
            <div className="cta-form-container">
              <h2 className="cta-head">We offer a free sample meal</h2>
              <p className="cta-desc">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
              <form className="cta-form">
                <div className="name-con">
                  <label htmlFor="name" className="label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input"
                    placeholder="Mohan Sai Chidibomma"
                  />
                </div>
                <div className="email-con">
                  <label htmlFor="name" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="me@example.com"
                  />
                </div>
                <div className="hear">
                  <label htmlFor="hear" className="label">
                    Where did you hear us?
                  </label>
                  <select id="hear" className="select">
                    <option value="">Please choose one option</option>
                    <option value="fnf">Friends and family</option>
                    <option value="social_media">Social Media</option>
                    <option value="ad">Ad</option>
                    <option value="hordings">Hordings</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <button className="sign-up-btn" type="button">
                  Sign up now
                </button>
              </form>
            </div>
            <div className="cta-img-container">
              <img src="eating.jpg" alt="a woman eating happily" />
            </div>
          </section>

          <div className="how">
            <h4 className="how-head">Testimonials</h4>
            <h3 className="how-desc">If you try it, you'll love it.</h3>
          </div>

          <div className="testimonials-container">
            {TESTIMONIAL_DATA.map((data, index) => (
              <Testimonial
                key={index}
                src={data.src}
                alt={data.alt}
                testimonialText={data.testimonialText}
                author={data.author}
                className="testimonial"
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <nav className="footer-column">
          <a href="#">
            <img src="omnifood-logo.png" alt="Omnifood Logo" className="logo" />
          </a>
          <p className="copy-right">
            Copyright &copy; 2025 by Mohan Sai. All rights reserved.
          </p>
        </nav>
        <nav className="footer-column">
          <h5 className="footer-head">Contact us</h5>
          <address className="full-address">
            <p className="address">
              4-127/3 Main Road, Gachibowli, Hyderabad, Telangana 500 063
            </p>
            <a href="tel:415-201-6370" className="footer-link">
              415-201-6370
            </a>
            <a href="mailto:support@omnifood.com" className="footer-link">
              support@omnifood.com
            </a>
          </address>
        </nav>
        <nav className="footer-column">
          <h5 className="footer-head">Account</h5>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Create Account
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Sign In
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                iOS App
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Android App
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-column">
          <h5 className="footer-head">Company</h5>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                About Omnifood
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                For Business
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Cooking partners
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-column">
          <h5 className="footer-head">Resources</h5>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Recipe directory
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Help center
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
