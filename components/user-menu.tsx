"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./menu-item";
import { useRouter } from "next/navigation";
import { GiBarn } from "react-icons/gi";
import { Outfit } from "next/font/google";
import { MdOutlineElectricalServices } from "react-icons/md";

const outfit = Outfit({
  subsets: ["latin"],
  display: "auto",
  style: "normal",
  weight: ["100"],
});
const UserMenu = () => {
  const router = useRouter();
  return (
    <Sheet>
      <div className="flex flex-row ">
        <SheetTrigger className="p-[2px] rounded-md">
          <AiOutlineMenu className="w-8 h-8 lg:w-8 lg:h-8" />
        </SheetTrigger>
      </div>
      <SheetContent
        className={`${outfit.className} bg pt-5 overflow-y-auto bg-zinc-500 text-white border-none `}
      >
        <SheetTrigger className="w-full">
          <MenuItem
            label="Eletrical"
            icon={<MdOutlineElectricalServices className="mr-2" />}
            onClick={() => router.push("/market")}
          />
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
};

export default UserMenu;
