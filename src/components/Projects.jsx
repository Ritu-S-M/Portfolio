import ProjectCard from './ProjectCard';

export const Projects = () => {
  const projects = [
    {
      imgSrc: '/projects/currency.png',
      title: 'Currency Converter',
      tags: ['ReactJS', 'Tailwind CSS','Custom Hook'],
      projectLink: 'https://github.com/Ritu-S-M/React_js/tree/main/currency_Converter'
    },
  {
    imgSrc: '/projects/xai.png',
    title: 'Explainable AI for Skin Cancer Detection',
    tags: ['Grad CAM', 'ML','ReactJS'],
    projectLink: 'https://github.com/Ritu-S-M/Compilators'
  },
  {
    imgSrc: '/projects/portfolio.png',
    title: 'Portfolio Website',
    tags: ['ReactJS', 'Framer Motion'],
    projectLink: 'https://github.com/Ritu-S-M/Portfolio'
  },
  {
    imgSrc: '/projects/d1.png',
    title: 'Stock Alert',
    tags: ['HTML', 'API'],
    projectLink: 'https://github.com/Ritu-S-M/Stock_price_notifier'
  },
  {
    imgSrc: '/projects/edutoken.png',
    title: 'Edutoken',
    tags: ['ReactJS', 'Flask'],
    projectLink: 'https://github.com/Ritu-S-M/EduToken'
  },
  
];
  return (
    <section
    id="projects">
      <div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-fuchsia-500 mt-8 mb-8'>
          My Projects
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'
        >
          {projects.map(({imgSrc, title, tags,projectLink}, index) =>
          (
            <ProjectCard
            key = {index}
            imgSrc = {imgSrc}
            title = {title}
            tags = {tags}
            projectLink = {projectLink}
            />
          ))};
        </div>
      </div>
    </section>
  )
}
