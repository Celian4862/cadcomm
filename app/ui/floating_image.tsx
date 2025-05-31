import Image from "next/image";

export default function FloatingImage({
  src,
  alt_text,
  float = "center",
  md_float = "right",
}: {
  src: string;
  alt_text: string;
  float?: string;
  md_float?: string;
}) {
  return (
    <div
      className={`float-${float} relative mx-auto mb-5 w-full max-w-xs md:float-${md_float} md:mb-5 md:ml-7 md:max-w-sm`}
    >
      <Image
        src={`/${src}`}
        alt={alt_text}
        width={500}
        height={500}
        className="h-auto w-full rounded-lg shadow-lg"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
