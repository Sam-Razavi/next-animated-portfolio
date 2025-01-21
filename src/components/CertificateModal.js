'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CertificateModal({ isOpen, onClose, certificate }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen || !certificate) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOutsideClick}
        >
            <div
                ref={modalRef}
                className="bg-white w-11/12 max-w-2xl p-6 rounded-lg shadow-lg relative overflow-auto max-h-[80vh]"
            >
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>

                {/* Modal Title */}
                <h2 className="text-2xl font-bold text-center">{certificate.title}</h2>

                {/* Modal Content */}
                <div className="mt-4 space-y-4">
                    {/* Description */}
                    <p className="text-gray-700">{certificate.details}</p>

                    {/* Certificate Image */}
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={certificate.img}
                            alt={certificate.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="rounded object-contain"
                        />
                    </div>
                </div>

                {/* Footer with Close Button */}
                <div className="mt-6 text-center">
                    <button
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
