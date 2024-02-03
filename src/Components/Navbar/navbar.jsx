import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div>
                <Link to={'/'} className='navbar-brand'>
                    <i className='fa fa-mobile text-warning mx-2'/>Contact<span className="text-warning mx-1">Management</span>
                </Link>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default navbar