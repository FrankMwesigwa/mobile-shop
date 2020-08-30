import React from 'react';
import Layout from '../../components/Layout/TopDetails';

const index = () => {
    return (
        <Layout>
        	<div>
        		<div class="main">
			        <div class="page-header text-center" style={{ backgroundImage:`url(images/page-header-bg.jpg)`}}>
			            <div class="container">
			                <h1 class="page-title">My Account<span>Shop</span></h1>
			            </div>
			        </div>
			        
			        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
			            <div class="container">
			                <ol class="breadcrumb">
			                    <li class="breadcrumb-item"><a href="/react/molla/demo-18">Home</a></li>
			                    <li class="breadcrumb-item"><a href="/react/molla/shop/sidebar/list">Shop</a></li>
			                    <li class="breadcrumb-item active" aria-current="page">My Account</li>
			                </ol>
			            </div>
			        </nav>

				    <div class="page-content">
	            		<div class="dashboard">
			                <div class="container">
			                    <ul class="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
			                        <div class="react-tabs" data-tabs="true">
			                            <div class="row">
			                                <aside class="col-md-4 col-lg-3">
			                                    <ul class="react-tabs__tab-list" role="tablist">
			                                        <li class="nav-item active show" role="tab" id="react-tabs-0" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-1" tabindex="0"><span class="nav-link">Dashboard</span></li>
			                                        <li class="nav-item" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3"><span class="nav-link">Orders</span></li>
			                                        <li class="nav-item" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5"><span class="nav-link">Downloads</span></li>
			                                        <li class="nav-item" role="tab" id="react-tabs-6" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-7"><span class="nav-link">Addresses</span></li>
			                                        <li class="nav-item" role="tab" id="react-tabs-8" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-9"><span class="nav-link">Account Details</span></li>
			                                        <li class="nav-item" role="tab" id="react-tabs-10" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-11"><a class="nav-link" href="/react/molla/shop/dashboard">Sign Out</a></li>
			                                    </ul>
			                                </aside>
			                                <div class="col-md-8 col-lg-9" style={{marginTop: 10,}}>
			                                    <div class="tab-pane">
			                                        <div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0">
			                                            <p>Hello <span class="font-weight-normal text-dark">User</span> (not <span class="font-weight-normal text-dark">User</span>? <a href="/react/molla/shop/dashboard">Log out</a>)<br/>From your account dashboard you
			                                                can view your <a class="tab-trigger-link link-underline" href="/react/molla/shop/dashboard#tab-orders">recent orders</a>, manage your <a class="tab-trigger-link" href="/react/molla/shop/dashboard#tab-address">shipping and billing addresses</a>,
			                                                and <a class="tab-trigger-link" href="/react/molla/shop/dashboard#tab-account">edit your password and account details</a>.</p>
			                                        </div>
			                                        <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2"></div>
			                                        <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4"></div>
			                                        <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-7" aria-labelledby="react-tabs-6"></div>
			                                        <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-9" aria-labelledby="react-tabs-8"></div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </ul>
			                </div>
			            </div>
			        </div> 
		        </div>
        	</div>
        </Layout>
    )
}

export default index