export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 items-end">
        <div className="m-20">
          <p className="text-darker-blue w-100 font-bold dark:text-[#A5B4FC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <h1 className="pt-7 text-8xl font-black">
            <span className="text-dark-blue">Finally</span>
            <br />
            <span className="text-blue">500 Years!</span>
          </h1>
          <button className="mt-7">learn more</button>
        </div>
        <img
          src="Home page background 1.png"
          alt="Home page background"
          className="h-screen"
        />
      </div>
      <header>
        <h2 className="bg-darkest-blue w-full p-4 text-center text-5xl font-bold tracking-widest text-white uppercase">
          History
        </h2>
      </header>
      <div className="grid grid-cols-3 gap-x-13 px-15 pt-10">
        <div className="col-span-2 bg-[#cff6ff]/40 p-5 shadow-[black_0_2px_10px]/15">
          <h3 className="text-darker-blue mb-5 text-2xl font-bold">
            Archdiocese of Cebu: The Journey of Transformative Faith and Hope in
            the Orient
          </h3>
          <p className="text-darker-blue font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <p className="text-darker-blue font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <button>Read More</button>
        </div>
        <img src="History image.png" alt="History image" className="pb-10" />
      </div>
    </>
  );
}
