import { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import './Modal.css'

interface ModalProps {
    overlayCloseModal?: boolean;
    hideCloseBtn?: boolean;
    onClose: () => void;
    children: ReactNode
}
export default function Modal({
    onClose,
    children,
    overlayCloseModal = true,
    hideCloseBtn = false
}: ModalProps) {
    return (
        <section className={'modalJail'}>

            <div
                className={'overlay'}
                onClick={() => { if (overlayCloseModal) onClose() }}
            />

            <section className={'modal'}>
                {
                    !hideCloseBtn ?
                        <button
                            className={'closeBtn'}
                            onClick={onClose}
                        >
                            <XMarkIcon />
                        </button>
                        : null
                }
                <section className={'content'}>
                    {children}
                </section>
            </section>
        </section>
    )
}