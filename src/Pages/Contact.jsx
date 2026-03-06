import StudentForm from "../Components/StudentForm/StudentForm";
import Welcome from "../Components/Welcome/Welcome";

const Contact = () => {
  return (
    <>
      <Welcome
        btn="Contact Us"
        welcome="Feel Free To Connect With Us"
        text="We value open communication and are eager to assist you with any inquiries. 
Feel free to reach out to us through any of the following contact methods"
      />
      <StudentForm />
    </>
  );
};
export default Contact;
