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
  const floatClasses: Record<string, string> = {
    left: "float-left",
    right: "float-right",
    none: "float-none",
    center: "mx-auto",
  };

  const mdFloatClasses: Record<string, string> = {
    left: "md:float-left",
    right: "md:float-right",
    none: "md:float-none",
    center: "md:mx-auto",
  };
  return (
    <div
      className={`relative mb-5 w-full max-w-xs md:mb-5 md:ml-7 md:max-w-sm ${floatClasses[float] || ""} ${mdFloatClasses[md_float] || ""}`}
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
