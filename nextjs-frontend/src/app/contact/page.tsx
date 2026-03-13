import Welcome from "@/components/Welcome/Welcome";
import StudentForm from "@/components/StudentForm/StudentForm";

export default function Contact() {
  return (
    <main>
      <Welcome
        btn="Contact Us"
        welcome="Feel Free To Connect With Us"
        text="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
      />
      <StudentForm />
    </main>
  );
}
