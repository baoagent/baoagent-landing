import { useState, useCallback } from 'react';
import { ModalState } from '../types';

interface UseModalOptions {
    onOpen?: () => void;
    onClose?: () => void;
    autoCloseDelay?: number;
}

export const useModal = (options: UseModalOptions = {}): ModalState => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => {
        setIsOpen(true);
        options.onOpen?.();
    }, [options.onOpen]);

    const close = useCallback(() => {
        setIsOpen(false);
        options.onClose?.();
    }, [options.onClose]);

    const toggle = useCallback(() => {
        if (isOpen) {
            close();
        } else {
            open();
        }
    }, [isOpen, open, close]);

    const autoClose = useCallback(() => {
        if (options.autoCloseDelay) {
            setTimeout(() => {
                close();
            }, options.autoCloseDelay);
        }
    }, [options.autoCloseDelay, close]);

    return {
        isOpen,
        open,
        close,
        toggle,
        autoClose
    };
}; 