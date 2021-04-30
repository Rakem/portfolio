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
        <Section className="from-chestnut-300 to-sunset-100 flex flex-col bg-gradient-to-br sm:flex-row sm:justify-between">
          <div>
            <h1 className="text-shadow-sm text-white text-5xl font-bold sm:text-8xl">
              Tilman Reipsch
            </h1>
            <h1 className="text-shadow-sm text-white text-3xl font-bold sm:text-5xl">
              Software Developer
            </h1>
          </div>
          <div className="flex flex-col justify-center mt-10 w-full sm:w-1/2">
            <img
              src="/tilman.jpg"
              alt="me"
              className="w-full rounded-full transform hover:scale-110 transition transition-transform duration-300 sm:w-4/5"
            />
          </div>
        </Section>
        <Section className="to-sunset-300 from-sunset-100 bg-gradient-to-bl">
          <h2 className="text-shadow-sm mb-10 text-white text-4xl font-bold sm:text-8xl">
            Curriculum Vitae
          </h2>
          <CurriculumVitae className="h-1/2 sm:w-2/3" />
        </Section>

        <Section className="to-blush-100 from-sunset-300 flex flex-col bg-gradient-to-br">
          <h2 className="text-shadow-sm text-white text-4xl font-bold sm:text-8xl">
            Technologien
          </h2>
          <Technologies className="flex-1 mb-10 mt-10" />
        </Section>
        <footer />
      </main>
    </div>
  )
}
