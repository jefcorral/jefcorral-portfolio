import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    id: 'hotel', title: 'Villa Aurelia — Luxury Hotel Reservation', category: 'Hospitality / Booking', url: 'https://hotel-rsv-proj.vercel.app/', host: 'hotel-rsv-proj.vercel.app', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHcz_aZhJ38otLiTr2BR3ztLkg8J7VE6K1xMFJODlGqDA3XfBxyh1KUT18JwBPjR6zk8cP48Cw9U-qB1SSx3UPwM6ZZhTWR6SCjUtNFYWMMePr9WDm9mC3bgIUU8M7dvgPKwOp5VeYx0RS6EUTE3q4zUMiebsM2247smypXjaZ2oMQz1ThmBeYqGa3mAQN1NED00z69IR97bKo_C3lhUfjcJzm4W4BHKK-oervLBuohWeP-EqqvW38aivan9OgX5hNpA', description: 'A premium hotel and villa reservation experience with accommodation discovery, amenities, guest experiences, and booking-focused calls to action.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'], highlight: 'Responsive hospitality experience with an editorial visual system and booking-led information architecture.'
  },
  {
    id: 'pos', title: 'Modern Point-of-Sale System', category: 'Retail / Operations', url: 'https://pos-prj.onrender.com/', host: 'pos-prj.onrender.com', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEZS_EXaK5GA_hPwRDDgB-mMEk73NW9KzbcyFFSzv2yj_mAL_9pwDrBeNbipaF_5yUk-Ael9Q4U3Dgx2i_VsasJJar9PFUk_BE5eiMcJOMLWoUw-r1us-7-CbwW8kWqzkxQ4J8-qG62Q-SXPoDYw3kjiEHPljuo6nNNshBTsYZLYlFRe7HXOO88BI7t2YqwBHKjQS3Jvd-6E9dups6_poTSFoHUtjzTJL3uqjk6hJj_xbiMgNReKdwF-9UOGJdOAD9NQ', description: 'A web-based point-of-sale application designed around practical retail workflows and day-to-day business operations.', stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'Render'], highlight: 'A streamlined operational interface that keeps sales workflows fast, clear, and accessible.'
  },
  {
    id: 'ecommerce', title: 'Bloom & Stem — E-Commerce Storefront', category: 'E-Commerce / Retail', url: 'https://ecom-demo-brown.vercel.app/', host: 'ecom-demo-brown.vercel.app', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGi3NDhw4eCHyZFYfkHAlNcwkWppuYSXmXpQlx7Qbe2AP9LAMO9rls7NOEW-8IZ-DNU1Guk80G63Kkwsr6ehzE2q6gEdMeEBBuRaM9Nbt2CxpwxJqMfH1Z6lOt6u0bVVk3CqjWw3xVXnMiwcIDk1X7LBqlBmWMLzGsdCghUL4BsIHuCO-mLNiCGGLDHw6rCw59C_0ryBoLeLazDmCxilupuWovBEyNC2H8TuExUSr3ycIlfeBOL_qefCvMZhJdUAWl8w', description: 'A floral storefront with product discovery, occasion-based shopping, wishlists, cart, accounts, and responsive shopping flows.', stack: ['Next.js', 'React', 'TypeScript', 'Fastify', 'PostgreSQL'], highlight: 'A complete commerce experience spanning product discovery, customer journeys, and a typed backend API.'
  },
  {
    id: 'serviceflow', title: 'ServiceFlow — Service Management', category: 'SaaS / Workflow', url: 'https://serviceflow-xkp9.onrender.com/', host: 'serviceflow-xkp9.onrender.com', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuDG3P59tWHfkMsLOV6RqjPLkpwQbNCcXxTd3gT1MsMPC3nVvBgDBa7uX9_Cm440vaVIkynlmViNjZhjYv7lf7E58EOdaH1f3REQCQuqoiNB4ILLYm4WhVmAWqb3QQj_RBTfaCwFD-oElJPO1xu4120eMiRJFK-rgr7kQfwGDRz_KpkDMbY4Jbh_4DNQAWf0CkjZR3unsKqcUgTzq7N7L8GjdXzL4i3n13KqUgVlYpvnncXKocgWjZvzusjGG06vHuBA', description: 'A service operations platform for organizing workflows, customer requests, and team delivery in one focused workspace.', stack: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS', 'MySQL'], highlight: 'A workflow-centered SaaS interface built to make service delivery visible and manageable.'
  }
]

const clientWorks = [
  ['RentSync / RentFaster.ca', 'PropTech Marketplace', 'Responsive Angular interfaces, PHP services, REST APIs, search workflows, and production performance.', ['PHP', 'Angular', 'MySQL']],
  ['Mavenhive Loan Origination', 'FinTech Underwriting', 'Reactive loan origination and approval workflows delivered with the TALL stack.', ['Laravel', 'Livewire', 'MySQL']],
  ['iGaming Platform API', 'API Platform', 'Laravel REST APIs, Redis-backed services, technical direction, and frontend integration.', ['Laravel', 'Nuxt', 'Redis']],
  ['WorkflowMax Insights', 'PM Analytics', 'Project management workflows and AI-assisted operational insights for delivery teams.', ['Laravel', 'Vue.js', 'OpenAI']],
  ['Vel Spa Booking', 'Booking SaaS', 'Booking APIs and administrative operations built with Laravel and Filament.', ['Laravel', 'Filament', 'MySQL']],
  ['Livline Inventory', 'Inventory ERP', 'Inventory and operational workflows for reliable stock visibility and fulfillment.', ['Laravel', 'MySQL', 'REST APIs']]
]

const skills = {
  Backend: ['PHP / Laravel', 'Node.js', 'Fastify', 'REST APIs', 'GraphQL', 'Microservices', 'BullMQ'],
  Frontend: ['Next.js / React', 'TypeScript', 'Vue.js / Nuxt', 'Tailwind CSS', 'Livewire', 'Alpine.js'],
  Data: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma ORM', 'Query Optimization', 'Data Modeling'],
  'Cloud & Delivery': ['AWS', 'Docker', 'GitHub Actions', 'Vercel', 'Render', 'Nginx / Linux']
}

const experience = [
  ['Full Stack Engineer', 'RentSync / RentFaster.ca', '2026 – Present', 'Building responsive marketplace features, maintaining PHP APIs, resolving production issues, and improving performance.'],
  ['Full Stack Engineer · Freelance', 'Mavenhive', '2025 – 2026', 'Delivered lending workflows and led API development and technical direction across Laravel-based platforms.'],
  ['Full Stack Engineer', 'PHCollab IT', '2022 – 2025', 'Built and maintained production web systems across backend services, frontend applications, and business operations.'],
  ['Software Developer', 'Smartfox Data Solutions', 'Earlier roles', 'Developed business applications and strengthened foundations in PHP, databases, and end-to-end delivery.']
]

function BrowserFrame({ project }) {
  return <div className="browser"><div className="browser-bar"><span className="dots"><i/><i/><i/></span><span className="address">▣ {project.host}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>↗</a></div><div className="shot"><img src={project.image} alt={`${project.title} application screenshot`} loading="lazy" /></div></div>
}

function ProjectCard({ project, featured, onDetails }) {
  return <article className={`project-card ${featured ? 'featured' : ''}`}><div className="project-media"><BrowserFrame project={project}/></div><div className="project-copy"><div className="eyebrow-row"><span className="tag accent">{project.category}</span><span className="live"><i/> Live</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><div className="actions"><a className="button primary" href={project.url} target="_blank" rel="noreferrer">View live project ↗</a><button className="button secondary" onClick={() => onDetails(project)}>Technical details</button></div></div></article>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState(null)
  useEffect(() => {
    const close = event => event.key === 'Escape' && setModal(null)
    window.addEventListener('keydown', close)
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js')
    return () => window.removeEventListener('keydown', close)
  }, [])
  const closeMenu = () => setMenuOpen(false)
  return <>
    <header><a className="brand" href="#hero"><img src="/monogram.svg" alt="Jeferson Corral monogram"/><span><b>Jeferson Corral</b><small>Systems Engineer</small></span></a><nav className={menuOpen ? 'open' : ''}>{['About','Skills','Featured Projects','Client Works','Experience','Contact'].map(label => <a key={label} onClick={closeMenu} href={`#${label.toLowerCase().replace('featured projects','projects').replace('client works','client-works')}`}>{label}</a>)}</nav><div className="header-actions"><a className="button primary compact" href="#contact">Get in touch</a><button className="menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button></div></header>
    <main>
      <section className="hero section" id="hero"><div className="hero-copy"><div className="badges"><span className="tag">⌖ San Jose Del Monte, Bulacan · Remote</span><span className="tag accent">Available for roles & contracts</span></div><p className="kicker">Full Stack Systems Engineer</p><h1>Hi, I'm <span>Jeferson Corral</span></h1><p className="lead">Architecting resilient web applications, cloud-ready backend services, and conversion-focused frontends with <strong>8+ years of production experience</strong> across PHP/Laravel, Next.js, and modern systems.</p><div className="actions"><a className="button primary" href="#projects">Explore projects ↓</a><a className="button secondary" href="mailto:jefersoncorral5@gmail.com">Contact me</a><a className="icon-link" href="https://github.com/jefcorral" target="_blank" rel="noreferrer">GitHub</a><a className="icon-link" href="https://www.linkedin.com/in/jefcorral/" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="metrics">{[['8+','Years experience'],['4','Live projects'],['Full stack','Product delivery'],['Remote','Worldwide']].map(([value,label]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></section>
      <section className="section" id="projects"><div className="section-heading"><div><p className="kicker green">Authentic showcases</p><h2>Featured Personal Projects</h2><p>Live applications showcasing end-to-end architecture, bespoke frontends, and deployment-ready product experiences.</p></div><span className="tag"><i className="status"/> 4 live deployments</span></div><ProjectCard project={projects[0]} featured onDetails={setModal}/><div className="project-grid">{projects.slice(1).map(project => <ProjectCard key={project.id} project={project} onDetails={setModal}/>)}</div></section>
      <section className="section" id="client-works"><div className="section-heading"><div><p className="kicker">Track record</p><h2>Commercial & Enterprise Engineering</h2><p>Production systems delivered across marketplaces, fintech, SaaS operations, analytics, and inventory.</p></div></div><div className="work-grid">{clientWorks.map(([title,category,description,stack]) => <article className="work-card" key={title}><span className="kicker">{category}</span><h3>{title}</h3><p>{description}</p><div className="tags">{stack.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div></section>
      <section className="section" id="skills"><div className="section-heading"><div><p className="kicker">Capabilities</p><h2>Technical Stack & Tooling</h2><p>A practical toolkit for designing, shipping, and operating production applications.</p></div></div><div className="skills-grid">{Object.entries(skills).map(([group,items]) => <article className="skill-card" key={group}><h3>{group}</h3><div className="tags">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div></section>
      <section className="section about" id="about"><div><p className="kicker green">About me</p><h2>Pragmatic engineering with continuous delivery</h2><p className="lead">I’m a Full Stack Systems Engineer based in San Jose Del Monte, Bulacan. I build products that remain maintainable beyond launch by combining robust data models, secure APIs, responsive interfaces, and clear delivery practices.</p></div><div className="principles">{[['Performance first','Efficient APIs, indexed queries, and responsive interfaces.'],['Secure by design','Validation, authorization, reliable transactions, and safe integrations.'],['Remote ready','Clear async communication across international teams and time zones.']].map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section" id="experience"><div className="section-heading"><div><p className="kicker">History</p><h2>Career Trajectory & Experience</h2><p>Hands-on product engineering across client teams, production platforms, and independent builds.</p></div></div><div className="timeline">{experience.map(([role,company,date,text]) => <article key={`${role}${company}`}><i/><div><span>{date}</span><h3>{role} · <em>{company}</em></h3><p>{text}</p></div></article>)}</div></section>
      <section className="section contact" id="contact"><div><p className="kicker green">Open channel</p><h2>Let's connect & build</h2><p>Have a product, platform, or engineering challenge? Tell me what you’re building and where you need support.</p></div><div className="contact-actions"><a className="button primary" href="mailto:jefersoncorral5@gmail.com">jefersoncorral5@gmail.com</a><a className="button secondary" href="/resume.pdf" download>Download résumé</a></div></section>
    </main>
    <footer><span><img src="/monogram.svg" alt=""/> Jeferson Corral</span><p>Full Stack & Systems Engineer · © {new Date().getFullYear()}</p><div><a href="https://github.com/jefcorral" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/jefcorral/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    {modal && <div className="modal-backdrop" onMouseDown={event => event.target === event.currentTarget && setModal(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setModal(null)} aria-label="Close dialog">×</button><BrowserFrame project={modal}/><p className="kicker">{modal.category}</p><h2 id="modal-title">{modal.title}</h2><p>{modal.highlight}</p><h3>Engineering stack</h3><div className="tags">{modal.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><div className="actions"><a className="button primary" href={modal.url} target="_blank" rel="noreferrer">Open live project ↗</a><button className="button secondary" onClick={() => setModal(null)}>Close</button></div></div></div>}
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
