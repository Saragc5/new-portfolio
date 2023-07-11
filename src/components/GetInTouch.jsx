import { TfiEmail } from 'react-icons/tfi'
import { email } from './data.jsx'


export default function GetInTouch() {
  return (
    <div className=" grid place-content-center gap-3 m-5">
      <h1 className=" text-xl md:text-2xl font-bold place-self-center mt-4 ">
        Let&apos;s get in touch
      </h1>
      <h3 className="text-lg md:text-xl mb-6 text-justify md:text-start">
        If you like my profile and you think I can fit in your company, 
        do not hesitat to contact me!        
      </h3>
      <button
        className="container flex gap-2 place-self-center bg-amber-500
       text-black hover:bg-orange-500 hover:font-bold rounded-lg w-fit h-fit p-3 
       flex-wrap justify-center align-center"
      >
        <TfiEmail className="text-2xl text-white md:text-lg justify-self-center hover:font-extrabold mt-1" />
        <a
          href={email}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-base text-white font-extrabold justify-self-center align-self-center align-middle"
        >
          Contact
        </a>
      </button>
    </div>
  );
};


