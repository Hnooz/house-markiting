import { Link } from "react-router-dom"

function ListingItem({listing, id, onDelete}) {
  return (
    <div key={id}>
        <div className="relative">
            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={listing.imgUrls[0]} alt="" />
            {onDelete && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute top-0 right-0 text-red-500 mx-4 mt-2" onClick={() => onDelete(listing.id, listing.name)}>
                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
            </svg>}
        </div>
        <div className="mt-8">
            <div className="flex justify-between items-center mt-4">
                <Link to={`/category/${listing.type}/${id}`} className="text-xl font-semibold text-slate-600 capitalize dark:text-white">
                    {listing.name}
                </Link>
                <span className="text-lg font-bold text-slate-700">${listing.offer ? 
                listing.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : 
                listing.regularPrice.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                } {listing.type === 'rent' && ' / Month'}</span>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
                {listing.location}
            </p>
            <div className="flex items-center capitalize justify-between mt-4">
                <p className="text-sm text-gray-500">
                    {listing.bedrooms > 1 ? `${listing.bedrooms} bedrooms` : '1 bedroom'}
                </p>

                <p className="inline-block text-sm text-gray-500">
                    {listing.parking ? 'parking' : ''}
                </p>

                <p className="inline-block text-sm text-gray-500">
                    {listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms` : '1 bathroom'}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ListingItem