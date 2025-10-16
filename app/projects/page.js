import Link from 'next/link'
import config from '../../config'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'
import projectsData from '../../data/projects.json'

export const metadata = {
    title: `${config.name} - Projects`,
}

export default function Projects() {
    return (
        <div className='min-h-screen py-10 md:py-16'>
            <div className='mb-12'>
                <div className='mb-8'>
                    <Link href='/' className='text-blue-300 hover:text-white font-medium transition-colors text-lg'>
                        <i className='fa fa-angle-left mr-2'></i> back
                    </Link>
                </div>
                <h1 className='font-display text-6xl md:text-8xl font-bold tracking-tight text-white'>projects:</h1>
            </div>

            <div className='space-y-8'>
                <div className='grid gap-8'>
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

