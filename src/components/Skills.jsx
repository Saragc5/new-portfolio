import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3 } from 'react-icons/si'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'



export default function Skills() {
  return (
    <main className="grid grid-cols-2 place-items-center sm:flex flex-wrap justify-evenly md:justify-center mb-9 p-0 overflow-hidden">
      <div className=" skills bg-red-500 sm:bg-slate-500 sm:hover:bg-red-500 sm:hover:border-2 sm:border-red-500 hover:font-bold m-3 p-3">
        <AiFillHtml5 className="iconSkills" />
        HTML5
      </div>
      <div className=" skills bg-blue-500 sm:bg-slate-500 sm:hover:bg-blue-500 sm:hover:border-2 sm:border-blue-500 sm:hover:font-bold m-3 p-3">
        <SiCss3 className="iconSkills" />
        CSS
      </div>
      <div className=" skills bg-pink-500 sm:bg-slate-500 hover:bg-pink-500 hover:border-2 border-pink-500 hover:font-bold m-3 p-3">
        <DiSass className="iconSkills" />
        SASS
      </div>
      <div className=" skills bg-purple-500 sm:bg-slate-500 hover:bg-purple-500 hover:border-2 border-purple-500 hover:font-bold m-3 p-3">
        <BsFillBootstrapFill className="iconSkills" />
        Bootstrap
      </div>    
    </main>
  );
}
