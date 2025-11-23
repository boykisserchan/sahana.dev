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
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-16 px-0 bg-white dark:bg-black sm:items-start">
        <header className={"flex flex-col w-full"}>
	        <div className={"flex flex-row w-full"}>
		        <h1 className={"text-3xl font-black float-right"}>Hi, I&apos;m{" "}
			        <span className={`inline-block transform transition-all duration-500 ease-in-out ${
				        slide ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
			        }`}>
				        {names[index]}
				        {" "}
				        <a href={"https://astracelestine.nekoweb.org/"} target={"_blank"} >
					        :3
				        </a>
			        </span>
						</h1>
		        <a href={`https://github.com/boykisserchan/sahana.dev/commit/${commit.hash}`} className={"ml-auto text-md font-light italic underline self-end-safe"}>{commit.hash + " " + commit.message}</a>
	        </div>
	        <hr className={"border-t-2 border-white my-4 w-full"}/>
        </header>
      </main>
    </div>
  );
}
