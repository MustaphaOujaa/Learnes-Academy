import React from 'react';

const AdmissionProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Inquiry",
      description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
    },
    {
      number: "02",
      title: "School Tour",
      description: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
    },
    {
      number: "03",
      title: "Application Form",
      description: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
    },
    {
      number: "04",
      title: "Parent Interview",
      description: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
    },
    {
      number: "05",
      title: "Student Assessment",
      description: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
    },
    {
      number: "06",
      title: "Acceptance",
      description: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
    }
  ];

  return (
    <section className="bg-[#FFF9F6] py-[100px] px-[5%] text-center font-sans">
      <div className="mb-[80px]">
        <div className="inline-block py-1.5 px-4 border-2 border-[#1A1A1A] rounded-lg bg-white font-medium text-[14px] mb-5">
          Process
        </div>
        <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#1A1A1A] mb-6">Admission Process</h1>
        <p className="max-w-[850px] mx-auto text-[#4C4C4C] leading-[1.6] text-base">
          Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px] gap-x-[30px] max-w-[1200px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative pt-[45px] text-left h-full">
        
            <div className="absolute top-0 left-0 w-[65px] h-[65px] z-10">
              <div className="absolute top-[5px] left-[5px] w-full h-full bg-[#1A1A1A] rounded-xl z-[1]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white border-2 border-[#1A1A1A] rounded-xl flex items-center justify-center text-[30px] font-extrabold z-[2]">
                {step.number}
              </div>
            </div>

            <div className="absolute top-[65px] left-[32px] w-[2px] h-[45px] bg-[#E89271] z-[1]"></div>

            <div className="relative w-full h-full">
              <div className="absolute top-2 left-2 w-full h-full bg-[#1A1A1A] rounded-[20px] z-[1]"></div>
              <div className="relative bg-white border-2 border-[#1A1A1A] rounded-[20px] p-[50px_30px_40px] z-[2] min-h-[200px] h-full flex flex-col">
                <h3 className="text-[24px] font-bold mb-4 text-[#262626]">{step.title}</h3>
                <p className="text-[#595959] text-[15px] leading-[1.6] flex-grow">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;
