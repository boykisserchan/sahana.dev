"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const [index, setIndex] = useState(0);
	const [slide, setSlide] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setSlide(false);
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % names.length);
				setSlide(true);
			}, 500);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	const commit = {
		hash: process.env.NEXT_PUBLIC_GIT_HASH,
		message: process.env.NEXT_PUBLIC_GIT_MESSAGE,
	}

	return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-60">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This website is in development.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Go to <Link className={"text-gray-300 underline"} href={"https://dev.sahana.dev"}>dev.sahana.dev</Link> if you want to see it be developed!
          </p>
        </div>
      </main>
    </div>
  );
}
