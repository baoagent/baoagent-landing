import { CONTACT_METHODS, BUSINESS_TYPES } from '../constants/formOptions';

export type ContactMethod = typeof CONTACT_METHODS[keyof typeof CONTACT_METHODS];
export type BusinessType = typeof BUSINESS_TYPES[keyof typeof BUSINESS_TYPES];

export interface ContactInfo {
    name: string;
    contactMethod: ContactMethod;
    contactDetails: string;
    contactDescription?: string; // For "other" method
}

export interface QuestionnaireData extends ContactInfo {
    businessType: BusinessType;
    adminProblem: string;
}

export interface WaitlistData extends ContactInfo {
    email: string;
}

export interface FormFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    options?: Array<{ value: string; label: string }>;
    rows?: number;
    maxLength?: number;
}

export interface ValidationRule {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    message?: string;
    custom?: (value: string) => string | undefined;
}

export interface ValidationRules {
    [field: string]: ValidationRule;
}

export interface FormState<T> {
    data: T;
    errors: Partial<Record<keyof T, string>>;
    isSubmitting: boolean;
    isSubmitted: boolean;
}

export interface ModalState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    autoClose?: () => void;
} 