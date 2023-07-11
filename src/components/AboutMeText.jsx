
export default function AboutMeText({ id, paragraph1, paragraph2, paragraph3, paragraph4}) {
  return (
    <div>
      <p className=" text-base sm:text-xl indent-3 text-justify w-full mt-10">
        {paragraph1}
      </p>
      <p className="text-base sm:text-xl indent-3 text-justify w-full mt-10">
        {paragraph2}
      </p>
      <p className="text-base sm:text-xl indent-3 text-justify w-full mt-10">
        {paragraph3}
      </p>

      <p className=" text-lg indent-3 text-justify w-full mt-10">
        {paragraph4}
      </p>
    </div>
  );
}
