"use client"
import useMousePosition from "@/lib/useMousePosition";
import Image from "next/image";
import { FaLinkedin, FaSquareLetterboxd, FaSquareGithub, FaFileLines } from "react-icons/fa6";

export default function Home() {
  const mousePosition = useMousePosition();
  return (
    <div className="bg-sunflower" >
      <div style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 228, 153, 1), transparent 80%)` }}>
        <main className=" mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 py-12 font-sans md:px-12 md:py-20 lg:px-20 lg:py-0" >
          <div className="lg:flex lg:justify-between lg:gap-6 ">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-5xl font-bold tracking-wide sm:text-6xl font-bold">Evan Speciale</h1>
                <h2 className="mt-3 text-lg tracking-wide sm:text-xl font-bold">Web Developer</h2>
                <div className="mt-4 mr-4">
                  I am a software developer with a passion for finding creative solutions to complex problems. I have four years’ experience as a full stack web developer including modern front end development libraries (incl. React, Next.js, Tailwind), back-end services (incl. Express, MySQL, MongoDB), and CMS (Drupal, Hygraph, WordPress). I am seeking a front end development position where I can apply my skills and creativity to a growing, modern application.
                </div>
                <nav className="nav hidden lg:block" aria-label='jump to section links'></nav>
              </div>
              <ul className="ml-1 mt-8 flex items-center text-dirt" aria-label='social media links'>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block  hover:text-soil" href="https://github.com/EvanSpeciale" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                    <span className="sr-only">GitHub</span>
                    <FaSquareGithub size={24} />
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-soil" href=" https://www.linkedin.com/in/evan-speciale-81b00396/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin size={24} />
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-soil" href="https://www.letterboxd.com/cool_normal" target="_blank" rel="noreferrer noopener" aria-label="Letterboxd (opens in a new tab)" title="Letterboxd">
                    <span className="sr-only">Letterboxd</span>
                    <FaSquareLetterboxd size={24} />
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-soil" href="/es_resume_2025.pdf" target="_blank" rel="noreferrer noopener" aria-label="Resume PDF (opens in a new tab)" title="Resume">
                    <span className="sr-only">Resume PDF</span>
                    <FaFileLines size={22} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-24 lg:w-3/5 lg:py-24">
              <ul className="flex flex-col">
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://deadwest.art/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4 font-bold">Dead West Store</h2>
                      <div className="flex gap-4">
                        <Image src='/deadwest-2.png' width={1275} height={809} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Ecommerce site built with Next.js, React, GraphQL, and Tailwind</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://github.com/EvanSpeciale/jsnotebook-es">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4 font-bold">jsNotebook</h2>
                      <div className="flex gap-4">
                        <Image src='/jsnotebook-es.png' width={1255} height={870} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Browser-based interactive code and markup notebook with in-browser code bundling and execution. Built with React, TypeScript, and esbuild</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://raindelay.vercel.app/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4 font-bold">raindelay [WIP]</h2>
                      <div className="flex gap-4">
                        <Image src='/raindelay.png' width={1799} height={1239} alt='screenshot of raindelay app' className="w-1/2" />
                        <div className="w-1/2 text-lg">For when you&apos;re watching the game and you&apos;re like &quot;hey what&apos;s the weather like there?&quot; Just messing around with Next.js, Tailwind, and Tanstack libraries</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 my-4">
                  <div>
                    <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4 font-bold">Experience</h2>
                    <div className="flex gap-4 pb-4 mb-4">
                      <div className="w-3/8">
                        <div className="text-xl font-bold mb-2">Web Developer</div>
                        <div className="text-md mb-2">The College at Arizona State University</div>
                        <div className="text-xs italic">July 2023 - Present</div>
                      </div>
                      <div className="w-5/8 text-sm">
                        <ul className="flex flex-col gap-4 list-(--list-marker)">
                          <li>Developed and maintained the Drupal distribution for the largest college at ASU over 50+ sites</li>
                          <li>Developed a platform for smaller faculty sites with a React front end and a headless Drupal back end</li>
                          <li>Worked to align The College sites with WCAG 2.2 Accessibility Guidelines</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-4 mb-4">
                      <div className="w-3/8">
                        <div className="text-xl font-bold mb-2">Web Developer</div>
                        <div className="text-md mb-2">BIO5 at The University of Arizona</div>
                        <div className="text-xs italic">August 2021 - July 2023</div>
                      </div>
                      <div className="w-5/8 text-sm">
                        <ul className="flex flex-col gap-4 list-(--list-marker)">
                          <li>Developed and maintained the institution’s primary Drupal site (BIO5.org)</li>
                          <li>Oversaw the migration of the extended network of BIO5 sites to a cloud platform.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main >
      </div>
    </div>
  );
}
