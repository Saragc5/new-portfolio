import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6'
import { dataHero, dataName, resume } from './data.jsx'
import { github } from './data.jsx'
import { linkedin } from './data.jsx'
import hero from '../img/person.jpeg'



export default function Hero() {
  return (
    <main className="container grid gap-20 text-justify w-full mb-14">
      <div className=" flex justify-between w-full">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold nothing-you-could-do mr-6">
          {dataName}{" "}
        </h1>
        <button
          className="container flex justify-center content-center w-20 h-10 md:w-24 md:h-14 bg-amber-400 text-black hover:bg-orange-500 hover:font-bold  
        p-2 rounded-md "
        >
          <a href={resume} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </button>
      </div>
      <div className=" grid place-content-center gap-5 ">
        <img
          src={hero}
          alt="Foto de Sara"
          className=" rounded-full"
          width={200}
          height={200}
        />

        <h1 className="text-lg sm:text-2xl  ">Hi! My name is Sara 👋 </h1>
      </div>
      <p className="text-base sm:text-xl mb-0 md:mb-6 w-full justify-center md:justify-start">
        {dataHero} <span className="text-xl sm:text-3xl">👨🏻‍💻</span>
      </p>

      <div>
        <div className=" container flex justify-center gap-2 mt-0 md:mt-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl sm:text-3xl" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl sm:text-3xl" />
          </a>
        </div>
      </div>
    </main>
  );
}
