import Image from "next/image";
import home from "@/public/home.jpg";
import { ContactForm } from "@/components/contact-form";
import { Outfit, Zilla_Slab } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["900"],
});
const zilla = Zilla_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});
const LandingPage = () => {
  return (
    <div>
      <Image src={home} alt="landing page" fill className="object-cover" />
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="flex flex-col z-10 h-screen ">
        <div className="flex flex-col mt-[30%] md:mt-[15%] 2xl:mt-[10%] gap-y-3 ml-[5%] text-cyan-950">
          <span className={`${outfit.className} z-10 text-4xl lg:text-7xl`}>
            Surveying&#44;
          </span>
          <span className={`${outfit.className} z-10 text-4xl lg:text-7xl`}>
            Integrating&#44; &
          </span>
          <span className={`${outfit.className} z-10 text-4xl lg:text-7xl`}>
            Engineering
          </span>
          <ul className={`${zilla.className} z-10 text-cyan-800`}>
            <li className="text-2xl">
              systems since 2006&#44; serving the eastern seaboard.
            </li>
            <li>
              Whether you&rsquo;re looking for an in-depth Pre-Buy Survey&#44;
            </li>
            <li>
              or you want to integrate cutting-edge Off-Grid advanced
              technologies...
            </li>
            <li className="text-2xl">
              We&rsquo;re ready to help you get started.
            </li>
          </ul>
          <ContactForm />
        </div>

        <div className="text-sm"></div>
      </div>
    </div>
  );
};

export default LandingPage;
