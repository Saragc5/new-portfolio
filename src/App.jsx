import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import { projectData } from './components/data'



export default function App() {
  return (
    <main
      className="flex min-h-screen flex-col items-center 
    justify-between p-10 md:p-20 bg-gray-900 md:text-base sm:text-xs"
    >
      <div
        className="z-10 w-full max-w-6xl 
      items-center justify-between text-lg 
      lg:grid gap-10 bg-gray-900 albert-sans text-white "
      >
        <Hero />      
        <About />
        <Skills />
        <div className="container grid grid-cols-1 grid-row-2">
          <div className="container flex justify-center gap-2 md:gap-9 flex-wrap ">
          <>
                  {projectData &&
                    projectData.map(({ id, title, description, link }) => {
                      return (
                        <Project
                          key={id}
                          title={title}
                          description={description}
                          link={link}
                        />
                      );
                    })}
                
            </>
          </div>
        </div>

        <GetInTouch />
        <Footer />
      </div>
    </main>
  );
}
