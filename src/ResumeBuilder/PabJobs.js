import React from "react";
import "./Pabjobs.css"

const PabJobs = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="col-md-11 text-center m-auto">
          <p className="title">Welcome to Pabjobs.com Security Center</p>
          <p className="paragraph-content">
            We value the trust place on Pabjobs.com and are committed to making
            your job search a safe and fraud-free experience on our site.
            However, in the wake of an increasing number of instances of fake
            job offer, we suggest you to cautious of fraudulent emails and
            calls.
          </p>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row row-color text-white ">
          <div className="col-md-6 pl-5">
            <h3>6 signs to identify fake job offers :</h3>
            <ol className=" list- group p-3">
              <li>Asking for money (mostly refundable).</li>
              <li>
                looking for confidential information (Credit Card / OTP / Aadhar
                / PAN ,etc).
              </li>
              <li>Badly written jobs ads (incorrect grammar).</li>
              <li>
                {" "}
                Offering esay hiring criteria (On the spot offer, no interview).
              </li>
              <li>Luring with salary beyond expectation.</li>
              <li>Using the names of known job portals.</li>
            </ol>
          </div>
          <div className="col-md-6 pl-5">
            <h3> 4 Ways to protect yourself against job frauds :</h3>
            <ol className="p-3">
              <li>
                Never respond without verifying the legitimacy of the job offer.
              </li>
              <li>Don't share personal/bank details with anyone.</li>
              <li>Refuse to make any payment for job offer.</li>
              <li>
                Verify online presence and reviews of the recruitment firm.
              </li>
            </ol>
          </div>
        </div>
        <div className="col-md-8 m-auto pt-3 text-center">
          <p>
            if you've received(or receive) any such suspicious email
            communication, reach out to us via email at <span><a href="">example@gmail.com</a></span> 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default PabJobs;
