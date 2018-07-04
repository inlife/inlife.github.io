import config from '../config'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
    <div>
        <Head>
            <title>{ config.name }</title>
        </Head>

        <div className='header'>
            <h1>hey!</h1>
        </div>

        <div className='content'>
            <div className='top-bar'>
                <h2>I'm <strong>{ config.name }</strong></h2>
                <h2>{ config.role } <strong>w/</strong> >{(new Date).getFullYear() - 2010} years of experience</h2>
            </div>

            <div className='mid-bar'>
                <div className='hashtags'>#backend, #frontend, #mobile, #gamedev</div>
                <div className='links'>
                    my <Link href='/projects'><a>projects</a></Link> |
                    my <a target='_blank' rel='noopener noreferrer' href={config.site + 'static/Vladyslav_Hrytsenko.pdf'}>c.v.</a>
                </div>
            </div>

            <div className='link-bar'>
                <a href='mailto:vladgritsenko@gmail.com?subject=Hey!'><i className='fa fa-envelope'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/inlife'><i className='fa fa-github'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/inlife360'><i className='fa fa-facebook-official'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/inlife360'><i className='fa fa-twitter'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://angel.co/inlife360'><span className='smaller'><i className='fa fa-angellist'></i></span></a>
            </div>
        </div>

        <div className='footer'>
            <div>made with <span className='smaller'><i className='fa fa-heart red'></i></span> {(new Date).getFullYear()}</div>
        </div>
    </div>
)
