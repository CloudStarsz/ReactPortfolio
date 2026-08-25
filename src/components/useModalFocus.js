import { useEffect, useRef } from 'react';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function useModalFocus(isOpen, modalRef, onClose) {
  const closeHandlerRef = useRef(onClose);

  useEffect(() => {
    closeHandlerRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return undefined;

    const modal = modalRef.current;
    const previouslyFocused = document.activeElement;
    const backgroundElements = [
      ...Array.from(modal.parentElement?.children || []).filter((element) => element !== modal),
      document.querySelector('.site-header'),
    ].filter(Boolean);
    const previousStates = backgroundElements.map((element) => ({
      element,
      inert: element.inert,
      ariaHidden: element.getAttribute('aria-hidden'),
    }));

    backgroundElements.forEach((element) => {
      element.inert = true;
      element.setAttribute('aria-hidden', 'true');
    });

    const focusableElements = () => Array.from(modal.querySelectorAll(focusableSelector));
    const initialFocus = modal.querySelector('[data-modal-initial-focus]') || focusableElements()[0] || modal;
    initialFocus.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeHandlerRef.current();
        return;
      }

      if (event.key !== 'Tab') return;
      const elements = focusableElements();

      if (elements.length === 0) {
        event.preventDefault();
        modal.focus();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousStates.forEach(({ element, inert, ariaHidden }) => {
        element.inert = inert;
        if (ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', ariaHidden);
      });
      previouslyFocused?.focus?.();
    };
  }, [isOpen, modalRef]);
}
