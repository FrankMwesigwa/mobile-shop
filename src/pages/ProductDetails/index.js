import React from 'react';
import Layout from '../../components/Layout/TopDetails';
import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight.js';
import ProductTabs from './Tabs';
import RelatedProducts from './RelatedProducts';
import './styles.css';

const index = () => {
	return (
		<Layout>
			<div className='page-content'>
				<div className='container mt-5'>
					<div class='products-details-top'>
						<div class='row'>
							<DetailsLeft />
							<DetailsRight />
						</div>
					</div>
					<ProductTabs />
					<h2 class='title text-center mb-4'>You May Also Like These Ones</h2>
					<RelatedProducts />
				</div>
			</div>
		</Layout>
	);
};

export default index;
