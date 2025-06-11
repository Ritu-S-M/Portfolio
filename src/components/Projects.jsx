import ProjectCard from './ProjectCard';

export const Projects = () => {
  const projects = [
  {
    imgSrc: '/projects/default.png',
    title: 'Tarjan algorithm visualizer',
    tags: ['Python', 'Matplotlib', 'C'],
    projectLink: ''
  },
  {
    imgSrc: '/projects/default.png',
    title: 'Explainable AI for Skin Cancer Detection',
    tags: ['Grad CAM', 'ML','ReactJS'],
    projectLink: ''
  },
  {
    imgSrc: '/projects/d1.jpg',
    title: 'Stock Alert',
    tags: ['HTML', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/projects/default.png',
    title: 'Portfolio Website',
    tags: ['ReactJS', 'Framer Motion'],
    projectLink: ''
  },
  {
    imgSrc: '/projects/default.png',
    title: 'Edutoken',
    tags: ['ReactJS', 'Flask'],
    projectLink: ''
  },
  {
    imgSrc: '/projects/default.png',
    title: 'Education Learning Model',
    tags: ['ReactJS', 'Tailwind CSS'],
    projectLink: ''
  },
];
  return (
    <section
    id="projects">
      <div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-fuchsia-500 mt-8 mb-8'>
          My Projects
        </h2>

        <div className='grid ml-30 mr-30 gap-x-6 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'
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
