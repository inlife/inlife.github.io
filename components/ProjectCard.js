export default function ProjectCard({ project }) {
    return (
        <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
            <div className='space-y-4'>
                <h3 className='font-display text-2xl md:text-3xl font-bold text-white mb-2'>
                    {project.name}
                </h3>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base'>
                    <div>
                        <span className='font-semibold text-blue-300'>type:</span> 
                        <span className='text-gray-300 ml-2'>{project.type}</span>
                    </div>
                    
                    <div>
                        <span className='font-semibold text-blue-300'>year:</span> 
                        <span className='text-gray-300 ml-2'>{project.year}</span>
                    </div>
                </div>

                {project.links.map((link, index) => (
                    <div key={index} className='text-sm md:text-base'>
                        <span className='font-semibold text-blue-300'>link:</span> 
                        <a href={link} rel="noopener noreferrer" target="_blank" className='text-blue-300 hover:text-white ml-2 transition-colors break-all'>
                            {link}
                        </a>
                    </div>
                ))}

                <div className='text-sm md:text-base'>
                    <span className='font-semibold text-blue-300'>description:</span> 
                    <span className='text-gray-300 ml-2'>{project.description}</span>
                </div>

                <div className='text-sm md:text-base'>
                    <span className='font-semibold text-blue-300'>responsibilities:</span> 
                    <span className='text-gray-300 ml-2'>{project.responsibilities}</span>
                </div>

                <div className='text-sm md:text-base'>
                    <span className='font-semibold text-blue-300'>used technologies:</span> 
                    <span className='text-gray-300 ml-2'>{project.technologies}</span>
                </div>
            </div>
        </div>
    )
}

