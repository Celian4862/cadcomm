import FloatingImage from "@/app/ui/floating_image";
import content from "./content";

export default function Page() {
  return (
    <section>
      <header>
        <h1 className="text-tertiary mb-10 text-5xl font-black uppercase">
          Previous Bishops of Cebu
        </h1>
      </header>
      {(
        content as Array<{
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
  );
}
