import { VALIDATION_PATTERNS, VALIDATION_MESSAGES, CONTACT_METHODS } from '../constants/formOptions';
import { VALIDATION_LIMITS } from '../constants';
import { ValidationRule, ValidationRules } from '../types';

export const validateField = (value: string, rules: ValidationRule): string | undefined => {
    // Required validation
    if (rules.required && !value.trim()) {
        return rules.message || VALIDATION_MESSAGES.REQUIRED;
    }

    // Pattern validation
    if (rules.pattern && value && !rules.pattern.test(value)) {
        return rules.message || 'Invalid format';
    }

    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
        return rules.message || VALIDATION_MESSAGES.MIN_LENGTH(rules.minLength);
    }

    // Max length validation
    if (rules.maxLength && value.length > rules.maxLength) {
        return rules.message || VALIDATION_MESSAGES.MAX_LENGTH(rules.maxLength);
    }

    // Custom validation
    if (rules.custom) {
        return rules.custom(value);
    }

    return undefined;
};

export const validateForm = (values: Record<string, string>, rules: ValidationRules): Record<string, string> => {
    const errors: Record<string, string> = {};

    Object.keys(rules).forEach(field => {
        const value = values[field] || '';
        const error = validateField(value, rules[field]);
        if (error) {
            errors[field] = error;
        }
    });

    return errors;
};

// Contact method specific validation
export const validateContactDetails = (
    value: string,
    contactMethod: string,
    t: (key: string) => string
): string | undefined => {
    if (!value.trim()) {
        return t('sharedContact.contactInfoRequired');
    }

    const cleanValue = value.replace(/[\s\-\(\)]/g, '');

    switch (contactMethod) {
        case CONTACT_METHODS.EMAIL:
            return VALIDATION_PATTERNS.EMAIL.test(value) ? undefined : t('sharedContact.invalidEmail');
        case CONTACT_METHODS.PHONE:
            return VALIDATION_PATTERNS.PHONE.test(cleanValue) ? undefined : t('sharedContact.invalidPhone');
        case CONTACT_METHODS.WHATSAPP:
            return VALIDATION_PATTERNS.PHONE.test(cleanValue) ? undefined : t('sharedContact.invalidWhatsApp');
        case CONTACT_METHODS.LINKEDIN:
        case CONTACT_METHODS.TWITTER:
        case CONTACT_METHODS.INSTAGRAM:
        case CONTACT_METHODS.FACEBOOK:
        case CONTACT_METHODS.WEIBO:
        case CONTACT_METHODS.WECHAT:
        case CONTACT_METHODS.XIAOHONGSHU:
            return VALIDATION_PATTERNS.SOCIAL_MEDIA.test(value) ? undefined : t('sharedContact.invalidSocialMedia');
        case CONTACT_METHODS.OTHER:
            return value.length >= VALIDATION_LIMITS.minDescriptionLength ? undefined : VALIDATION_MESSAGES.MIN_LENGTH(VALIDATION_LIMITS.minDescriptionLength);
        default:
            return undefined;
    }
};

// Common validation rules
export const createContactValidationRules = (t: (key: string) => string): ValidationRules => ({
    name: {
        required: true,
        message: t('sharedContact.nameRequired'),
        minLength: VALIDATION_LIMITS.minNameLength,
        maxLength: VALIDATION_LIMITS.maxNameLength
    },
    contactMethod: {
        required: true,
        message: t('sharedContact.contactMethodRequired')
    },
    contactDetails: {
        required: true,
        message: t('sharedContact.contactInfoRequired'),
        custom: () => {
            // This will be handled by validateContactDetails in the component
            return undefined;
        }
    },
    contactDescription: {
        maxLength: VALIDATION_LIMITS.maxDescriptionLength,
        message: t('sharedContact.descriptionTooLong')
    }
});

export const createQuestionnaireValidationRules = (t: (key: string) => string): ValidationRules => ({
    ...createContactValidationRules(t),
    businessType: {
        required: true,
        message: t('questionnaire.businessTypeRequired')
    },
    adminProblem: {
        required: true,
        message: t('questionnaire.adminProblemRequired'),
        minLength: VALIDATION_LIMITS.minAdminProblemLength,
        maxLength: VALIDATION_LIMITS.maxAdminProblemLength
    }
});

export const createWaitlistValidationRules = (t: (key: string) => string): ValidationRules => ({
    ...createContactValidationRules(t),
    email: {
        required: true,
        pattern: VALIDATION_PATTERNS.EMAIL,
        message: t('waitlist.invalidEmail')
    }
}); 