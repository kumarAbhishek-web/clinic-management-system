import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const faqData = [
    {
        question: "What is a Clinic Management System?",
        answer: "A Clinic Management System is software that helps clinics manage patient records, appointments, billing, prescriptions, and staff efficiently in one centralized platform."
    },
    {
        question: "Can I book appointments online using this system?",
        answer: "Yes, the system allows patients to schedule appointments online, view doctor availability, and receive confirmation notifications."
    },
    {
        question: "Is patient data stored securely?",
        answer: "Absolutely. All patient data is encrypted and stored securely following healthcare data protection standards and compliance regulations like HIPAA."
    },
    {
        question: "Can doctors access medical records during consultations?",
        answer: "Yes, doctors can securely access patient medical history, prescriptions, and test results in real time to provide informed care during appointments."
    },
    {
        question: "Is there support for managing billing and invoices?",
        answer: "Yes, the system includes billing modules that help generate invoices, track payments, manage insurance claims, and reduce manual work."
    }
];

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return (
        <div className='max-w-4xl m-auto px-4 py-16'>
            <h2 className='text-3xl font-bold text-center text-black mb-8'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
                {faqData.map((faq, index) => (
                    <div key={index} className='shadow-md px-4'>
                        <button
                            onClick={() => toggleIndex(index)}
                            className='flex justify-between items-center py-6  w-full font-medium'
                        >
                            <span>{faq.question}</span>
                            <FiChevronDown className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} />
                        </button>
                        {activeIndex === index && (
                            <div className='text-gray-600 pr-6 pb-4 flex items-center transition-transform duration-700'>
                                <p>{faq.answer}</p>

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
