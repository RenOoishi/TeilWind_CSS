import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="antialiased overflow-x-hidden">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-8 px-4 sm:px-0">
          <a href="" aria-label="TailwindTemplates logo" className="w-1/4 text-primary font-bold text-2xl flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 375 375" version="1.0">
                  <path fill="#FF2773" d=" 0c-36.07 0-65.625 29.555-65.625 65.625h37.5c0-16.43 11.695-28.125 28.125-28.125S262.5 49.195 262.5 65.625 250.805 93.75 234.375 93.75H0v37.5h234.375c36.07 0 65.625-29.555 65.625-65.625S270.445 0 234.375 0ZM0 168.75v37.5h300c22.316 0 37.5 15.184 37.5 37.5 0 22.316-15.184 37.5-37.5 37.5-22.316 0-37.5-15.184-37.5-37.5H225c0 41.434 33.566 75 75 75s75-33.566 75-75-33.566-75-75-75Zm0 75v37.5h121.875c16.43 0 28.125 11.695 28.125 28.125S138.305 337.5 121.875 337.5 93.75 325.805 93.75 309.375h-37.5c0 36.07 29.555 65.625 65.625 65.625s65.625-29.555 65.625-65.625-29.555-65.625-65.625-65.625Zm0 0"/>
                </svg>
              </div>
            <h1 className="text-2xl font-bold hidden sm:block">TeilwindTemplate</h1>  
          </a>
          <div className="w-2/4 hidden lg:block">
            <ul className="grid grid-cols-4 gap-4 text-center text-ui-primary">
                <li>
                    <a href="https://tailwindtemplates.io/templates" className="hover:opacity-75">Templates</a>
                </li>
                <li>
                    <a href="https://www.knowies.com/collections/77d247ce-14fd-11eb-91a4-5616ea45b6fe" target="_blank" className="hover:opacity-75" rel="noopener">Resources</a>
                </li>
                <li>
                    <a href="https://tailwindtemplates.io/blog" className="hover:opacity-75">Blog
                    </a>
                </li>
                <li>
                    <a href="https://tailwindtemplates.io/about" className="hover:opacity-75">About</a>
                </li>
            </ul>
          </div>
        </nav>
      </div>


      <div className="container mx-auto px-6 mt-16">
        <div className="h-96 w-full bg-gray-100 mb-24 rounded-2xl shadow-xl bg-cover bg-center"></div>
        <div className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto">
          <div>
            <div className="bg-blue-100 inline-block py-1 px-4 rounded-xl mb-6">
              <p className="text-blue-500 font-bold">Update</p>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold">
              TailwindTemplates v2 is here
            </h1>
          </div>

          <section className="mt-10 mb-32">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-ui-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p> 1 min read</p>
              </div>
              <div className="flex">
                <a className="mr-2" href="https://twitter.com/intent/tweet?text=TailwindTemplates v2 is here&url=https://tailwindtemplates.io/blog/tailwindtemplates-v2-is-here" target="_blank">
                  <svg width="24" height="24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a className="mr-2" href="https://www.facebook.com/sharer/sharer.php?u=https://tailwindtemplates.io/blog/tailwindtemplates-v2-is-here" target="_blank">
                  <svg width="24" height="24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a className="mr-2" href="https://www.linkedin.com/shareArticle?mini=true?url=https://tailwindtemplates.io/blog/tailwindtemplates-v2-is-here&title=TailwindTemplates v2 is here&summary=tailwindtemplates.io&source=TailwindTemplates" target="_blank">
                  <svg width="24" height="24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <div>
                <p className="mb-6 leading-relaxed">TailwindTemplates V2 is finally here! Our focus for TailwindTemplates v2 is to bring open-source design systems to Tailwindcss. Each design system has a detailed guideline to provide consistency and coherence within a user interface.</p>
              </div>
              <div className="text-2xl">
                <h3 className="mb-6">What to expect?</h3>
              </div>
              <div>
                <p className="mb-6 leading-relaxed">Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system.&nbsp;</p>
              </div>
              <div className="text-2xl">
                <h3 className="mb-6">Not only templates</h3>
              </div>
              <div>
                <p className="mb-6 leading-relaxed">We are planning to bring more tailwind and web development-related content such as videos, blog posts, tutorials and news.&nbsp;</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-primary">

      </div>
    </main>
  );
}
