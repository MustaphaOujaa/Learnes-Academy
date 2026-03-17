import Welcome from "@/components/Welcome/Welcome";
import StudentForm from "@/components/StudentForm/StudentForm";

export default function Contact() {
  return (
    <main>
      <Welcome
        btn="Contact Us"
        welcome="Feel Free To Connect With Us"
        text="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
      >
        <div id="information" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <a href="mailto:hello@littlelearners.com" className="bg-[#FFF5F0] border-2 border-[#262626] p-4 rounded-xl flex items-center gap-3 hover:underline">
            <div className="bg-[#FFEFE7] border-2 border-[#262626] p-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <span className="text-[14px] font-semibold text-[#262626]">hello@littlelearners.com</span>
          </a>
          <a href="tel:+919181323209" className="bg-[#FFF5F0] border-2 border-[#262626] p-4 rounded-xl flex items-center gap-3 hover:underline">
            <div className="bg-[#FFEFE7] border-2 border-[#262626] p-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <span className="text-[14px] font-semibold text-[#262626]">+91 91813 23 2309</span>
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-[#FFF5F0] border-2 border-[#262626] p-4 rounded-xl flex items-center gap-3 hover:underline">
            <div className="bg-[#FFEFE7] border-2 border-[#262626] p-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <span className="text-[14px] font-semibold text-[#262626]">Somewhere in the World</span>
          </a>
          <div className="bg-[#FFF5F0] border-2 border-[#262626] p-4 rounded-xl flex items-center gap-3">
            <div className="bg-[#FFEFE7] border-2 border-[#262626] p-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <span className="text-[14px] font-semibold text-[#262626]">Office Hours - 9am - 6pm</span>
          </div>
        </div>
      </Welcome>
      <StudentForm />
    </main>
  );
}
