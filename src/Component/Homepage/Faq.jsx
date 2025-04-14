import { useState } from "react";
import faqData from '../../Data/FaqData.json'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First one open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-7xl mx-auto py-16 flex lg:flex-row flex-col space-y-7 lg:space-y-0 lg:justify-between p-5'>
        <div className="space-y-12 lg:max-w-2xl" >
            <div className='space-y-4'>
                <h2 className="font-bold text-xl text-primary-light ">
                    Frequently Asked Question
                </h2>
                <h1 className="text-2xl md:text-4xl font-bold tracking-wider mt-2 leading-relaxed max-w-md">
                    Got Questions? We've Got Answers Everything You Need to Know
                </h1>
            </div>
            <div className="space-y-4 ">
            {faqData.map((faq, index) => (
                <div 
                key={index} 
                className="bg-[#f9f9f9] border border-gray-400 p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleToggle(index)}
                >
                <div className="flex justify-between items-center">
                    <h3 className="font-medium">{faq.question}</h3>
                    <span className="text-primary text-xl">
                    {activeIndex === index ? "-" : "+"}
                    </span>
                </div>
                <p 
                    className={`text-gray-600 mt-2 transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    {faq.answer}
                </p>
                </div>
            ))}
            </div>
        </div>
        <div className="relative space-y-10 ">
            <img src="images/BakeHome.jpg" alt="" className="w-56 h-80 object-cover rounded-xl lg:mr-10" />
            <img src="images/BakeHome.jpg" alt="" className="w-80 h-80 object-cover rounded-xl" />
            <img src="images/BakeHome.jpg" alt="" className="w-64 h-80 object-cover rounded-xl absolute top-20 right-4 lg:-left-32 z-10" />

        </div>
    </div>
  );
};

export default Faq;


