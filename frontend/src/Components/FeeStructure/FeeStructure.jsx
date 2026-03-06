import React from 'react';
import './FeeStructure.css';

const FeeStructure = () => {

  return (
    <div className="main-wrapper">
    

      <section className="section-block">
        <div className="header-box" >
          <span className="mini-badge" id="features" >Our Features</span>
          <h2 className="title-text">Fee Structure</h2>
          <p className="sub-text">Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.</p>
        </div>

        <div className="table-outer">
          <div className="table-shadow"></div>
          <div className="table-inner">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Age Group</th>
                  <th>Annual Tuition</th>
                  <th>Registration Fee</th>
                  <th>Activity Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Nursery</td><td>2 - 3 Years</td><td>$1,686</td><td>$162</td><td>$12</td></tr>
                <tr><td>Pre - Kindergartens</td><td>3 - 4 Years</td><td>$2,686</td><td>$220</td><td>$16</td></tr>
                <tr><td>Kindergarten</td><td>4 - 5 Years</td><td>$3,686</td><td>$340</td><td>$20</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-outer mt-10">
          <div className="table-shadow"></div>
          <div className="table-inner p-0">
            <div className="table-heading">Additional Services</div>
            <table className="fee-table no-head">
              <tbody>
                <tr><td>Before and After-School Care</td><td className="bold-price">$120 / per month</td></tr>
                <tr><td>Language Immersion Program</td><td className="bold-price">$60 / per semester</td></tr>
                <tr><td>Transportation (optional)</td><td className="bold-price">$80 / per month</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;