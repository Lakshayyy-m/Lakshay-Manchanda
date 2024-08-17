"use client";
import React from "react";
import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
});

const Contact = () => {
  //sending email
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );
    const result = contactSchema.safeParse(formData);
    if (result.success) {
      console.log(result.data);
      emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY });
      const promise = emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID!,
        result.data
      );
      toast.promise(promise, {
        loading: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong!",
      });
      return;
    }

    return toast.error("Please fill all the fields correctly");
  };

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center relative z-[111] my-14">
      <form
        className="flex flex-col gap-7 border border-white rounded-3xl p-10 w-[70vw] max-lg:w-[90vw] max-xl:w-[80vw]]"
        onSubmit={sendEmail}
      >
        <h1 className="text-5xl font-extrabold lg:hidden text-center w-full max-sm:text-3xl">
          Contact Me.
        </h1>
        <div className="flex max-lg:flex-col-reverse gap-7">
          <div className="flex flex-col gap-7 lg:basis-[50%]">
            <h1 className="text-5xl font-extrabold max-lg:hidden">
              Contact Me.
            </h1>
            <input
              type="text"
              className="outline-none p-4 text-black border-2 border-white rounded-xl w-full"
              placeholder="Enter your name"
              name="name"
            />
            <input
              type="text"
              className="outline-none p-4 text-black border-2 border-white rounded-xl w-full"
              placeholder="Enter your email"
              name="email"
            />
            <textarea
              className="outline-none p-4 text-black border-2 border-white rounded-xl w-full"
              placeholder="Enter your message"
              rows={6}
              name="message"
            />
            <button className="w-full hover:bg-white hover:text-black p-4 rounded-2xl font-bold">
              Send
            </button>
          </div>
          <div className="h-full flex justify-center items-center lg:basis-[50%] rounded-full">
            <div className=" relative aspect-square w-[300px] max-md:w-[190px] max-sm:w-[140px] rounded-full overflow-hidden">
              <Image src="/images/Lakshay Manchanda.jpg" alt="contact" fill />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
