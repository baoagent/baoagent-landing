"use client";
import React, { useState } from "react";
import { createTranslator } from "../utils/translations";
import SharedContactForm from "./SharedContactForm";
import { ContactInfo } from "../types";

interface FormData extends ContactInfo {
  formType: "questionnaire" | "waitlist";
}

interface WaitlistFormProps {
  messages: Record<string, unknown>;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ messages }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const t = createTranslator(messages);

  const handleSuccess = () => {
    setSubmitted(true);
    setError("");
  };

  const handleError = (errorMsg: string) => {
    setError(errorMsg);
    console.error('Waitlist submission error:', errorMsg);
  };

  const handleSubmit = async (data: FormData) => {
    // Additional waitlist-specific validation or processing can go here
    console.log('Waitlist submission:', data);
  };

  return (
    <section className="w-full max-w-md px-6 py-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">{t('waitlist.title')}</h2>
      {submitted ? (
        <div className="text-green-600 font-medium text-center">{t('waitlist.successMessage')}</div>
      ) : (
        <div className="w-full">
          <SharedContactForm
            messages={messages}
            formType="waitlist"
            onSubmit={handleSubmit}
            onSuccess={handleSuccess}
            onError={handleError}
          />
          {error && (
            <div className="text-red-500 text-sm text-center mt-2" role="alert">
              {error}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default WaitlistForm; 