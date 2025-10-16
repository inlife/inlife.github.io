import config from '../config'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap'
})

export const metadata = {
    title: config.name,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.name }],
    metadataBase: new URL(config.site),
    openGraph: {
        title: config.name,
        description: config.description,
        url: config.site,
        siteName: config.name,
        images: [
            {
                url: config.site + 'static/mario400x346.jpg?v=1',
                width: 400,
                height: 346,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        site: '@inlife360',
        creator: '@inlife360',
        description: config.description,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${inter.variable} ${grotesk.variable}`} prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# og: http://opengraphprotocol.org/schema/# fb: http://www.facebook.com/2008/fbml#'>
            <head>
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
                <meta name='HandheldFriendly' content='True' />

                <link rel='canonical' href={config.site} />
                <link rel='author' href='https://plus.google.com/114197786731970943237' />
                <link rel='publisher' href='https://plus.google.com/114197786731970943237' />

                <meta property='fb:admins' content='100000470641337' />
                <meta property='fb:profile_id' content='100000470641337' />

                <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
            </head>
            <body className='font-sans'>
                {/* Animated gradient backdrop */}
                <div className='fixed inset-0 gradient-backdrop'></div>

                {/* Main content with translucent surface */}
                <div className='relative min-h-screen bg-white/10 backdrop-blur-sm'>
                    <div className='mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl px-6 md:px-8'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}

