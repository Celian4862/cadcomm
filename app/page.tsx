import Image from "next/image";
import ReadMore from "./home_ui/ReadMore";
import NewsCard from "./home_ui/NewsCard";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { article } from "./about-us/content";

export default function Home() {
  return (
    <>
      <section>
        <div className="m-10 lg:m-20">
          <div className="font-bold sm:w-100 dark:text-[#A5B4FC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </div>
          <p className="pt-7 text-6xl font-black lg:text-8xl">
            <span className="text-tertiary">Finally</span>
            <br />
            <span className="text-quaternary">500 Years!</span>
          </p>
          <ReadMore />
        </div>
      </section>
      <section>
        <header>
          <h2 className="bg-secondary w-full p-4 text-center text-4xl font-bold tracking-widest text-white uppercase lg:text-5xl">
            History
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-y-5 px-10 pt-5 lg:grid-cols-3 lg:gap-x-5">
          <div className="bg-bg-primary/40 p-5 shadow-[black_0_2px_10px]/15 lg:col-span-2">
            <h3 className="text-tertiary mb-5 text-2xl font-bold">
              Archdiocese of Cebu: The Journey of Transformative Faith and Hope
              in the Orient
            </h3>
            <div className="*:text-justify *:font-medium">
              {article.slice(0, 4).map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <ReadMore href="/about-us/history-timeline#the-journey-of-transformative-faith-and-hope-in-the-orient" />
          </div>
          <Image
            src="/History image.png"
            alt="History image"
            width={500}
            height={500}
            className="mx-auto h-auto w-100 pb-10"
          />
        </div>
      </section>
      <section>
        <header>
          <h2 className="bg-secondary w-full p-4 text-center text-3xl font-bold tracking-widest text-white uppercase lg:text-5xl">
            Demographics
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-y-5 px-15 py-10 *:grid *:h-65 *:grid-cols-1 *:items-end *:bg-cover *:bg-center *:pb-5 *:text-center sm:*:p-15 lg:grid-cols-3 lg:gap-x-9 lg:*:h-130">
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
        <div className="flex justify-center gap-8 py-8">
          <a
            href="https://www.facebook.com/sugboanongsimbahan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <span className="text-4xl text-[#1877F3]">
              <FaFacebookF aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </span>
          </a>
          <a
            href="https://x.com/sugbosimbahan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <span className="text-4xl text-black dark:text-white">
              <FaXTwitter aria-hidden="true" />
              <span className="sr-only">X</span>
            </span>
          </a>
          <a
            href="https://www.tiktok.com/@sugboanongsimbahan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <span className="text-4xl text-black dark:text-white">
              <FaTiktok aria-hidden="true" />
              <span className="sr-only">TikTok</span>
            </span>
          </a>
          <a
            href="https://www.youtube.com/@sugboanongsimbahan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <span className="text-4xl text-[#FF0000]">
              <FaYoutube aria-hidden="true" />
              <span className="sr-only">YouTube</span>
            </span>
          </a>
          <a
            href="https://www.instagram.com/sugboanongsimbahan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span className="text-4xl text-[#E1306C]">
              <FaInstagram aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
