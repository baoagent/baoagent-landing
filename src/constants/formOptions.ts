export const CONTACT_METHODS = {
    EMAIL: 'email',
    PHONE: 'phone',
    WHATSAPP: 'whatsapp',
    TELEGRAM: 'telegram',
    LINKEDIN: 'linkedin',
    TWITTER: 'twitter',
    INSTAGRAM: 'instagram',
    FACEBOOK: 'facebook',
    WEIBO: 'weibo',
    WECHAT: 'wechat',
    XIAOHONGSHU: 'xiaohongshu',
    OTHER: 'other',
} as const;

export const BUSINESS_TYPES = {
    RETAIL: 'retail',
    FOOD_BEVERAGE: 'food_beverage',
    SERVICES: 'services',
    MANUFACTURING: 'manufacturing',
    TECHNOLOGY: 'technology',
    HEALTHCARE: 'healthcare',
    CONSTRUCTION: 'construction',
    CONSULTING: 'consulting',
    EDUCATION: 'education',
    OTHER: 'other',
} as const;

export const CONTACT_METHOD_LABELS = {
    [CONTACT_METHODS.EMAIL]: 'Email',
    [CONTACT_METHODS.PHONE]: 'Phone',
    [CONTACT_METHODS.WHATSAPP]: 'WhatsApp',
    [CONTACT_METHODS.TELEGRAM]: 'Telegram',
    [CONTACT_METHODS.LINKEDIN]: 'LinkedIn',
    [CONTACT_METHODS.TWITTER]: 'Twitter/X',
    [CONTACT_METHODS.INSTAGRAM]: 'Instagram',
    [CONTACT_METHODS.FACEBOOK]: 'Facebook',
    [CONTACT_METHODS.WEIBO]: 'Weibo',
    [CONTACT_METHODS.WECHAT]: 'WeChat',
    [CONTACT_METHODS.XIAOHONGSHU]: 'Xiaohongshu (Little Red Book)',
    [CONTACT_METHODS.OTHER]: 'Other',
} as const;

export const BUSINESS_TYPE_LABELS = {
    [BUSINESS_TYPES.RETAIL]: 'Retail',
    [BUSINESS_TYPES.FOOD_BEVERAGE]: 'Food & Beverage',
    [BUSINESS_TYPES.SERVICES]: 'Services',
    [BUSINESS_TYPES.MANUFACTURING]: 'Manufacturing',
    [BUSINESS_TYPES.TECHNOLOGY]: 'Technology',
    [BUSINESS_TYPES.HEALTHCARE]: 'Healthcare',
    [BUSINESS_TYPES.CONSTRUCTION]: 'Construction',
    [BUSINESS_TYPES.CONSULTING]: 'Consulting',
    [BUSINESS_TYPES.EDUCATION]: 'Education',
    [BUSINESS_TYPES.OTHER]: 'Other',
} as const;

export const VALIDATION_PATTERNS = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[\d\s\-\(\)]{7,}$/,
    SOCIAL_MEDIA: /^[a-zA-Z0-9._-]{3,}$/,
} as const;

export const VALIDATION_MESSAGES = {
    REQUIRED: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PHONE: 'Please enter a valid phone number',
    INVALID_SOCIAL_MEDIA: 'Please enter a valid username/handle',
    MIN_LENGTH: (min: number) => `Must be at least ${min} characters`,
    MAX_LENGTH: (max: number) => `Must be no more than ${max} characters`,
} as const; 