import Head from 'next/head'

import Section from '../components/section'
import CurriculumVitae from '../components/curriculumVitae'
import Technologies from '../components/technologies'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tilman Reipsch, Software Developer</title>
        <meta name="description" content="Portfolio page of Tilman Reipsch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="sm:scroll-container flex flex-col h-screen bg-gradient-to-b from-teal-800 to-teal-900 overflow-y-scroll">
        <div className="">
          <Section className="flex flex-col items-center sm:flex-row" arrow>
            <div className="z-10 sm:w-1/2">
              <div className="flex flex-row -mb-3 -ml-4 mr-3 max-w-screen-sm max-h-96 bg-teal-700 rounded-3xl overflow-hidden ring-teal-600 ring-1 sm:-mr-10 sm:mb-0 sm:ml-0">
                <div className="flex-1 overflow-hidden">
                  <img
                    src="/tilman.jpg"
                    alt="me"
                    className="w-full h-full object-cover transform hover:scale-110 transition transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 mb-10 p-4 text-transparent bg-gradient-to-r bg-clip-text from-teal-100 to-teal-400 sm:p-10 lg:mb-0">
                  <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
                    Tilman Reipsch
                  </h1>
                  <h1 className="text-xl font-bold md:text-2xl">
                    Software Developer
                  </h1>
                </div>
              </div>
            </div>
            <div className="-mr-4 ml-4 max-h-screen sm:ml-0 sm:mr-0 sm:w-1/2">
              <Technologies className="flex-1 h-full bg-gray-800 rounded-3xl overflow-x-hidden overflow-y-auto ring-gray-700 ring-1" />
            </div>
          </Section>
        </div>
        <div className="">
          <Section className="flex flex-col">
            <CurriculumVitae className="mb-20 text-gray-300 bg-gray-800 rounded-3xl overflow-hidden ring-gray-700 ring-1" />
          </Section>

          <footer />
        </div>
      </main>
    </div>
  )
}
