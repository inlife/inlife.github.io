import Document, { Head, Main, NextScript } from 'next/document'
import config from '../config'

import 'normalize.css'
import 'animate.css'
import '../styles/auroral.css'
import '../styles/general.css'

const analyticsScript = (id) => ({
    __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '${id}', 'auto');
        ga('send', 'pageview');
    `
})

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en' prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# og: http://opengraphprotocol.org/schema/# fb: http://www.facebook.com/2008/fbml/#'>
                <Head>
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

                    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
                    <meta name='description' content={config.description} />
                    <meta name='keywords' content={config.keywords} />
                    <meta name='author' content={config.name} />

                    <meta name='HandheldFriendly' content='True' />

                    <link rel='canonical' content={config.site} />
                    <link rel='author' href='https://plus.google.com/114197786731970943237' />
                    <link rel='publisher' href='https://plus.google.com/114197786731970943237' />

                    <meta property='og:title' content={config.name} />
                    <meta property='og:description' content={config.description} />
                    <meta property='og:locale' content='en_US' />
                    <meta property='og:type' content='website' />
                    <meta property='og:url' content={config.site} />
                    <meta property='og:image' content={config.site + 'static/mario400x346.jpg?v=1'} />
                    <meta property='og:site_name' content={config.name} />

                    <meta property='fb:admins' content='100000470641337' />
                    <meta property='fb:profile_id' content='100000470641337' />

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:site' content='@inlife360' />
                    <meta name='twitter:creator' content='@inlife360' />
                    <meta name='twitter:description' content={config.description} />

                    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
                    <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css' />
                    <link href='https://fonts.googleapis.com/css?family=Roboto:700,300' rel='stylesheet' type='text/css' />
                    <link href='/_next/static/style.css' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script dangerouslySetInnerHTML={analyticsScript('UA-76312016-1')} />
                </body>
            </html>
        )
    }
}
