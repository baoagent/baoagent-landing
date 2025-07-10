export const createTranslator = (messages: Record<string, unknown>) => {
    return (key: string): string => {
        const keys = key.split('.');
        let value: unknown = messages;
        for (const k of keys) {
            value = (value as Record<string, unknown>)?.[k];
        }
        return (value as string) || key;
    };
};

export type Translator = ReturnType<typeof createTranslator>; 