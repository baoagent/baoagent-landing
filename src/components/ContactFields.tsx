import React from 'react';
import { createTranslator } from "../utils/translations";
import FormField from "./FormField";
import { CONTACT_METHODS, CONTACT_METHOD_LABELS } from '../constants/formOptions';
import { VALIDATION_LIMITS } from '../constants';
import { ContactInfo, ContactMethod } from '../types';

interface ContactFieldsProps {
  messages: Record<string, unknown>;
  values: Partial<ContactInfo>;
  errors: Partial<Record<keyof ContactInfo, string>>;
  setValue: (field: keyof ContactInfo, value: string) => void;
}

const ContactFields: React.FC<ContactFieldsProps> = ({ 
  messages, 
  values, 
  errors, 
  setValue
}) => {
  const t = createTranslator(messages);

  const contactOptions = Object.entries(CONTACT_METHOD_LABELS).map(([value, label]) => ({
    value,
    label: t(`sharedContact.${value}`) || label
  }));

  const getContactInfoType = (contactMethod: string) => {
    switch (contactMethod) {
      case CONTACT_METHODS.EMAIL:
        return 'email';
      case CONTACT_METHODS.PHONE:
      case CONTACT_METHODS.WHATSAPP:
        return 'tel';
      default:
        return 'text';
    }
  };

  const getContactInfoPlaceholder = (contactMethod: string) => {
    return t(`sharedContact.${contactMethod}Placeholder`) || 
           `Enter your ${CONTACT_METHOD_LABELS[contactMethod as keyof typeof CONTACT_METHOD_LABELS]?.toLowerCase()}`;
  };

  return (
    <>
      <FormField
        label={t('sharedContact.nameLabel')}
        name="name"
        type="text"
        placeholder={t('sharedContact.namePlaceholder')}
        value={values.name || ''}
        onChange={(value) => setValue('name', value)}
        error={errors.name}
        required
        maxLength={VALIDATION_LIMITS.maxNameLength}
      />
      
      <FormField
        label={t('sharedContact.contactMethodLabel')}
        name="contactMethod"
        type="select"
        placeholder={t('sharedContact.selectContactMethod')}
        value={values.contactMethod || ''}
        onChange={(value) => setValue('contactMethod', value as ContactMethod)}
        error={errors.contactMethod}
        required
        options={contactOptions}
      />
      
      {values.contactMethod && values.contactMethod !== CONTACT_METHODS.OTHER && (
        <FormField
          label={t('sharedContact.contactInfoLabel')}
          name="contactDetails"
          type={getContactInfoType(values.contactMethod)}
          placeholder={getContactInfoPlaceholder(values.contactMethod)}
          value={values.contactDetails || ''}
          onChange={(value) => setValue('contactDetails', value)}
          error={errors.contactDetails}
          required
        />
      )}
      
      {values.contactMethod === CONTACT_METHODS.OTHER && (
        <>
          <FormField
            label={t('sharedContact.otherContactLabel')}
            name="contactDescription"
            type="textarea"
            placeholder={t('sharedContact.otherContactPlaceholder')}
            value={values.contactDescription || ''}
            onChange={(value) => setValue('contactDescription', value)}
            error={errors.contactDescription}
            required
            rows={3}
            maxLength={VALIDATION_LIMITS.maxDescriptionLength}
          />
          <FormField
            label={t('sharedContact.otherContactDetailsLabel')}
            name="contactDetails"
            type="text"
            placeholder={t('sharedContact.otherContactDetailsPlaceholder')}
            value={values.contactDetails || ''}
            onChange={(value) => setValue('contactDetails', value)}
            error={errors.contactDetails}
            required
            maxLength={VALIDATION_LIMITS.maxNameLength}
          />
        </>
      )}
    </>
  );
};

export default ContactFields; 