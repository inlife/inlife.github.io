import App, {Container} from 'next/app'
import React from 'react'

const randomGradient = () => {
    const gradients = [
        'auroral-northern',
        'auroral-northern-intense',
        'auroral-northern-dimmed',
        'auroral-northern-dusk',
        'auroral-northern-warm',
        'auroral-agrabah'
    ];

    // select one of the gradients
    return gradients[Math.floor(Math.random() * gradients.length)]
}

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps, gradient: randomGradient() }
    }

    render () {
        const {Component, pageProps, gradient} = this.props
        return <Container>
            <section className='auroral-container'>
                <div className={gradient}></div>
            </section>

            <div className='wrapper animated fadeIn'>
                <Component {...pageProps} />
            </div>
        </Container>
    }
}
