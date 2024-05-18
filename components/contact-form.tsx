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

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vesselLocation: "",
    address: "",
    explanation: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/contact", formData);
      toast.success("We'll be in touch!");
    } catch (error) {
      toast.error("There was an error submitting your form");
      console.error("Error sending message:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
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
              placeholder="(757)-615-5959"
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
            <Label htmlFor="address" className="text-right">
              Billing Address
            </Label>
            <Input
              id="address"
              placeholder="123 Street Ft. Lauderdale, FL 12345"
              className="col-span-3"
              value={formData.address}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Explanation
            </Label>
            <div className="col-span-3">
              <Textarea
                id="explanation"
                value={formData.explanation}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger>
            <Button type="button" onClick={handleSubmit}>
              Send
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
