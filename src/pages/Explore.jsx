import { Link } from "react-router-dom"

function Explore() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-emerald-800 capitalize lg:text-3xl">
          explore
        </h1>        
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <h1 className="font-semibold text-emerald-800 capitalize dark:text-white">
          categories
        </h1>        
        <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Link to="category/rent">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="https://images.unsplash.com/photo-1597340719177-5c352504dc87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
            <div className="mt-8">
              <span className="text-emerald-500 capitalize font-medium">places for rent</span>
            </div>
          </Link>
          <Link to="category/sale">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="https://images.unsplash.com/photo-1590291127104-4402e279523d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80"
              alt=""
            />
            <div className="mt-8">
              <span className="text-emerald-500 capitalize font-medium">places for sale</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Explore