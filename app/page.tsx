import Image from "next/image";
import HomeButton from "@/app/ui/home_button";
import NewsCard from "./ui/news_card";

export default function Home() {
  return (
    <>
      <section>
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
          <HomeButton>Learn more</HomeButton>
        </div>
      </section>
      <section>
        <header>
          <h2 className="bg-secondary w-full p-4 text-center text-4xl font-bold tracking-widest text-white uppercase lg:text-5xl">
            History
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-y-5 px-10 pt-5 md:grid-cols-2 md:gap-x-13 md:px-15 md:pt-10 lg:grid-cols-3">
          <div className="bg-bg-primary/40 p-5 shadow-[black_0_2px_10px]/15 md:col-span-1 md:m-0 lg:col-span-2">
            <h3 className="text-tertiary mb-5 text-2xl font-bold">
              Archdiocese of Cebu: The Journey of Transformative Faith and Hope
              in the Orient
            </h3>
            <p className="text-justify font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.
            </p>
            <p className="text-justify font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam.
            </p>
            <HomeButton>Read More</HomeButton>
          </div>
          <Image
            src="/History image.png"
            alt="History image"
            width={1000}
            height={1000}
            className="pb-10"
          />
        </div>
      </section>
      <section>
        <header>
          <h2 className="bg-secondary w-full p-4 text-center text-3xl font-bold tracking-widest text-white uppercase lg:text-5xl">
            Demographics
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-y-5 px-15 py-10 *:grid *:h-65 *:grid-cols-1 *:items-end *:bg-cover *:bg-center *:p-15 *:text-center lg:grid-cols-3 lg:gap-x-9 lg:*:h-130">
          <div style={{ backgroundImage: 'url("/demographics1.png")' }}>
            <div>
              <div className="text-tertiary text-[12vw] font-bold tracking-tight text-shadow-(color:--background) text-shadow-[0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px] sm:text-[10vw] md:text-[7vw] lg:text-[4.5vw]">
                10,23,123
              </div>
              <div className="text-3xl font-bold text-white uppercase">
                Catholics
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: 'url("/demographics2.png")' }}>
            <div>
              <div className="text-tertiary text-[12vw] font-bold tracking-tight text-shadow-(color:--background) text-shadow-[0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px] sm:text-[10vw] md:text-[7vw] lg:text-[4.5vw]">
                173
              </div>

              <div className="text-3xl font-bold text-white uppercase">
                Parishes
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: 'url("/demographics3.png")' }}>
            <div>
              <div className="text-tertiary text-[12vw] font-bold tracking-tight text-shadow-(color:--background) text-shadow-[0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px,0_0_5px] sm:text-[10vw] md:text-[7vw] lg:text-[4.5vw]">
                9,999
              </div>

              <div className="text-3xl font-bold text-white uppercase">
                Priests
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2 className="bg-secondary w-full p-4 text-center text-4xl font-bold tracking-widest text-white uppercase lg:text-5xl">
            News Updates
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-10 p-10 text-center md:grid-cols-2 lg:grid-cols-4">
          <NewsCard text="Priest Ordination" img_url="/Priest Ordination.png" />
          <NewsCard
            text="Fiesta Celebration"
            img_url="/Fiesta Celebration.png"
          />
          <NewsCard text="Youth Day" img_url="/Youth Day.png" />
          <NewsCard text="Youth Day" img_url="/Youth Day.png" />
        </div>
      </section>
      <section>
        <header>
          <h2 className="bg-secondary w-full p-4 text-center text-4xl font-bold tracking-widest text-white uppercase lg:text-5xl">
            Connect with us!
          </h2>
        </header>
        <div className="flex"></div>
      </section>
    </>
  );
}
