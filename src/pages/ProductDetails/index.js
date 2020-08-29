import React from 'react';
import Layout from '../../components/Layout/TopDetails';
import DetailsTop from './DetailsTop';
import Details from './Details.js';
import ProductTabs from './Tabs';
import RelatedProducts from './RelatedProducts'
import './styles.css';

const index = () => {
	return (
		<Layout>
			<div className='page-content'>
				<div className='container'>
					<div class='product-details-top'>
						<div class='row'>
							<DetailsTop />
							<Details />
						</div>
					</div>
                    <ProductTabs />
                    <h2 class="title text-center mb-4">You May Also Like</h2>
                    <RelatedProducts />
				</div>
			</div>
		</Layout>
	);
};

export default index;
