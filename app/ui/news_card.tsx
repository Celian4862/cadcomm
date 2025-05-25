import HomeButton from "@/app/ui/home_button";

export default function NewsCard({
  text,
  img_url,
}: {
  text: string;
  img_url: string;
}) {
  return (
    <div className="" style={{ backgroundImage: `url("${img_url}")` }}>
      <div className="p-5 text-3xl font-bold uppercase">{text}</div>
      <HomeButton>Read more</HomeButton>
    </div>
  );
}
