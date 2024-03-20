export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 h-screen flex flex-col items-center text-center">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Install Tailwind CSS with Next.js</h1>
        <h2>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</h2>
        <p className="mt-4">Hello World, Tailwind</p>
        <button className="bg-sky-500 px-4 text-white py-2 rounded-md font-medium mt-4 :hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  )
}