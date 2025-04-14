import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"



const NotFound = () => {
  return (
    <section className="py-8 flex justify-center w-full">
    <div className="flex flex-col items-center ">
      <img src="images/error-404.png" alt="404" />
      <p className="text-indigo-600 font-semibold uppercase">404 error</p>
      <h3 className="text-5xl capitalize font-semibold mt-2">Page not found.</h3>
      <p className="text-gray-400">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link
        to={'/'}
        className="mt-5 font-normal flex items-center text-indigo-800"
      >
        <span className="pr-2">Go back Home</span>
        <ArrowRight size={20} />
      </Link>
    </div>
  </section>
  )
}

export default NotFound