import Welcome from "@/components/Welcome/Welcome";
import AdmissionProcess from "@/components/process/Process";
import FeeStructure from "@/components/FeeStructure/FeeStructure";

export default function Admissions() {
  return (
    <main>
      <Welcome 
        btn='Admission' 
        welcome='Join Our Family of Young Learners' 
        text='At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admissions process is designed to be transparent, straightforward, and inclusive. Heres a step-by-step guide to joining our school.'
      />
      <AdmissionProcess />
      <FeeStructure />
    </main>
  );
}
