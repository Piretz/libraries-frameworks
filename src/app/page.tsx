'use client'
import Section from '../components/section'
import Footer from '../components/footer'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiFastapi, SiDjango,
  SiChakraui, SiMui, SiBootstrap, SiAntdesign,
  SiFramer, SiGreensock,
  SiJest, SiTestinglibrary, SiCypress, SiVitest,
} from 'react-icons/si'
import { SiPostman, SiSwagger } from 'react-icons/si'
const frontendResources = [
  { name: 'React', description: 'A JavaScript library for building user interfaces', url: 'https://reactjs.org', icon: <SiReact size={32} /> },
  { name: 'Next.js', description: 'React framework with hybrid rendering', url: 'https://nextjs.org', icon: <SiNextdotjs size={32} /> },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework', url: 'https://tailwindcss.com', icon: <SiTailwindcss size={32} /> },
  { name: 'Vue.js', description: 'Progressive JavaScript framework', url: 'https://vuejs.org', icon: <SiVuedotjs size={32} /> },
  { name: 'Angular', description: 'Web application framework', url: 'https://angular.io', icon: <SiAngular size={32} /> },
]

const backendResources = [
  { name: 'Node.js', description: 'JavaScript runtime', url: 'https://nodejs.org', icon: <SiNodedotjs size={32} /> },
  { name: 'Express', description: 'Fast, minimalist backend framework', url: 'https://expressjs.com', icon: <SiExpress size={32} /> },
  { name: 'FastAPI', description: 'High-performance Python framework', url: 'https://fastapi.tiangolo.com', icon: <SiFastapi size={32} /> },
  { name: 'Django', description: 'Python web framework', url: 'https://www.djangoproject.com/', icon: <SiDjango size={32} /> },
]

const uiResources = [
  { name: 'Chakra UI', description: 'Accessible React components', url: 'https://chakra-ui.com', icon: <SiChakraui size={32} /> },
  { name: 'Material UI', description: 'Google’s material design library', url: 'https://mui.com', icon: <SiMui size={32} /> },
  { name: 'Bootstrap', description: 'Popular CSS framework', url: 'https://getbootstrap.com', icon: <SiBootstrap size={32} /> },
  { name: 'Ant Design', description: 'Enterprise-level UI components', url: 'https://ant.design', icon: <SiAntdesign size={32} /> },
]

const animationResources = [
  { name: 'Framer Motion', description: 'Declarative animations for React', url: 'https://www.framer.com/motion', icon: <SiFramer size={32} /> },
  { name: 'GSAP', description: 'Powerful JavaScript animations', url: 'https://greensock.com/gsap', icon: <SiGreensock size={32} /> },

]

const testingResources = [
  { name: 'Jest', description: 'JavaScript testing framework', url: 'https://jestjs.io', icon: <SiJest size={32} /> },
  { name: 'Testing Library', description: 'DOM testing utilities', url: 'https://testing-library.com', icon: <SiTestinglibrary size={32} /> },
  { name: 'Cypress', description: 'End-to-end testing tool', url: 'https://www.cypress.io', icon: <SiCypress size={32} /> },
  { name: 'Vitest', description: 'Fast unit testing for Vite', url: 'https://vitest.dev', icon: <SiVitest size={32} /> },
{ name: 'Postman', description: 'Platform for API testing and collaboration', url: 'https://www.postman.com/', icon: <SiPostman size={32} /> },
  { name: 'Swagger', description: 'API design, documentation & testing toolkit', url: 'https://swagger.io/', icon: <SiSwagger size={32} /> },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-16 tracking-wide">💻 Developer Resource Hub</h1>
      <div className="space-y-20">
        <Section title="🖥 Frontend Libraries" items={frontendResources} />
        <Section title="🧠 Backend Frameworks" items={backendResources} />
        <Section title="🎨 UI Libraries" items={uiResources} />
        <Section title="⚡ Animation Libraries" items={animationResources} />
        <Section title="🧪 Testing Tools" items={testingResources} />
      </div>
          <Footer /> 
    </main>
  )
}
