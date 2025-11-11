// import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({to,icon,children}) => {
    return (
        <div>
            <Link
            to={to}
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium inline-flex items-center gap-2"
            >
                <span>{icon}</span>
                <span>{children}</span>
            </Link>

        </div>
    )
}

export default NavLinks;