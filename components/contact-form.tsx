"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Outfit } from "next/font/google";
import { Cross2Icon } from "@radix-ui/react-icons";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});
export function ContactForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vesselLocation: "",
    reason: "",
    notes: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "vesselLocation",
      "reason",
    ] as const;
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      toast.error(`The only field you may skip is adding notes`);
      return;
    }

    try {
      setIsDialogOpen(true);
      await axios.post("/api/contact", formData);
      toast.success("We'll be in touch!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        vesselLocation: "",
        reason: "",
        notes: "",
      });
      setIsDialogOpen(false);
    } catch (error) {
      toast.error("There was an error submitting your form");
      console.error("Error sending message:", error);
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <Dialog open={isDialogOpen}>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="text-white z-10 w-[30%] bg-cyan-950 2xl:w-[25%]"
        >
          Contact Us
        </Button>
        <DialogContent className="sm:max-w-[425px]">
          {" "}
          <DialogHeader>
            {" "}
            <div
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:cursor-pointer"
              onClick={() => setIsDialogOpen(false)}
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </div>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              For quotes or to schedule an appointment
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Smith"
                className="col-span-3"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="johnsmith@gmail.com"
                className="col-span-3"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                placeholder="(659)-423-0932"
                className="col-span-3"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="vesselLocation" className="text-right">
                Vessel Location
              </Label>
              <Input
                id="vesselLocation"
                placeholder="Ft. Lauderdale, FL"
                className="col-span-3"
                value={formData.vesselLocation}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reason" className="text-right">
                Reason
              </Label>
              <Select
                value={formData.reason}
                onValueChange={(value) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    reason: value,
                  }))
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Appraisal">
                      Off Grid Modifications
                    </SelectItem>
                    <SelectItem value="Survey">Survey</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="text" className="text-right">
                Notes
              </Label>
              <div className="col-span-3">
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSubmit}>
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
