import PropTypes from 'prop-types';

const ProjectCard = (
    {imgSrc, title, tags, projectLink, classes }
) => {
  return (
    <div 
    className={
    `relative  p-3 rounded-2xl bg-fuchsia-900/30 hover:bg-fuchsia-800/40 active:bg-fuchsia-900/60 ring-1 ring-inset ring-fuchsia-700/50 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:-translate-y-2 group ${classes || ''}`}>
        <figure
          className="img-box h-fit aspect-square rounded-2xl overflow-hidden"
        >
            <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
            />
        </figure>
        
        <div className="flex items-center justify-between gap-3">
           <div className="min-w-0 flex-1">
            <h3 className='text-[20px] font-medium mb-2 mt-0 text-zinc-200 transition-colors duration-300 group-hover:text-white truncate'>
                {title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5">
                {tags.slice(0, 3).map((label, key) =>(
                    <span key={key}
                    className="h-auto text-xs text-zinc-100 bg-white/5 grid items-center px-2 py-1 rounded-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    style={{
                        animationDelay: `${key * 100}ms`
                    }}
                    >
                        {label}
                    </span>
                ))}
                {tags.length > 3 && (
                    <span className="text-xs text-zinc-400 ml-1">
                        +{tags.length - 3}
                    </span>
                )}
            </div> 
            </div>
            
            <div className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-br from-purple-400 to-fuchsia-500 text-zinc-950 shrink-0 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-400/50"> 
                <span
                className="material-symbols-rounded text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
                >
                    arrow_outward
                </span>
            </div>
        </div>

        <a
         href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View ${title} project`}
         >
        </a>
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-purple-500/20 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-sm"></div>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default ProjectCard