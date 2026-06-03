import Link from "next/link"


const NotFoundPage = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  )
}

export default NotFoundPage
