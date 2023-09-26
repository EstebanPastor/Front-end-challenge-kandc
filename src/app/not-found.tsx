import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="h-64 text-center opacity-80 ">
      <p>This case study does not exists</p>
      <Link href="/" className=" opacity-80 uppercase underline">
        ← Back to list
      </Link>
    </section>
  );
}
