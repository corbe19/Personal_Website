import React from 'react';
import { Metadata } from 'next'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import Image from 'next/image';
import croppedCorbe from '../public/croppedCorbe.jpg';
import newCorbe from '../public/newCorbe.png';


export const metadata: Metadata = {
  title: 'Luke Corbett',
  description: 'Personal website',
}

export default function Home() {
  return (
    <div>

      <main className="bg-white px-10 md:px-20 lg:px-40">
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
          <div className="text-center p-1">
            <h2 className="text-5xl py-1 text-teal-600 font-semibold md:text-6xl">Luke Corbett</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Eager to apply growing skills in real-world projects and contribute to innovative tech solutions.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/lukewcorbett/" className="cursor-pointer"><AiFillLinkedin /></a>
            <a href="https://github.com/corbe19" className="cursor-pointer"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-10">
            <Image src={croppedCorbe} alt="Luke Corbett" className='rounded-full w-80 h-80' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl pt-6'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Here are a few projects I have worked on:
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={newCorbe} width={100} height={100} alt='Project1'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Project 1</h3>
              <p className='py-2'>Project description</p>
              <h4 className="py-4 text-teal-600">Technologies used:</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={newCorbe} width={100} height={100} alt='Project1'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Project 1</h3>
              <p className='py-2'>Project description</p>
              <h4 className="py-4 text-teal-600">Technologies used:</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={newCorbe} width={100} height={100} alt='Project1'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Project 1</h3>
              <p className='py-2'>Project description</p>
              <h4 className="py-4 text-teal-600">Technologies used:</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}