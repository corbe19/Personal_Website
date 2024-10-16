import React from 'react';
import { Metadata } from 'next'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import corbe from '../public/Corbett,Luke.jpg';
import croppedCorbe from '../public/croppedCorbe.jpg';
import newCorbe from '../public/newCorbe.png';

export const metadata: Metadata = {
  title: 'Luke Corbett',
  description: 'Personal website',
}

export default function Home() {
  return (
    <div>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Luke Corbett</h1>
            <ul className="flex items-center">             
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mr-8" 
                href="#">LinkedIn</a>
              </li>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Luke Corbett</h2>
            <h3 className="text-2xl py-2">Software Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Something somthing something...</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/lukewcorbett/" className="cursor-pointer"><AiFillLinkedin /></a>
            <a href="https://github.com/corbe19" className="cursor-pointer"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20">
            <Image src={croppedCorbe} alt="Luke Corbett" className='rounded-full w-80 h-80' />
          </div>
        </section>

        <section>
          <div>

          </div>
        </section>

      </main>
    </div>
  );
}