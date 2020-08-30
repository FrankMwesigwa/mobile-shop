import React from 'react';
import Layout from '../../components/Layout/TopDetails';

const index = () => {
    return (
        <Layout>
        	<div>
		        <div class="main">
	                <div class="page-header text-center" style={{ backgroundImage:`url(images/page-header-bg.jpg&quot)`}}>
	                    <div class="container">
	                        <h1 class="page-title">Wishlist<span>Shop</span></h1>
	                    </div>
	                </div>
	                <nav aria-label="breadcrumb" class="breadcrumb-nav undefined">
	                    <div class="container">
	                        <ol class="breadcrumb">
	                            <li class="breadcrumb-item"><a href="/react/molla/demo-18">Home</a></li>
	                            <li class="breadcrumb-item"><a href="/react/molla/shop/sidebar/list">Shop</a></li>
	                            <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
	                        </ol>
	                    </div>
	                </nav>
	                <div class="page-content">
	                    <div class="container">
	                        <table class="table table-wishlist table-mobile">
	                            <thead>
	                                <tr>
	                                    <th>Product</th>
	                                    <th>Price</th>
	                                    <th>Stock Status</th>
	                                    <th></th>
	                                    <th></th>
	                                </tr>
	                            </thead>
	                            <tbody></tbody>
	                        </table>
	                        <div class="wishlist-share">
	                            <div class="social-icons social-icons-sm mb-2"><label class="social-label">Share on:</label><a href="https://www.facebook.com/" class="social-icon" target="_blank" rel="noopener noreferrer" title="Facebook"><i class="icon-facebook-f"></i></a><a href="https://twitter.com/"
	                                    class="social-icon" target="_blank" rel="noopener noreferrer" title="Twitter"><i class="icon-twitter"></i></a>
	                                <a href="https://instagram.com/" class="social-icon" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="icon-instagram"></i></a>
	                                <a href="https://youtube.com/" class="social-icon" target="_blank" rel="noopener noreferrer" title="Youtube"><i class="icon-youtube"></i></a><a href="https://pinterest.com/" class="social-icon" target="_blank" rel="noopener noreferrer"
	                                    title="Pinterest"><i class="icon-pinterest"></i></a></div>
	                        </div>
	                    </div>
	                </div>
            	</div>
        	</div>
        </Layout>
    )
}

export default index