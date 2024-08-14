import react from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-blue-300 rounded-xl p-8 md:p-0 dark:bg-blue-300">
    <img className="w-24 h-24 md:w-48 md:h-aut md:rounded-none rounded-full mx-auto" src="/IMG-20190716-WA0014.jpg" alt="" width="385" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Asslamoalaikum,My name is Sania Asif am from rahim yar khan.
          My qualification is ADP computer science and am also teaching in a school.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-pink-400">
          Sania Asif 
        </div>
        <div className="text-slate-700 dark:text-purple-500">
        teacher+Student
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page 