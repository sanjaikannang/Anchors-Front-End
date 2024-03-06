import React from "react";
import Navbar from "./auth/Navabar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section
        id="delivery"
        className="bg-gradient-to-t from-blue-200 to-white min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-gray sec-heading text-center md:text-center lg:text-center text-2xl md:text-4xl font-semibold my-8 md:my-12">
            Welcome to Anchors JOB portal.
            <br />
            <br />
            <br />
            Job Seekers and Companies are Welcomed !
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
      </section>

      <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="leading-none font-gray font-semibold text-3xl flex flex-col items-center">
            Features in Anchors Job Portal
          </h3>
          <br />
          <br />
          <div className="flex flex-wrap justify-around lg:justify-between">
            <div className="w-full max-w-sm mt-5 lg:w-1/3 lg:mt-0 bg-gray-100 rounded-md border border-blue-500 shadow-lg p-12 lg:p-8 xl:p-12">
              <div className="mt-4 font-semibold text-2xl tracking-wide">
                Job Posting and listing !
              </div>
              <br />
              <div className="text-sm">
                Are you looking to expand your team with talented individuals
                who are passionate about their work? Look no further! Our job
                posting feature allows you to create detailed job listings that
                showcase your company culture, values, and the specific skills
                and qualifications you're seeking in candidates. With
                easy-to-use tools and customizable templates, you can quickly
                post new job opportunities and attract top talent from around
                the globe.
              </div>
            </div>

            <div className="w-full max-w-sm mt-5 lg:w-1/3 lg:mt-0 bg-white rounded-md border border-blue-500 shadow-lg p-12 lg:p-8 xl:p-12">
              <div className="mt-4 font-semibold text-2xl tracking-wide">
                Notification Mechanism through Email !
              </div>
              <br />
              <div className="text-sm">
                Job Postings: Receive instant notifications when candidates
                apply for your job postings, allowing you to review applications
                promptly and move forward with the hiring process efficiently.
                Account Updates: Stay informed about account-related activities
                such as changes to your subscription, billing information, and
                account settings to ensure smooth operation of your recruitment
                processes. Candidate Engagement: Get notified when candidates
                express interest in your job postings or when there are updates
                on the status of their applications, enabling you to engage with
                potential hires effectively.
              </div>
            </div>

            <div className="w-full max-w-sm mt-5 lg:w-1/3 lg:mt-0 bg-gray-100 rounded-md border border-blue-500 shadow-lg p-12 lg:p-8 xl:p-12">
              <div className="mt-4 font-semibold text-2xl tracking-wide">
                Easy to Apply and Initial Bonus Points !
              </div>
              <br />
              <div className="text-sm">
                Boosted Visibility: Use your Initial Bonus Points to increase
                the visibility of your profile or job postings, ensuring that
                you stand out to recruiters and employers. Premium Features:
                Unlock access to premium features and tools that enhance your
                job search experience, such as advanced search filters, resume
                reviews, and personalized recommendations. Exclusive Rewards:
                Redeem your Initial Bonus Points for exclusive rewards, such as
                gift cards, discounts on premium services, or even additional
                job application credits.
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section  */}
      <footer className="bg-blue-100">
        <div className="container mx-auto px-4 lg:px-0 py-8">
          <div className="flex flex-col md:flex-col items-center">
            <div className="md:w-1/4 md:text-center mb-4 md:mb-0">
              <span className="logo text-gray-900 text-3xl font-semibold">
                Anchors Job Portal !
              </span>
            </div>
          </div>
          <br />
          <br />
          <div id="copyright" className="text-center text-gray-900">
            &copy; All Rights Reserved 2019-2023
          </div>

          <div id="owner" className="text-center text-gray-900">
            <span>
              Designed by{""}
              <a className="text-gray-900">Sanjai Kannan G</a>
            </span>
          </div>
        </div>
        <br />
      </footer>
    </div>
  );
};

export default LandingPage;
