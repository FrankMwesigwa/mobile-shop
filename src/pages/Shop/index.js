import React from 'react';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import MainContent from './MainContent';

const index = () => {
    return (
        <Layout>
            <div class="page-content">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <MainContent />
                        </div>
                        <div className="col-lg-3 order-lg-first">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default index
