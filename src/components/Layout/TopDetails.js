import React from 'react'
import TopBar from './TopBar'
import TopNav from './TopNav'
import Footer from './Footer'

const TopDetails = ({children}) => {
    return (
        <div className="page-wrapper">
        <header className="header">
            <TopBar />
            <TopNav />
        </header>
        <div className="main">
            {children}
        </div>
        <Footer />
    </div>
    )
}

export default TopDetails
