import Image from "next/image";
import FloatingImage from "@/app/ui/floating_image";

export default function Page() {
  return (
    <section className="mt-5">
      <header className="text-center">
        <h1 className="*:font-black *:uppercase">
          <div className="text-tertiary text-xl sm:text-3xl">
            The Re-designed Coat of Arms of the
          </div>
          <div className="text-quaternary text-3xl sm:text-5xl">
            Roman Catholic Archdiocese of the Holy Name of Jesus of Cebu
          </div>
        </h1>
      </header>
      <Image
        src="/favicon.ico"
        alt="Coat of Arms"
        width={300}
        height={300}
        className="mx-auto mt-10 mb-5"
      />
      <p>
        Heraldry has been a significant part of the Catholic Church&apos;s
        artistic patrimony. It stems from its original utilitarian purpose of
        &quot;visual identification&quot; in times of battle. This was
        especially important since the combatants, who were oftentimes nobles
        and aristocrats, were dressed from head to foot in armor and could not
        distinguish each other by their faces. A large tunic or coat,
        embroidered and vividly colored, was usually worn over armor, so people
        could exactly identify who the wearer was, even when his face was
        obscured or from a distance—hence the origin of the term &quot;coat of
        arms.&quot;
      </p>
      <p>
        This tradition was later practiced by the Church so people could easily
        identify their pastors, especially when accurate images and photographs
        were out of the question. The martial tradition of creating &quot;coats
        of arms&quot; developed into a science called &quot;Heraldry,&quot;
        governed by customs and conventions, especially since coats of arms
        proliferated, due to social convention and practical need.
      </p>
      <p>
        The ecclesiastical arms of the Roman Catholic Archdiocese of Cebu was
        redesigned by a professional Italian Heraldic artist, Sig. Marco
        Foppoli, as commissioned by the priests-secretaries of the Office of the
        Archbishop in the first quarter of 2021, with the facilitation and
        benefaction of Rev. Msgr. Jan T Limchua.
      </p>
      {/* Red Part */}
      <div className="my-10 grid gap-y-10 sm:grid-cols-2 sm:items-center">
        <Image
          src="/coat-of-arms-1.png"
          alt="Coat of Arms - Red Part"
          width={500}
          height={500}
          className="mx-auto w-50"
        />
        <div>
          <p>
            The upper field of red represents the{" "}
            <strong>Sñr. Sto. Niño de Cebu</strong> (Bato Balani sa Gugma, or
            Magnet of Love), whose very image, which at first was a gift during
            the First Baptism five hundred (500) years ago, has now become the
            symbol of Faith in Cebu.
          </p>
          <p>
            The field of red also honors the Visayan Proto-Martyr,{" "}
            <strong>San Pedro Calungsod</strong>.
          </p>
        </div>
      </div>
      {/* Lions */}
      <div className="my-10 grid gap-y-10 sm:grid-cols-2 sm:items-center">
        <Image
          src="/coat-of-arms-2.png"
          alt="Coat of Arms - Lions"
          width={500}
          height={500}
          className="order-1 mx-auto w-50 bg-white sm:order-2"
        />
        <div className="order-2 sm:order-1">
          <p>
            On this same field are two lions: the first lion, in gold, is
            emblazoned with the coat of arms of the Kingdom of Castile; while
            the other, in silver, is emblazoned with the personal coat of arms
            of Ferdinand Magellan—these two elements were present in the
            original coat of arms granted to the Archdiocese. Both refer to the{" "}
            <strong>
              Hispanic origin and nascent beginning of Catholicism in Cebu, the
              Cradle of Christianity in the Philippines
            </strong>
            .
          </p>
        </div>
      </div>
      {/* Monogram */}
      <div className="my-10 grid gap-y-10 sm:grid-cols-2 sm:items-center">
        <Image
          src="/coat-of-arms-3.png"
          alt="Coat of Arms - Monogram"
          width={500}
          height={500}
          className="mx-auto w-50"
        />
        <div>
          <p>
            These two lions support the stylized monogram of the{" "}
            <strong>
              Holy Name of Jesus inside a stylized image of the sun—symbolizing
              Christ as the light of the world
            </strong>
            . It is deliberately placed at the top center of the arm,
            representing the titular of the Archdiocese. It also recalls the
            life and ministry of Jesus in the words of St. Paul (Letter to the
            Philippians): “…he humbled himself, becoming obedient to death, even
            death on a cross. Because of this, God greatly exalted him and
            bestowed on him the name that is above every name, that at the name
            of Jesus every knee should bend, of those in heaven and on earth and
            under the earth, and every tongue confess that Jesus Christ is Lord,
            to the glory of God the Father.” (Phil. 2:7-11)
          </p>
        </div>
      </div>
      {/* Our Lady */}
      <div className="my-10 grid gap-y-10 sm:grid-cols-2 sm:items-center">
        <Image
          src="/coat-of-arms-4.png"
          alt="Coat of Arms - Our Lady"
          width={500}
          height={500}
          className="order-1 mx-auto w-50 sm:order-2"
        />
        <div className="order-2 sm:order-1">
          <p>
            The lower field of blue symbolizes{" "}
            <strong>
              Our Lady and her motherly mantle of love and compassion for the
              Cebuano faithful
            </strong>{" "}
            as also portrayed by the monogram "Auspice Maria" (Under the
            Protection of Mary) with a gold crown (above), a silver crescent
            (below), and gold gloriole (around the monogram).
          </p>
          <p>
            This imagery specifically refers to her image and title,{" "}
            <strong>Our Lady of Guadalupe de Cebu</strong>, through whose
            intercession, and by God&apos;s grace flowing from above, has saved
            Cebu from the cholera epidemic of 1902.
          </p>
          <p>
            On 16 July 2006, Virgen de Guadalupe de Cebu was canonically crowned
            by the authority of Pope Benedict XVI as{" "}
            <strong>Patroness of the Archdiocese of Cebu</strong>.
          </p>
        </div>
      </div>
      {/* Devotion to Virgin Mary */}
      <div className="my-10 grid gap-y-10 sm:grid-cols-2 sm:items-center">
        <Image
          src="/coat-of-arms-5.png"
          alt="Coat of Arms - Devotion to Virgin Mary"
          width={500}
          height={500}
          className="mx-auto w-50"
        />
        <div>
          <p>
            The upward, arrow tip-like shape of the blue field can be understood
            as{" "}
            <strong>
              a reminder to the Cebuano faithful that a deep devotion to the
              Virgin Mary inevitably leads to a greater love for her Divine Son,
              Our Lord
            </strong>
            .
          </p>
        </div>
      </div>
      {/* Motto of the Archdiocese */}
      <div className="my-10 grid gap-y-10 sm:grid-cols-2 sm:items-center">
        <Image
          src="/coat-of-arms-6.png"
          alt="Coat of Arms - Motto of the Archdiocese"
          width={500}
          height={500}
          className="order-1 mx-auto w-50 bg-white sm:order-2"
        />
        <div className="order-2 sm:order-1">
          <p>
            The entire shield is surmounted by the conventional heraldic
            elements identifying it to be the coat of arms of an Archdiocese,
            namely a Miter, and the crossed Crozier and Archiepiscopal Cross.
          </p>
          <p>
            Written on a scroll, below the arms, is the{" "}
            <strong>Motto of the Archdiocese</strong>: &quot;Sanctum Nomen
            Eius,&quot; which means{" "}
            <strong>&quot;Holy is His Name,&quot;</strong> taken from
            Mary&apos;s Magnificat (Luke 1:49).
          </p>
        </div>
      </div>
    </section>
  );
}
