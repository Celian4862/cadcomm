export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 items-end">
        <div className="m-20">
          <p className="w-100 font-bold text-[#242C5B] dark:text-[#A5B4FC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <h1 className="pt-7 text-8xl font-black">
            <span className="text-[#0E227A]">Finally</span>
            <br />
            <span className="text-[#1957C4]">500 Years!</span>
          </h1>
          <button className="mt-7">learn more</button>
        </div>
        <img
          src="Home page background 1.png"
          alt="Home page background"
          className="h-screen"
        />
      </div>
    </>
  );
}
