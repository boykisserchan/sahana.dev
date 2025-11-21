"use client";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Home() {
	const names = [
		"Sahana",
		"a Web Developer",
		"a hackathon organizer",
		"a silly person :3",
		"someone, somewhere."
	];
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

	return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-16 px-0 bg-white dark:bg-black sm:items-start">
        <div className={"flex flex-col w-full"}>
	        <div className={"flex flex-row w-full"}>
		        <h1 className={"text-3xl font-black float-right"}>👋 Hi, I&apos;m{" "}
			        <span className={`inline-block transform transition-all duration-500 ease-in-out ${
				        slide ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
			        }`}>
				        {names[index]}
			        </span>
						</h1>
		        <p className={"ml-auto text-xl font-light italic"}>goon goon goon goon goon</p>
	        </div>
	        <hr className={"border-t-2 border-white my-4 w-full"}/>
        </div>
      </main>
    </div>
  );
}
