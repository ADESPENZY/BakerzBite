import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, MailPlus, MapPin, PhoneCall, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwplapay", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setStatus("Thanks for reaching out! We’ll get back to you with something sweet soon.");
        form.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section className="font-montserrat">
      <div className="relative">
        {/* Background Banner */}
        <div className="relative w-full h-[40vh] overflow-hidden">
          <img
            src="/images/bakery-banner.jpg"
            alt="Bakery Banner"
            className="w-full h-full object-cover"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
        ></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 text-center px-6">
          <h2 className="text-4xl font-bold text-primary-light">Contact Bakerzbite</h2>
          <p className="max-w-xl text-center text-md text-secondary-light">
            Got a craving or a custom cake idea? Drop us a message, and let's make your day delicious.
          </p>
        </div>
      </div>

      <div className="my-10 max-w-5xl mx-auto bg-secondary-light rounded-xl shadow-xl grid md:grid-cols-2 ">
        <div className="bg-white rounded-l-xl p-10 border border-black">
          <h2 className="text-2xl font-bold">Say Hello</h2>
          <p className="text-md text-gray-700 mt-2 mb-4">Whether it’s a cake, croissant or a cookie — we’re here to serve you!</p>
          <a
            href="https://calendly.com/atoyebijoshua095?hide_gdpr_banner=1"
            className=" bg-primary-light lg:w-fit w-full text-white px-5 py-3 font-semibold hover:bg-primary-dark hover:border-none hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Tasting
          </a>

          <div className='mt-10 space-y-4'>
            <div className='flex space-x-5'>
              <div className='w-16 h-16 bg-primary-light rounded-full flex items-center justify-center'>
                <MapPin className='w-8 h-8'/>
              </div>
              <div className='space-y-1'>
                <h2 className='text-md font-semibold'>Bakery Location</h2>
                <div className='text-sm'>
                  <p className='max-w-60'>123 Sweet Lane, Richmond, TX 77406</p>
                </div>
              </div>
            </div>

            <div className='flex space-x-5'>
              <div className='w-16 h-16 bg-primary-light rounded-full flex items-center justify-center'>
                <MailPlus className='w-8 h-8'/>
              </div>
              <div className='space-y-1'>
                <h2 className='text-md font-semibold'>Email</h2>
                <div className='text-sm'>
                  <p>orders@bakerzbite.com</p>
                  <p>hello@bakerzbite.com</p>
                </div>
              </div>
            </div>

            <div className='flex space-x-5'>
              <div className='w-16 h-16 bg-primary-light rounded-full flex items-center justify-center'>
                <PhoneCall className='w-8 h-8'/>
              </div>
              <div className='space-y-1'>
                <h2 className='text-md font-semibold'>Phone</h2>
                <div className='text-sm'>
                  <p>+1 (832) 123-4567</p>
                  <p>+1 (832) 987-6543</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-8 space-y-5 border-t border-secondary-dark py-8'>
            <h2 className='font-semibold'>Follow Us</h2>
            <div className="flex space-x-4 items-center">
              <a href="https://facebook.com/bakerzbite" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="text-black-light hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com/bakerzbite" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="text-black-light hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com/bakerzbite" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="text-black-light hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/bakerzbite" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-black-light hover:scale-110 transition-transform" />
              </a>
              <a href="https://youtube.com/bakerzbite" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} className="text-black-light hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-10">
          <h2 className='text-2xl'>Send Us A Message</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-3">
              <Label htmlFor="message">Tell Us What You're Craving</Label>
              <Textarea
                name="message"
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Custom cake idea? Event order? Let us know!"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="name">Your Name</Label>
              <Input
                name="name"
                id="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email">Your Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="referral">How Did You Hear About Us?</Label>
              <Input
                name="referral"
                id="referral"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="E.g., Instagram, friend, walk-in"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-primary-light w-full text-white px-4 py-2 font-semibold hover:bg-primary-dark"
            >
              Send Your Request
            </button>

            {status && (
              <p className="text-center text-teal-700 font-semibold mt-3">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
