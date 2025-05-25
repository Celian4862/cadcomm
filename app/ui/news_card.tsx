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
      <div>{text}</div>
      <HomeButton>Read more</HomeButton>
    </div>
  );
}
