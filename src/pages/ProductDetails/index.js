import React from 'react';
import Layout from '../../components/Layout/TopDetails';
<<<<<<< HEAD
import DetailsTop from './DetailsTop';
import Details from './Details.js';
import ProductTabs from './Tabs';
import RelatedProducts from './RelatedProducts'
=======
import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight.js';
import ProductTabs from './Tabs';
import RelatedProducts from './RelatedProducts';
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
import './styles.css';

const index = () => {
	return (
		<Layout>
			<div className='page-content'>
<<<<<<< HEAD
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
=======
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
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
				</div>
			</div>
		</Layout>
	);
};

export default index;
