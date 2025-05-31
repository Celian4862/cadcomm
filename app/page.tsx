import Image from "next/image";
import ReadMore from "@/app/ui/home_button";
import NewsCard from "./ui/news_card";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

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
              <p>
                The beginnings of the Archdiocese of Cebu began with the arrival
                of Ferdinand Magellan&apos;s fleet in the town of Zubu, ruled by
                Rajah Humabon and his Queen. The encounter between two different
                cultures resulted in the baptism of Humabon&apos;s 800 subjects
                and merited for the Queen a gift from the conquistadores--a
                small statue of the Child Jesus in kingly regalia, the Santo
                Niño.
              </p>
              <p>
                The Spanish foothold was resisted by Lapulapu, the chieftain of
                Mactan, and Magellan perished in what was a traditional rivalry
                between two chieftains. The defeat of the Spaniards proved the
                superiority of Lapulapu and pushed Cebuanos back into paganism.
              </p>
              <p>
                The expedition of Miguel Lopez de Legazpi in 1567 marked the
                evangelization of Cebu and the Philippine islands. This time,
                the Cebuanos were determined to fight but Legazpi too, had come
                prepared and had the village bombarded before coming ashore for
                crown and cross.
              </p>
              <p>
                The Spanish soldier Juan de Camus found the image of the Santo
                Niño and the Cebuanos&apos; stillborn faith among the ashes and
                debris. But the cross was soon to be planted again in their
                village as a reminder that while the Cebuanos resisted the
                authority of the Spaniards, their hearts had fallen for the
                smile of the Little Child who holds the world in his hand.
              </p>
            </div>
            <ReadMore />
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
        <div className="flex justify-center gap-8 py-8">
          <a
            href="https://facebook.com"
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
            href="https://x.com"
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
            href="https://tiktok.com"
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
            href="https://youtube.com"
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
            href="https://instagram.com"
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
