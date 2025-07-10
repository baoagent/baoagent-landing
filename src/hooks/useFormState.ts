import { useState, useCallback } from 'react';

interface UseFormStateOptions<T> {
    initialValues?: T;
    onSubmit?: (data: T) => Promise<void>;
    onSuccess?: () => void;
    onError?: (error: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormState = <T extends Record<string, any>>(options: UseFormStateOptions<T> = {}) => {
    const [data, setData] = useState<T>((options.initialValues || {}) as T);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const setValue = useCallback((field: keyof T, value: string) => {
        setData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    }, [errors]);

    const setError = useCallback((field: keyof T, message: string) => {
        setErrors(prev => ({ ...prev, [field]: message }));
    }, []);

    const resetForm = useCallback(() => {
        setData((options.initialValues || {}) as T);
        setErrors({});
        setIsSubmitting(false);
        setIsSubmitted(false);
    }, [options.initialValues]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (options.onSubmit) {
                await options.onSubmit(data);
                setIsSubmitted(true);
                options.onSuccess?.();
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            options.onError?.(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }, [data, options]);

    return {
        data,
        errors,
        isSubmitting,
        isSubmitted,
        setValue,
        setError,
        resetForm,
        handleSubmit
    };
}; 