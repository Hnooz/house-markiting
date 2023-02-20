import { useNavigate, useLocation } from "react-router-dom"
import { getAuth } from "firebase/auth"

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const auth = getAuth()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return route
        }
    }
    const onLogout = () => {
        auth.signOut()
        navigate('/')
        window.location.reload()
      }
  return (
    <footer className="bg-emerald-900 w-full py-6 flex items-center justify-between px-6">
        <h1 className="text-white text-xl font-semibold">House Marketplace</h1>
        <div>
            <ul className="flex items-center font-medium space-x-10">
                <li className={ pathMatchRoute('/') ? 'flex items-center text-slate-300 cursor-pointer' : 'text-white cursor-pointer hover:text-slate-300'} onClick={() => navigate('/')}>
                    Explore
                </li>
                <li className={ pathMatchRoute('/offers') ? 'flex items-center text-slate-300 cursor-pointer' : 'text-white cursor-pointer hover:text-slate-300'} onClick={() => navigate('/offers')}>
                    Offers
                </li>
                <li className={ pathMatchRoute('/profile') ? 'flex items-center text-slate-300 cursor-pointer' : 'text-white cursor-pointer hover:text-slate-300'} onClick={() => navigate('/profile')}>
                    Profile
                </li>
                {auth.currentUser && <button type="button" onClick={onLogout} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span className="mx-1">Logout</span>
                </button>}
            </ul>
        </div>
    </footer>
  )
}

export default Navbar