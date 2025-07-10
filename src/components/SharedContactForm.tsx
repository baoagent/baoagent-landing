"use client";
import React from "react";
import { createTranslator } from "../utils/translations";
import { FORMSPREE_ENDPOINT } from "../constants";
import { useFormState } from "../hooks/useFormState";
import { validateContactDetails } from "../utils/validation";
import ContactFields from "./ContactFields";
import { ContactInfo } from "../types";

interface FormData extends ContactInfo {
  formType: "questionnaire" | "waitlist";
}

interface SharedContactFormProps {
  messages: Record<string, unknown>;
  formType: "questionnaire" | "waitlist";
  additionalFields?: React.ReactNode;
  onSubmit?: (data: FormData) => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const SharedContactForm: React.FC<SharedContactFormProps> = ({ 
  messages, 
  formType, 
  additionalFields,
  onSubmit,
  onSuccess,
  onError
}) => {
  const t = createTranslator(messages);

  const {
    data,
    errors,
    isSubmitting,
    setValue,
    setError,
    handleSubmit
  } = useFormState<ContactInfo>({
    initialValues: {
      name: '',
      contactMethod: 'email',
      contactDetails: '',
      contactDescription: ''
    },
    onSubmit: async (formData) => {
      // Validate contact details based on selected method
      if (formData.contactMethod && formData.contactMethod !== 'other') {
        const contactError = validateContactDetails(
          formData.contactDetails, 
          formData.contactMethod, 
          t
        );
        if (contactError) {
          setError('contactDetails', contactError);
          throw new Error(contactError);
        }
      }

      const data: FormData = {
        ...formData,
        formType
      };

      if (onSubmit) {
        await onSubmit(data);
      } else {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        
        if (!res.ok) {
          throw new Error(t('sharedContact.errorMessage'));
        }
      }
    },
    onSuccess,
    onError
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {additionalFields}
      
      <ContactFields
        messages={messages}
        values={data}
        errors={errors}
        setValue={setValue}
      />
      
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded px-4 py-2 transition-colors disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('sharedContact.submittingButton') : t('sharedContact.submitButton')}
      </button>
    </form>
  );
};

export default SharedContactForm; 