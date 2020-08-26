import React from 'react'
import TopBar from './TopBar'
import TopNav from './TopNav'
import Banner from './Banner'
import Footer from './Footer'

const index = ({ children }) => {
    return (
        <div className="page-wrapper">
            <header className="header">
                <TopBar />
                <TopNav />
                <Banner />
            </header>
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default index
