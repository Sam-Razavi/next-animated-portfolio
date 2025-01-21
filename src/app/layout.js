import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';
import ClientWrapper from './ClientWrapper'; // Import the wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Sam In Codes',
    description:
        'Explore my portfolio showcasing projects, skills, and certifications as a web developer.',
    icons: {
        icon: '/favicon.ico', // Path to your favicon in the `public` folder
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TransitionProvider>
                    <ClientWrapper>{children}</ClientWrapper>
                </TransitionProvider>
            </body>
        </html>
    );
}
