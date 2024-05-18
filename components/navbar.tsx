import { Outfit } from "next/font/google";
import Logo from "./logo";
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});
const Navbar = () => {
  return (
    <div className={` ${outfit.className} absolute w-screen z-10 p-2`}>
      <Logo />
      <div className="absolute top-10 right-6 text-xs">(757)-589-3086</div>
    </div>
  );
};

export default Navbar;
