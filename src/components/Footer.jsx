import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import {linkedin, github } from './data.jsx'

export default function Footer() {
  return (
    <>
      <hr />
      <div className="container flex justify-between items-center  ">
        <p className=" align-baseline">
          &copy; {new Date().getFullYear()} Sara&apos;s Portfolio
        </p>
        <div className=" container w-auto h-full flex justify-center items-center gap-2 mt-4 ">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className=" text-5xl w-7 h-full self-center" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className=" text-5xl w-7 h-full self-center" />
          </a>
        </div>
      </div>
    </>
  );
}
