import Image from "next/image";
import home from "@/public/home.jpg";
import { ContactForm } from "@/components/contact-form";
const LandingPage = () => {
  return (
    <div className="">
      <Image src={home} alt="landing page" fill className="object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-evenly items-center min-h-screen">
        <section className="z-10 text-lg flex flex-col items-center">
          <div>We go over your boat ...</div>
          <div className="text-lg lg:text-2xl">
            Professional and Experienced Boat Surveyors
          </div>
        </section>
        <section className="z-10">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
