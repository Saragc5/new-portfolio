import {FcOpenedFolder } from 'react-icons/fc'
import { FaGithubSquare } from 'react-icons/fa'



export default function Project({ title, description, link }) {
  const defaultLink = "#"; // Valor por defecto si link es undefined

  return (
    <main>
      <div className=" w-72 h-80 border-2 rounded-lg border-yellow-200 overflow-hidden mb-6">
        <div className="flex justify-between m-3">
          <h5>
            <FcOpenedFolder className="text-6xl" />
          </h5>
          <a
            href={link ?? defaultLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-6xl" />
          </a>
        </div>
        <h2 className="text-2xl mb-3 p-2">{title}</h2>
        <p className="w-full h-auto md:h-36 p-4">{description}</p>
      </div>
    </main>
  );
}
