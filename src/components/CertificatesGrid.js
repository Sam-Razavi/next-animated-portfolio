'use client';

import { useState } from 'react';
import CertificateModal from './CertificateModal';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CertificatesGrid() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            title: 'Cyber Security Essentials',
            img: '/Certificate-Cyber.png',
            description: 'Linköping University',
            details:
                'Completed a course at Linköping University covering foundational concepts in cybersecurity, focusing on protection against digital threats and enhancing security awareness.',
        },
        {
            title: 'Introduction to AI (Elements of AI)',
            img: '/university-of-helsinki.png',
            description: 'University of Helsinki',
            details:
                'Completed the Elements of AI course at the University of Helsinki, providing foundational knowledge in artificial intelligence, its applications, and its implications in society.',
        },
        {
            title: 'Applied IoT Certification',
            img: '/certificate-IOT.png',
            description: 'Linnaeus University',
            details:
                'Certified in applied IoT from Linnaeus University, emphasizing the practical implementation and deployment of Internet of Things systems in real-world scenarios.',
        },
        {
            title: 'AI Sweden: Organization and Application',
            img: '/AI Sweden.png',
            description: 'AI Sweden Program',
            details:
                'Participated in AI Sweden\'s program focusing on AI implementation, organizational strategies, data challenges, and cultural change for AI-driven innovation.',
        },
        {
            title: 'JavaScript Developer',
            img: '/IT-logo.png',
            description: 'IT-Högskolan Sverige AB',
            details:
                'Completed the JavaScript Developer program at IT-Högskolan, covering modern web development with frameworks, backend programming, database management, and more.',
        },
        {
            title: 'Software Engineering - Python',
            img: '/Dalarna-Logo.png',
            description: 'Dalarna University',
            details:
                'Covered object-oriented programming, algorithms, data structures, and software development methods as part of a Python-focused software engineering course.',
        },
    ];

    return (
        <div>
            <motion.div
                initial={{ x: '-300px' }}
                animate={{ x: '0' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedCertificate(cert)}
                    >
                        <div className="relative w-full h-40">
                            <Image
                                src={cert.img}
                                alt={cert.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'contain' }}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-bold mt-4">{cert.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {cert.description}
                        </p>
                    </div>
                ))}
            </motion.div>

            {/* Modal for displaying details */}
            <CertificateModal
                isOpen={!!selectedCertificate}
                onClose={() => setSelectedCertificate(null)}
                certificate={selectedCertificate}
            />
        </div>
    );
}
