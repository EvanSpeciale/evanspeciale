"use client"
import useMousePosition from "@/lib/useMousePosition";
import Image from "next/image";
import { FaLinkedin, FaSquareLetterboxd, FaSquareGithub } from "react-icons/fa6";

export default function Home() {
  const mousePosition = useMousePosition();
  return (
    <div className="bg-sunflower" >
      <div style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 228, 153, 1), transparent 80%)` }}>
        <main className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0" >
          <div className="font-mono lg:flex lg:justify-between lg:gap-4 ">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-5xl font-bold tracking-wide sm:text-6xl ">Evan Speciale</h1>
                <h2 className="mt-3 text-lg tracking-wide sm:text-xl">Web Developer</h2>
                <div className="mt-4 mr-4">
                  <Image src='/pet-raccoon.jpg' height={667} width={1000} alt='picture of me, a raccoon' style={{ width: 'full', aspectRatio: '4/3', objectFit: 'cover' }} />
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
              </ul>
            </div>
            <div className="pt-24 lg:w-1/2 lg:py-24">
              <ul className="flex flex-col">
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://deadwest-v4.vercel.app/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4">Dead West Store</h2>
                      <div className="flex gap-4">
                        <Image src='/deadwest.png' height={801} width={1279} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Ecommerce site made with Next.js, React, Hygraph, and Snipcart</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://deadwest-v4.vercel.app/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4">Dead West Store</h2>
                      <div className="flex gap-4">
                        <Image src='/deadwest.png' height={801} width={1279} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Ecommerce site made with Next.js, React, Hygraph, and Snipcart</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://deadwest-v4.vercel.app/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4">Dead West Store</h2>
                      <div className="flex gap-4">
                        <Image src='/deadwest.png' height={801} width={1279} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Ecommerce site made with Next.js, React, Hygraph, and Snipcart</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://deadwest-v4.vercel.app/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4">Dead West Store</h2>
                      <div className="flex gap-4">
                        <Image src='/deadwest.png' height={801} width={1279} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Ecommerce site made with Next.js, React, Hygraph, and Snipcart</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="pb-8 border-b-4 border-soil">
                  <a href="https://deadwest-v4.vercel.app/">
                    <div >
                      <h2 className="mt-3 text-3xl tracking-wide sm:text-4xl mb-4">Dead West Store</h2>
                      <div className="flex gap-4">
                        <Image src='/deadwest.png' height={801} width={1279} alt='screenshot of Dead West Store site' className="w-1/2" />
                        <div className="w-1/2 text-lg">Ecommerce site made with Next.js, React, Hygraph, and Snipcart</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </main >
      </div>
    </div>
  );
}
