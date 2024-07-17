"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91)7024546438",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "agrawalansh777@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Gwalior(M.P), India",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yj6vwaq", "template_bdidayd", formRef.current, {
        publicKey: "Rqs_NXXWSu8pMrZtX",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="md:h-[54%] order-2 md:order-none">
            <form
              className="flex flex-col gap-6 p-7 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
              ref={formRef}
            >
              <h3 className="text-3xl text-[#f79500]">Let's Work Together</h3>
              <p className="text-white/60">
                Hi I'm Ansh Agrawal, Fill out below form for contacting me.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="phone" name="phone" placeholder="Phone Number" />
              </div>
              <Textarea
                className="h-[100px]"
                placeholder="Type your message here."
                name="message"
              />
              <Button
                size="md"
                className="max-w-40 flex justify-center items-center"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] md:w[72px] md:h-[72px] bg-[#27272c] text-[#f79500] rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="font-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
              <p>
                {error && "Error"}
                {success && "Success"}
              </p>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
