import React from 'react';

const FeeStructure = () => {
  return (
    <div className="bg-[#FFF9F5] py-[60px] px-5 font-sans">
      <section className="max-w-[1200px] mx-auto mb-[100px] text-center">
        
        <div className="mb-[60px]">
          <span className="inline-block py-1.5 px-4 border-2 border-[#1A1A1A] rounded-lg bg-white font-medium text-[14px] mb-[15px]" id="features">
            Our Features
          </span>
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#1A1A1A] mb-5">Fee Structure</h2>
          <p className="max-w-[900px] mx-auto text-[#4C4C4C] leading-[1.6]">
            Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.
          </p>
        </div>

        <div className="relative w-full mx-auto">
          <div className="absolute top-[8px] left-[8px] w-full h-full bg-[#1A1A1A] rounded-[15px] z-[1]"></div>
          
          <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[15px] p-[30px] overflow-x-auto z-[2]">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="bg-[#FFF3ED] border border-[#F1E5D1] p-5 font-semibold">Program</th>
                  <th className="bg-[#FFF3ED] border border-[#F1E5D1] p-5 font-semibold">Age Group</th>
                  <th className="bg-[#FFF3ED] border border-[#F1E5D1] p-5 font-semibold">Annual Tuition</th>
                  <th className="bg-[#FFF3ED] border border-[#F1E5D1] p-5 font-semibold">Registration Fee</th>
                  <th className="bg-[#FFF3ED] border border-[#F1E5D1] p-5 font-semibold">Activity Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">Nursery</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">2 - 3 Years</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$1,686</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$162</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$12</td>
                </tr>
                <tr>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">Pre-Kindergarten</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">3 - 4 Years</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$2,686</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$220</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$16</td>
                </tr>
                <tr>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">Kindergarten</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">4 - 5 Years</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$3,686</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$340</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">$20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative w-full mx-auto mt-10">
          <div className="absolute top-[8px] left-[8px] w-full h-full bg-[#1A1A1A] rounded-[15px] z-[1]"></div>
          
          <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[15px] p-0 overflow-x-auto z-[2]">
            <div className="bg-[#FFF3ED] p-5 font-bold text-[20px] border-b border-[#F1E5D1] text-left rounded-t-[13px]">
              Additional Services
            </div>
            <table className="w-full min-w-[500px] border-collapse text-left">
              <tbody>
                <tr>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">Before and After-School Care</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#1A1A1A] font-bold w-[30%]">$120 / per month</td>
                </tr>
                <tr>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">Language Immersion Program</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#1A1A1A] font-bold w-[30%]">$60 / per semester</td>
                </tr>
                <tr>
                  <td className="border border-[#F1E5D1] p-5 text-[#333]">Transportation (optional)</td>
                  <td className="border border-[#F1E5D1] p-5 text-[#1A1A1A] font-bold w-[30%]">$80 / per month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;
