import about from '../img/vertical.jpg'
import about2 from '../img/person.jpeg'
import AboutMeText from './AboutMeText';
import { aboutData } from './data'



export default function About() {

  const isDesktop = window.innerWidth > 768;

  return (
    <main className="grid place-items-center xl:flex container gap-4 mb-10 ">
      <aside className="w-64 h-auto xl:w-full xl:h-full md:mt-8 overflow-hidden ">
        {isDesktop ? (
          <img
            src={about}
            alt="Personal image"
            className="w-full h-full md:w-full md:h-full mt-8 "
          />
        ) : (
          <img
            src={about2}
            alt="Personal image"
            className="w-full h-full md:w-full md:h-full mt-8 "
          />
        )}
      </aside>
      <div className="p-2">
        <h1 className="text-xl md:text-2xl font-bold mt-8 text-center md:text-left">
          About me 🦸‍♀️
        </h1>
        {aboutData.map(
          ({ id, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
            return (
              <AboutMeText
                key={id}
                paragraph1={paragraph1}
                paragraph2={paragraph2}
                paragraph3={paragraph3}
                paragraph4={paragraph4}
              />
            );
          }
        )}
      </div>
    </main>
  );
}


