'use client' // Ensure this is a client component

import Script from 'next/script'
import { useEffect } from 'react'

export default function GoogleAnalytics() {
    useEffect(() => {
        // console.log('Google Analytics component mounted')

        if (typeof window.gtag === 'function') {
            // console.log('Google Analytics is initialized')
        } else {
            // console.log('Google Analytics is not yet initialized')
        }
    }, [])

    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-N7RWYCLVE6"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-N7RWYCLVE6');`
                }}
            />
        </>
    )
}
