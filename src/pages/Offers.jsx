import { useEffect, useState } from "react"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore"
import { db } from "../../firebase.config"
import { toast } from "react-toastify"
import ListingItem from "../components/ListingItem"
import Spinner from "../components/Spinner"

function Offers() {
    const [ listings , setListings ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings')
                const q = query(listingsRef, 
                    where('offer', '==', true), 
                    orderBy('timestamp', 'desc'), 
                    limit(10))

                    const querySnap = await getDocs(q)

                    const listings = []
                    querySnap.forEach((doc) => {
                        return listings.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    })
                setListings(listings)
                setLoading(false)
            } catch (error) {
                toast.error('Could not fetch listings')
            }
        }
        fetchListings()
    },[])
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
          {loading ? (
            <Spinner />
          ) : listings && listings.length > 0 ? 
            <>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-slate-700 capitalize lg:text-3xl dark:text-white">
                  Offers
                </h1>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {listings.map((listing) => (
                    <ListingItem key={listing.id} listing={listing.data} id={listing.id} />
                ))}
              </div>
            </>
           : (
            <p>there is no current offers</p>
          )}
        
      </div>
    </section>
  )
}

export default Offers