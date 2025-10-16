import config from '../config'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='min-h-screen py-10 md:py-16'>
            <div className='mb-12'>
                <h1 className='font-display text-6xl md:text-[150px] font-black tracking-tight text-white mb-8'>Hey!</h1>
            </div>

            <div className='space-y-8'>
                <div className='space-y-4'>
                    <h2 className='font-display text-3xl md:text-4xl font-bold text-white'>
                        I'm <strong className='text-blue-300'>{ config.name }</strong>
                    </h2>
                    <h2 className='font-display text-3xl md:text-4xl font-bold text-white'>
                        { config.role } <strong className='text-blue-300'>w/</strong> &gt;{config.yearsOfExp} years of experience
                    </h2>
                </div>

                <div className='space-y-6'>
                    <div className='text-xl md:text-2xl text-gray-300 font-medium'>
                        #backend, #frontend, #mobile, #gamedev
                    </div>
                    <div className='text-lg md:text-xl text-gray-300'>
                        my <Link href='/projects' className='text-blue-300 hover:text-white font-semibold transition-colors'>projects</Link> |
                        my <a target='_blank' rel='noopener noreferrer' href={config.site + 'static/vladyslav_hrytsenko_2024.pdf'} className='text-blue-300 hover:text-white font-semibold transition-colors'>c.v.</a>
                    </div>
                </div>

                <div className='flex space-x-6 text-2xl'>
                    <a href='mailto:vladgritsenko+site@gmail.com?subject=Hey!' className='text-gray-400 hover:text-white transition-colors'>
                        <i className='fa fa-envelope'></i>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/vladyslav-hrytsenko' className='text-gray-400 hover:text-white transition-colors'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/inlife' className='text-gray-400 hover:text-white transition-colors'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/inlife360' className='text-gray-400 hover:text-white transition-colors'>
                        <i className='fa fa-facebook-official'></i>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/inlife360' className='text-gray-400 hover:text-white transition-colors'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://angel.co/inlife360' className='text-gray-400 hover:text-white transition-colors'>
                        <i className='fa fa-angellist'></i>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

