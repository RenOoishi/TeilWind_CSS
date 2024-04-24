import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="antialiased overflow-x-hidden">
      <div className="ontainer mx-auto px-6">
        <nav className="flex items-center justify-between py-8 px-4 sm:px-0">
          <a href="" aria-label="TailwindTemplates logo" className="w-1/4 text-primary font-bold text-2xl flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 375 375" version="1.0">
                  <path fill="#FF2773" d="M234.375 0c-36.07 0-65.625 29.555-65.625 65.625h37.5c0-16.43 11.695-28.125 28.125-28.125S262.5 49.195 262.5 65.625 250.805 93.75 234.375 93.75H0v37.5h234.375c36.07 0 65.625-29.555 65.625-65.625S270.445 0 234.375 0ZM0 168.75v37.5h300c22.316 0 37.5 15.184 37.5 37.5 0 22.316-15.184 37.5-37.5 37.5-22.316 0-37.5-15.184-37.5-37.5H225c0 41.434 33.566 75 75 75s75-33.566 75-75-33.566-75-75-75Zm0 75v37.5h121.875c16.43 0 28.125 11.695 28.125 28.125S138.305 337.5 121.875 337.5 93.75 325.805 93.75 309.375h-37.5c0 36.07 29.555 65.625 65.625 65.625s65.625-29.555 65.625-65.625-29.555-65.625-65.625-65.625Zm0 0"/>
                </svg>
              </div>
            <h1 className="text-2xl font-bold hidden sm:block">TeilwindTemplate</h1>  
          </a>
        </nav>
      </div>
    </main>
  );
}
