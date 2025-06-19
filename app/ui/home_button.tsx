import Link from "next/link";

export default function ReadMore({
  href = "",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} hover:bg-bg-primary relative my-6 inline-block rounded-4xl border border-solid border-(--foreground) bg-(--background) px-8 py-3 text-xs font-extrabold tracking-widest uppercase shadow-[0_3px_2px_var(--button-shadow)] active:top-0.5 active:shadow-none`}
    >
      Read more
    </Link>
  );
}
