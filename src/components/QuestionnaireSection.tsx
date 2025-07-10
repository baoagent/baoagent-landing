"use client";
import React, { useState } from "react";
import { createTranslator } from "../utils/translations";
import { FORMSPREE_ENDPOINT } from "../constants";
import { useFormState } from "../hooks/useFormState";
import { useModal } from "../hooks/useModal";
import { validateContactDetails } from "../utils/validation";
import ContactFields from "./ContactFields";
import FormField from "./FormField";
import { BUSINESS_TYPE_LABELS } from '../constants/formOptions';
import { VALIDATION_LIMITS } from '../constants';
import { QuestionnaireData, BusinessType } from '../types';

interface QuestionnaireSectionProps {
  messages: Record<string, unknown>;
}

const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({ messages }) => {
  const t = createTranslator(messages);
  const modal = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({
    value,
    label: t(`questionnaire.businessTypes.${value}`) || label
  }));

  const {
    data,
    errors,
    isSubmitting,
    setValue,
    setError: setFormError,
    handleSubmit,
    resetForm
  } = useFormState<QuestionnaireData>({
    initialValues: {
      name: '',
      businessType: 'retail',
      adminProblem: '',
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
          setFormError('contactDetails', contactError);
          throw new Error(contactError);
        }
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData,
          formType: "questionnaire"
        }),
      });
      
      if (!res.ok) {
        throw new Error(t('questionnaire.errorMessage'));
      }
    },
    onSuccess: () => {
      setSubmitted(true);
      setError("");
      // Auto-close after showing success message
      setTimeout(() => {
        modal.close();
        setSubmitted(false);
        resetForm();
      }, 3000);
    },
    onError: (errorMsg) => {
      setError(errorMsg);
      console.error('Questionnaire submission error:', errorMsg);
    }
  });

  const openModal = () => {
    modal.open();
    resetForm();
    setSubmitted(false);
    setError("");
  };

  return (
    <>
      <section className="w-full max-w-md px-6 py-10 flex flex-col items-center mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">{t('questionnaire.title')}</h2>
        <p className="text-gray-600 text-center mb-6">{t('questionnaire.description')}</p>
        
        <button
          onClick={openModal}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded px-6 py-3 transition-colors"
        >
          {t('questionnaire.openButton')}
        </button>
      </section>

      {/* Modal Overlay */}
      {modal.isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50 p-4" onClick={modal.close}>
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{t('questionnaire.modalTitle')}</h3>
                <button
                  onClick={modal.close}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              
              {submitted ? (
                <div className="text-green-600 font-medium text-center py-8">
                  {t('questionnaire.successMessage')}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <ContactFields
                    messages={messages}
                    values={data}
                    errors={errors}
                    setValue={setValue}
                  />
                  
                  <FormField
                    label={t('questionnaire.businessTypeLabel')}
                    name="businessType"
                    type="select"
                    placeholder={t('questionnaire.businessTypePlaceholder')}
                    value={data.businessType}
                    onChange={(value) => setValue('businessType', value as BusinessType)}
                    error={errors.businessType}
                    required
                    options={businessTypeOptions}
                  />
                  
                  <FormField
                    label={t('questionnaire.painPointLabel')}
                    name="adminProblem"
                    type="textarea"
                    placeholder={t('questionnaire.painPointPlaceholder')}
                    value={data.adminProblem}
                    onChange={(value) => setValue('adminProblem', value)}
                    error={errors.adminProblem}
                    required
                    rows={4}
                    maxLength={VALIDATION_LIMITS.maxAdminProblemLength}
                  />
                  
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded px-4 py-2 transition-colors disabled:opacity-60"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('questionnaire.submittingButton') : t('questionnaire.submitButton')}
                  </button>
                  
                  {error && (
                    <div className="text-red-500 text-sm text-center" role="alert">
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionnaireSection; 