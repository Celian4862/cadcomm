import Image from "next/image";
import FloatingImage from "@/app/ui/floating_image";
import { previous_bishops, suroysaysay, article } from "./content";

export default function Page() {
  return (
    <>
      <section>
        <header>
          <h1 className="text-tertiary mb-10 text-5xl font-black uppercase">
            Previous Bishops of Cebu
          </h1>
        </header>
        {(
          previous_bishops as Array<{
            name: string;
            image: string;
            text: string | string[];
          }>
        ).map((item, index: number) => (
          <section className="mb-15" key={index}>
            <header>
              <h2 className="text-tertiary mb-5 text-5xl font-black uppercase">
                {item.name}
              </h2>
            </header>
            <FloatingImage src={item.image} alt={item.name} />
            {Array.isArray(item.text) ? (
              item.text.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))
            ) : (
              <p>{item.text}</p>
            )}
          </section>
        ))}
      </section>
      <section>
        <header>
          <h1 className="text-tertiary mb-10 text-4xl font-black uppercase md:text-5xl">
            <div className="text-tertiary">Suroysaysay sa</div>
            <div className="text-quaternary">Sugboanong Simbahan</div>
          </h1>
        </header>
        <section className="mb-15">
          <p>
            Short Discription About Suroysaysay sa Sugboanong Simbahan Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam.Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincLorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tinc
          </p>
          <div className="grid grid-cols-1 gap-x-1 gap-y-5 md:grid-cols-2">
            {(
              suroysaysay as Array<{
                title: string;
                image: string;
                alt: string;
              }>
            ).map((item, index: number) => (
              <div key={index}>
                <Image
                  src={`/${item.image}`}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-[90%]"
                />
                <h2 className="text-tertiary mt-1 text-2xl leading-10 font-bold tracking-wide capitalize">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section>
        <header
          id="the-journey-of-transformative-faith-and-hope-in-the-orient"
          className="mb-3"
        >
          <h1 className="font-extrabold uppercase">
            <div className="text-tertiary text-4xl md:text-5xl">
              Archdiocese of Cebu:
            </div>
            <div className="text-quaternary text-2xl md:text-3xl">
              The Journey of Transformative Faith and Hope in the Orient
            </div>
          </h1>
        </header>
        <FloatingImage src="History image.png" alt="History image" />
        {article.map((paragraph: string, index: number) => (
          <p key={index} className="mb-5">
            {paragraph}
          </p>
        ))}
      </section>
    </>
  );
}
