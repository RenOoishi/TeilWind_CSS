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
            <h1 className="text-2xl font-bold hidden sm:block">TeilwindTemplates</h1>  
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
                  <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="Black" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a className="mr-2" href="https://www.facebook.com/sharer/sharer.php?u=https://tailwindtemplates.io/blog/tailwindtemplates-v2-is-here" target="_blank">
                  <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a className="mr-2" href="https://www.linkedin.com/shareArticle?mini=true?url=https://tailwindtemplates.io/blog/tailwindtemplates-v2-is-here&title=TailwindTemplates v2 is here&summary=tailwindtemplates.io&source=TailwindTemplates" target="_blank">
                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z" stroke-linecap="round" stroke-linejoin="round"/>
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
        <footer className="mx-auto container px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-3 px-6 lg:px-0 gap-4">
            <div className="text-white">
              <h1 className="font-bold text-lg text-white">About</h1>
              <ul className="space-y-1">
                <li><a href="http://j-hiz.com" className="hover:text-secondary-lighter" target="_blank" rel="noopener">Me</a></li>
                <li><a href="o-ren-2409@occ.co.jp">Contact</a></li>
                <li><a href="https://tailwindtemplates.io/disclaimer">Disclaimer</a></li>
              </ul>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-lg text-white">Resources</h1>
              <ul className="space-y-1">
                <li><a href="https://www.knowies.com/collections/77d247ce-14fd-11eb-91a4-5616ea45b6fe" rel="noopener" target="_blank">Amazing tools</a></li>
                <li><a href="https://tailwindtemplates.io/blog">Blog</a></li>
              </ul>
            </div>
            <div className="text-white">
              <div className="mt-4 inline-block">
                <a href="https://tailwindtemplates.m-pages.com/newsletter" target="_blank" rel="noopener" className="bg-secondary py-2 px-3 -ml-1 rounded-lg text-white font-bold flex hover:bg-secondary-lighter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>Subscribe to newsletter
                </a>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-center px-6 lg:px-0 items-center mt-12 mb-6">
            <a href="" target="_blank" rel="noopener" className="bg-secondary py-2 px-3 -ml-1 rounded-lg text-white font-bold flex hover:bg-secondary-lighter">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 512 512" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M479.336,335.852c20.763-27.978,32.711-64.873,32.664-110.414V103.265 c-0.01-24.739-20.044-44.763-44.774-44.773c0,0-85.116,0-171.396,0c-86.29,0-173.744,0-178.43,0 C52.556,58.502,0.009,111.048,0,175.893c-0.038,32.389,13.302,61.228,34.539,81.924c21.226,20.744,50.255,33.65,82.038,35.468 c2.272,0.122,4.488,0.179,6.646,0.179c4.772,0,9.335-0.341,13.738-0.938c11.125,27.571,28.773,51.799,51.259,70.592l-0.34-0.284 l0.255,0.217c0.729,0.616,1.648,1.326,2.547,2.036H123.64v40.902c0.01,26.244,21.264,47.508,47.519,47.518h293.19 c26.244-0.01,47.51-21.264,47.518-47.518v-40.902h-61.246C461.31,356.756,471.014,347.099,479.336,335.852z M482.782,394.173 v11.816c-0.018,10.178-8.265,18.415-18.433,18.433h-293.19c-10.178-0.018-18.416-8.256-18.434-18.433v-11.816h94.28h147.868 H482.782z M389.884,365.088H252.137c-11.769-4.299-21.729-9.165-29.332-13.539c-8.058-4.62-13.662-8.805-15.849-10.679l0.161,0.141 l-0.246-0.198c-21.558-18.027-37.88-42.075-46.676-69.513l-4.355-13.539l-13.634,4.043c-5.454,1.619-11.684,2.575-18.983,2.575 c-1.628,0-3.294-0.048-5.008-0.142c-24.919-1.412-47.32-11.532-63.34-27.221c-16.019-15.725-25.752-36.706-25.79-61.123 c0.009-24.437,9.865-46.421,25.866-62.45c16.029-16.01,38.013-25.856,62.45-25.866c9.373,0,349.826,0,349.826,0 c8.654,0.01,15.67,7.025,15.688,15.688v122.173c-0.048,40.617-10.348,70.62-26.955,93.106 C439.722,340.434,417,355.564,389.884,365.088z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M122.712,122.154c-29.691,0.01-53.73,24.057-53.74,53.74c0.01,29.691,24.058,53.739,53.74,53.748 c9.572,0,18.368-2.708,25.838-6.826l6.268-3.455v-86.934l-6.268-3.446C141.08,124.852,132.284,122.144,122.712,122.154z M130.58,204.164c-2.537,0.767-5.15,1.24-7.868,1.24c-16.294-0.028-29.474-13.208-29.502-29.511 c0.028-16.285,13.218-29.474,29.502-29.502c2.718,0.01,5.33,0.483,7.868,1.24V204.164z"/>
              </svg>Support Me on Ko-fi
            </a>
          </div>
          <div className="lg:justify-center items-center flex px-6 lg:px-0 text-white">
            <p className="text-white">Built with <a className="hover:text-secondary" href="https://tallstack.dev/" rel="noopener">TALL stack</a> & 
              <a className="text-lg hover:text-red-500 cursor-default">❤</a> by 
              <a className="hover:text-secondary" href="http://j-hiz.com" rel="noopener">J-hiz</a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
