import Image from 'next/image'
import styles from '../styles/globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-accent">
      <Image
        src="/hero.svg"
        alt="Portfolio hero"
        width={800}
        height={600}
        className="md:mx-auto mx-6 mb-12"
      />
      <section className="mx-auto max-w-4xl text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          AI Automation & Web Design
        </h1>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          I build intelligent systems and stunning web experiences for clients worldwide.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto">
          <button className="px-6 py-3 bg-secondary text-white rounded hover:bg-opacity-90 transition">
            AI Automation
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded hover:bg-opacity-90 transition">
            Web Design
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded hover:bg-opacity-90 transition">
            APK AI
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded hover:bg-opacity-90 transition">
            Consult
          </button>
        </div>
      </section>
    </main>
  )
}