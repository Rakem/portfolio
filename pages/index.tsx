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
      <main className="sm:scroll-container flex flex-col h-screen overflow-y-scroll">
        <div className="bg-gradient-to-b from-white to-teal-100">
          <Section className="flex flex-col h-screen sm:flex-row">
            <div className="flex-shrink mb-10 text-transparent bg-gradient-to-r bg-clip-text from-seagreen-400 to-denim-400 lg:mb-0">
              <h1 className="text-5xl font-bold sm:text-6xl lg:text-8xl">
                Tilman Reipsch
              </h1>
              <h1 className="text-shadow-sm text-3xl font-bold sm:text-4xl lg:text-5xl">
                Software Developer
              </h1>
            </div>
            <div className="max-h-ful sm:slanted-full flex-grow sm:ml-32">
              <img
                src="/tilman.jpg"
                alt="me"
                className="w-full h-full object-cover transform hover:scale-110 transition transition-transform duration-300"
              />
            </div>
          </Section>
        </div>
        <div className="bg-gradient-to-b from-teal-100 to-teal-600">
          <Section className="flex flex-col">
            <h2 className="text-shadow-sm mb-10 text-white text-4xl font-bold sm:text-8xl">
              Curriculum Vitae
            </h2>
            <CurriculumVitae className="sm:slanted mb-20" />
          </Section>

          <Section className="flex flex-col">
            <h2 className="text-shadow-sm text-white text-4xl font-bold sm:text-8xl">
              Technologien
            </h2>
            <Technologies className="flex-1 mb-10 mt-10" />
          </Section>
          <footer />
        </div>
      </main>
    </div>
  )
}
