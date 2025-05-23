import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/Home page background 1.png"
        alt="Home page background"
        width={300}
        height={300}
        className="absolute top-0 right-0 -z-1 h-auto w-full opacity-30 md:h-screen md:w-auto lg:opacity-100"
      />
      <div className="lg:grid lg:h-screen lg:grid-cols-1 lg:items-end">
        <div className="m-10 lg:m-20">
          <p className="font-bold sm:w-100 dark:text-[#A5B4FC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <p className="pt-7 text-6xl font-black lg:text-8xl">
            <span className="text-tertiary">Finally</span>
            <br />
            <span className="text-quaternary">500 Years!</span>
          </p>
          <button className="mt-7">learn more</button>
        </div>
      </div>
      <header>
        <h2 className="bg-secondary w-full p-4 text-center text-4xl font-bold tracking-widest text-white uppercase lg:text-5xl">
          History
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-y-5 px-10 pt-5 md:grid-cols-2 md:gap-x-13 md:px-15 md:pt-10 lg:grid-cols-3">
        <div className="bg-bg-primary/40 p-5 shadow-[black_0_2px_10px]/15 md:col-span-1 md:m-0 lg:col-span-2">
          <h3 className="text-tertiary mb-5 text-2xl font-bold">
            Archdiocese of Cebu: The Journey of Transformative Faith and Hope in
            the Orient
          </h3>
          <p className="text-justify font-medium">
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
          <p className="text-justify font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <button>Read More</button>
        </div>
        <Image
          src="/History image.png"
          alt="History image"
          width={1000}
          height={1000}
          className="pb-10"
        />
      </div>
      <header>
        <h2 className="bg-secondary w-full p-4 text-center text-3xl font-bold tracking-widest text-white uppercase lg:text-5xl">
          Demographics
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-y-5 px-15 py-10 *:h-65 lg:grid-cols-3 lg:gap-x-9 lg:*:h-130">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: 'url("/demographics1.png")' }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: 'url("/demographics2.png")' }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: 'url("/demographics3.png")' }}
        ></div>
      </div>
    </>
  );
}
