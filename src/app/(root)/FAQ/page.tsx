'use client';

import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

const INITIAL_FAQS = [
  // FOR THE CLIENT
  {
    question: "1. How do I request a commission from an artist?",
    answer: "You can request a commission by visiting an artist’s profile and clicking the Commission Request button. Fill in the details such as title, description, references, deadline, and budget before submitting the request.",
    isOpen: false,
    category: "client"
  },
  {
    question: "2. How can I track the progress of my commissioned artwork?",
    answer: "You can track your commission in the My Commissions section. The artist will update the status, and you can monitor the progress including delivery updates for physical artwork.",
    isOpen: false,
    category: "client"
  },
  {
    question: "3. How do I purchase artwork from an artist?",
    answer: "You can purchase artwork by selecting an artwork marked For Sale, clicking the Buy Now button, and completing the transaction process.",
    isOpen: false,
    category: "client"
  },
  {
    question: "4. What payment methods are accepted?",
    answer: "The platform supports available digital payment methods and other payment options provided by the artist during the transaction process.",
    isOpen: false,
    category: "client"
  },
  {
    question: "5. How will I receive my commissioned artwork?",
    answer: "Digital artwork will be delivered through the platform as downloadable files, while physical artwork will be shipped to your registered address and tracked through the delivery progress system.",
    isOpen: false,
    category: "client"
  },
  {
    question: "6. Can I cancel a commission request after submitting it?",
    answer: "Yes, you can cancel a commission request before the artist accepts it. Once accepted, cancellation depends on the agreement between you and the artist.",
    isOpen: false,
    category: "client"
  },
  {
    question: "7. How do I contact an artist about my order?",
    answer: "You can contact the artist through the messaging or note feature available in the commission or artwork transaction page.",
    isOpen: false,
    category: "client"
  },
  {
    question: "8. What should I do if I receive damaged or incorrect artwork?",
    answer: "You should immediately contact the artist and report the issue. You may also submit a report to the administrator for further assistance.",
    isOpen: false,
    category: "client"
  },

  // FOR THE ARTIST
  {
    question: "1. How do I upload and showcase my artwork?",
    answer: "You can upload your artwork by going to your profile or gallery section and clicking the Upload Artwork button. Fill in the artwork details such as title, description, type, and price before publishing.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "2. How do I accept or reject commission requests?",
    answer: "You can view commission requests in the Commission Requests section and choose to accept or reject each request based on your availability.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "3. How do I update the delivery progress of physical artwork?",
    answer: "You can update the delivery progress in the Delivery Progress section by setting the status to In Progress, On Shipping, Arrived, or Cancelled and adding notes if necessary.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "4. How do I sell my artwork on the platform?",
    answer: "You can sell artwork by uploading it and setting the status to For Sale, including the price and available stock.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "5. How do I receive payments from clients?",
    answer: "Payments will be recorded in the transaction system and processed according to the platform’s payment setup.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "6. How do I manage my gallery and collections?",
    answer: "You can organize your artworks by creating galleries or folders and adding your artworks into collections.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "7. How can I feature my artwork on the homepage?",
    answer: "Featured artworks are selected by the administrator based on performance such as popularity or sales.",
    isOpen: false,
    category: "artist"
  },
  {
    question: "8. What should I do if a client violates platform rules?",
    answer: "You can report the client through the reporting feature, and the administrator will review the case and take appropriate action.",
    isOpen: false,
    category: "artist"
  }
];

const FAQPage = () => {
  const [faqs, setFaqs] = useState(INITIAL_FAQS);

  const handleToggle = (question: string) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((item) =>
        item.question === question ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const renderFAQSection = (category: string) => (
    <ul className="w-full flex flex-col gap-4 mb-10">
      {faqs
        .filter((item) => item.category === category)
        .map((item, index) => (
          <li key={index} className="w-full">
            <div
              onClick={() => handleToggle(item.question)}
              className={`flex justify-between transition-all w-full items-center bg-primary p-6 rounded-lg cursor-pointer ${
                item.isOpen ? "rounded-b-none border-b bg-secondary border-white/10" : " bg-primary"
              }`}
            >
              <p className="font-medium">{item.question}</p>
              {item.isOpen ? <FaMinus /> : <FaPlus />}
            </div>

            {item.isOpen && (
              <div className="bg-primary p-6 rounded-b-lg animate-in fade-in slide-in-from-top-1 duration-200">
                <p className="text-sm md:text-base leading-relaxed">{item.answer}</p>
              </div>
            )}
          </li>
        ))}
    </ul>
  );

  return (
    <div className="max-w-[1200px] w-full flex flex-col gap-6 mx-auto justify-center py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-gray-400 mt-2">Everything you need to know about the platform.</p>
      </div>

      <div className="max-w-[1000px] w-full mx-auto">
        {/* CLIENT SECTION */}
        <div className="mb-4">
          <h4 className="text-xl font-semibold">For Clients</h4>
          <p className="text-sm text-gray-400 mb-4">Common questions about commissioning and buying art.</p>
        </div>
        {renderFAQSection("client")}

        {/* ARTIST SECTION */}
        <div className="mb-4 mt-10">
          <h4 className="text-xl font-semibold">For Artists</h4>
          <p className="text-sm text-gray-400 mb-4">Helpful information regarding selling and managing your work.</p>
        </div>
        {renderFAQSection("artist")}
      </div>
    </div>
  );
};

export default FAQPage;