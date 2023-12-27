import config from '../config'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'

export default () => (
    <div>
        <Head>
            <title>{ config.name }</title>
        </Head>

        <div className='header'>
            <h1>hey!</h1>
        </div>

        <div className='content animated fadeIn'>
            <div className='top-bar'>
                <h2>I'm <strong>{ config.name }</strong></h2>
                <h2>{ config.role } <strong>w/</strong> &gt;{config.yearsOfExp} years of experience</h2>
            </div>

            <div className='mid-bar'>
                <div className='hashtags'>#backend, #frontend, #mobile, #gamedev</div>
                <div className='links'>
                    my <Link prefetch href='/projects'><a>projects</a></Link> |
                    my <a target='_blank' rel='noopener noreferrer' href={config.site + 'static/vladyslav_hrytsenko_2024.pdf'}>c.v.</a>
                </div>
            </div>

            <div className='link-bar'>
                <a href='mailto:vladgritsenko+site@gmail.com?subject=Hey!'><i className='fa fa-envelope'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/vladyslav-hrytsenko'><i className='fa fa-linkedin'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/inlife'><i className='fa fa-github'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/inlife360'><i className='fa fa-facebook-official'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/inlife360'><i className='fa fa-twitter'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://angel.co/inlife360'><span className='smaller'><i className='fa fa-angellist'></i></span></a>
            </div>
        </div>

        <Footer />
    </div>
)
