import { Outfit } from "next/font/google";
import Logo from "./logo";
import UserMenu from "./user-menu";
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});
const Navbar = () => {
  return (
    <div className={` ${outfit.className} absolute w-screen z-10 p-2`}>
      <Logo />
      {/* <div className="absolute top-10 right-6 text-xs">
        <UserMenu />
      </div> */}
    </div>
  );
};

export default Navbar;
