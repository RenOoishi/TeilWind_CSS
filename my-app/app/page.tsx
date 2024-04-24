import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="antialiased overflow-x-hidden">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-8 px-4 sm:px-0">
          <a href="" aria-label="TailwindTemplates logo" className="w-1/4 text-primary font-bold text-2xl flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 512 512" version="1.1">
                  <g>
                  <path fill="#FF2773" d="M387.719,157c-0.007-40.436-32.748-73.184-73.192-73.192c-24.963,0-47.074,12.538-60.238,31.618l17.901,12.392 c9.329-13.449,24.76-22.233,42.337-22.233c14.238,0.008,27.028,5.736,36.357,15.058c9.32,9.336,15.05,22.119,15.057,36.356 c-0.007,14.229-5.736,27.011-15.057,36.348c-9.329,9.32-22.119,15.049-36.357,15.057H31.659v21.778h282.868 C354.972,230.175,387.712,197.419,387.719,157z"/>
                  <path fill="#FF2773" d="M224.508,137.302c-0.008-25.19-20.429-45.587-45.596-45.587c-14.53-0.008-27.548,6.826-35.852,17.406 l17.114,13.472c4.396-5.566,11.1-9.101,18.739-9.101c13.148,0.016,23.793,10.653,23.818,23.809 c-0.008,6.614-2.65,12.506-6.981,16.854c-4.347,4.323-10.231,6.964-16.837,6.972H66.472v21.778h112.44 C204.087,182.898,224.499,162.493,224.508,137.302z"/>
                  <path fill="#FF2773" d="M316.811,310.656H64.903v21.778h251.908c10.256,0.008,19.43,4.12,26.158,10.832 c6.712,6.728,10.824,15.903,10.832,26.166c-0.008,10.246-4.12,19.421-10.832,26.15c-6.72,6.704-15.902,10.824-26.158,10.832 c-11.831-0.008-22.282-5.509-29.083-14.139l-17.113,13.465l-0.008-0.008c10.727,13.66,27.482,22.46,46.205,22.46 c32.472-0.008,58.76-26.304,58.768-58.759C375.571,336.968,349.283,310.664,316.811,310.656z"/>
                  <path fill="#FF2773" d="M459.968,256.837H0v21.778h459.968c8.387,0.008,15.887,3.373,21.389,8.866 c5.501,5.517,8.857,13.009,8.865,21.395c-0.008,8.394-3.364,15.895-8.865,21.396c-5.502,5.494-13.002,8.85-21.389,8.858 c-9.677-0.008-18.21-4.502-23.792-11.571l-17.114,13.456h-0.008c9.491,12.101,24.345,19.893,40.914,19.893 c28.742-0.008,52.024-23.29,52.032-52.032C511.992,280.143,488.718,256.845,459.968,256.837z"/>
                  </g>
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
