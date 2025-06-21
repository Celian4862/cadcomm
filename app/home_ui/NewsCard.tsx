import ReadMore from "@/app/home_ui/ReadMore";

export default function NewsCard({
  text,
  img_url,
}: {
  text: string;
  img_url: string;
}) {
  return (
    <div
      className="relative flex h-120 flex-col justify-end bg-cover bg-center"
      style={{ backgroundImage: `url("${img_url}")` }}
    >
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <div className="p-5 text-center text-3xl font-bold text-white uppercase">
          {text}
        </div>
      </div>
      <div className="p-5">
        <ReadMore />
      </div>
    </div>
  );
}
