import Welcome from "../Components/Welcome/Welcome";
import AdmissionProcess from '../Components/process/Process'
import FeeStructure from '../Components/FeeStructure/FeeStructure'

const Admissions = () => {
    return (
        <>
        <Welcome btn='Admission' welcome='Join Our Family of Young Learners' text='At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admissions process is designed to be transparent, straightforward, and inclusive. Heres a step-by-step guide to joining our school.'/>
        <AdmissionProcess/>
        <FeeStructure/>
        </>

    )
}
export default Admissions;