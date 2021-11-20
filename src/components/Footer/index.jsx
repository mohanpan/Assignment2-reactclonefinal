import "./styles.css";

import React from 'react';

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
            {/* Column 1*/}
            <div className= "col">
                <h4>IKEA Family</h4>
                <ul className="list-unstyled">
                    <li>Bring your ideas to life with rewards, inspiration, discounts and a few surprises along the way. Learn more.</li>
                    <li>Join now</li>
                </ul>
            </div>
            {/* Column 2*/}
            <div className= "col">
                <h4>Help</h4>
                <ul className="list-unstyled">
                    <li>Customer service</li>
                    <li>FAQ</li>
                    <li>Track my order</li>
                    <li>Reschedule my order</li>
                    <li>Cancel my order</li>
                    <li>Contact us</li>
                    <li>Your safety concerns</li>
                    <li>Product recalls</li>
                    <li>Sell back program</li>
                    <li>Return policies</li>
                    <li>Warranties</li>
                    <li>Feedback</li>
                    <li>Order replacement parts</li>
                    <li>COVID-19 information</li>
                </ul>
            </div>
            {/* Column 3*/}
            <div className= "col">
                <h4>Shop and Learn</h4>
                <ul className="list-unstyled">
                    <li>IKEA Apps</li>
                    <li>Find a location</li>
                    <li>IKEA Services</li>
                    <li>IKEA Catalogue</li>
                    <li>IKEA Family</li>
                    <li>IKEA for Business</li>
                    <li>IKEA Planners</li>
                    <li>IKEA Gift Registry</li>
                    <li>Buying guides</li>
                    <li>Gift cards and balance checker</li>
                    <li>Payment options</li>
                </ul>
            </div>
            {/* Column 4*/}
            <div className= "col">
                <h4>About IKEA</h4>
                <ul className="list-unstyled">
                    <li>This is IKEA</li>
                    <li>Jobs</li>
                    <li>Newsroom</li>
                    <li>Life at home</li>
                    <li>A sustainable everyday</li>
                    <li>IKEA Foundation</li>
                </ul>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;Inter IKEA Systems B.V. 1999-{new Date().getFullYear()} Privacy policy | Cookie policy | Cookie settings | Responsible Disclosure Policy | Terms and conditions | Accessibility
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
