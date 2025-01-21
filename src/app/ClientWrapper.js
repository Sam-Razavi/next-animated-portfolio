'use client'

import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieConsent from 'react-cookie-consent'

export default function ClientWrapper({ children }) {
    return (
        <>
            <GoogleAnalytics />
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="userConsent"
                style={{
                    background: '#2B373B',
                    color: 'white',
                    padding: '10px 20px',
                    position: 'fixed',
                    bottom: '0',
                    zIndex: '9999'
                }}
                buttonStyle={{
                    color: '#4e503b',
                    fontSize: '13px',
                    background: '#f1d600',
                    borderRadius: '5px',
                    padding: '5px 10px'
                }}
                expires={365}
            >
                This website uses cookies to enhance your experience.{' '}
            </CookieConsent>
            {children}
        </>
    )
}
