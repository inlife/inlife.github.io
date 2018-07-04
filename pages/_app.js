import App, {Container} from 'next/app'
import React from 'react'

let previousGradient = 'auroral-agrabah';
const randomGradient = () => {
    const gradients = [
        'auroral-northern',
        'auroral-northern-intense',
        'auroral-northern-dimmed',
        'auroral-northern-dusk',
        // 'auroral-northern-warm',
        'auroral-agrabah'
    ];

    if (!previousGradient) {
        return previousGradient = 'auroral-agrabah'
    }

    // select one of the gradients
    const result = gradients[Math.floor(Math.random() * gradients.length)];
    return result == previousGradient ? randomGradient() : previousGradient = result;
}

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = { gradient: 'auroral-agrabah' }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                gradient: randomGradient()
            })
        }, 7500)
    }

    componentWillUnmount() {
        clearInterval(this.inteval);
    }

    render () {
        const { Component, pageProps } = this.props
        const { gradient } = this.state;

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
