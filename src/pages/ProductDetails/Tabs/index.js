<<<<<<< HEAD
import React from 'react';

const index = () => {
=======
import React, { useState } from 'react';
import Description from './Description';
import Additional from './AdditionalInfo';
import Shipping from './Shipping';
import Reviews from './Reviews';

const Tabs = () => {
	const [currentTab, setCurrentTab] = useState('description');

	const renderView = () => {
		if (currentTab === 'description') {
			return <Description />;
		}
		if (currentTab === 'additional') {
			return <Additional />;
		}
		if (currentTab === 'shipping') {
			return <Shipping />;
		}
		if (currentTab === 'reviews') {
			return <Reviews />;
		}
	};

>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
	return (
		<div class='react-tabs' data-tabs='true'>
			<div class='product-details-tab'>
				<ul class='nav nav-pills justify-content-center' role='tablist'>
					<li
						class='nav-item show'
						role='tab'
						id='react-tabs-40'
						aria-selected='true'
						aria-disabled='false'
						aria-controls='react-tabs-41'
						tabindex='0'
					>
<<<<<<< HEAD
						<span class='nav-link'> Description</span>
=======
						<button
							class='nav-link'
							onClick={() => setCurrentTab('description')}
						>
							Description
						</button>
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
					</li>
					<li
						class='nav-item'
						role='tab'
						id='react-tabs-42'
						aria-selected='false'
						aria-disabled='false'
						aria-controls='react-tabs-43'
					>
<<<<<<< HEAD
						<span class='nav-link'> Additional information</span>
=======
						<button
							class='nav-link'
							onClick={() => setCurrentTab('additional')}
						>
							Additional information
						</button>
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
					</li>
					<li
						class='nav-item'
						role='tab'
						id='react-tabs-44'
						aria-selected='false'
						aria-disabled='false'
						aria-controls='react-tabs-45'
					>
<<<<<<< HEAD
						<span class='nav-link'>Shipping &amp; Returns</span>
=======
						<button class='nav-link' onClick={() => setCurrentTab('shipping')}>
							Shipping &amp; Returns
						</button>
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
					</li>
					<li
						class='nav-item'
						role='tab'
						id='react-tabs-46'
						aria-selected='false'
						aria-disabled='false'
						aria-controls='react-tabs-47'
					>
<<<<<<< HEAD
						<span class='nav-link'>Reviews (2)</span>
					</li>
				</ul>
				<div class='tab-content'>
					<div
						class='tab-pane active show'
						role='tabpanel'
						id='react-tabs-41'
						aria-labelledby='react-tabs-40'
					>
						<div class='product-desc-content'>
							<h3>Product Information</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
								odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
								turpis. Suspendisse urna viverra non, semper suscipit, posuere
								a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
								porttitor mauris sit amet orci. Aenean dignissim pellentesque
								felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
								Donec consectetuer ligula vulputate sem tristique cursus.{' '}
							</p>
							<ul>
								<li>
									Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
									elit.{' '}
								</li>
								<li>Vivamus finibus vel mauris ut vehicula.</li>
								<li>
									Nullam a magna porttitor, dictum risus nec, faucibus sapien.
								</li>
							</ul>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
								odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
								turpis. Suspendisse urna viverra non, semper suscipit, posuere
								a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
								porttitor mauris sit amet orci. Aenean dignissim pellentesque
								felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
								Donec consectetuer ligula vulputate sem tristique cursus.{' '}
							</p>
						</div>
					</div>
					<div
						class='tab-pane'
						role='tabpanel'
						id='react-tabs-43'
						aria-labelledby='react-tabs-42'
					></div>
					<div
						class='tab-pane'
						role='tabpanel'
						id='react-tabs-45'
						aria-labelledby='react-tabs-44'
					></div>
					<div
						class='tab-pane'
						role='tabpanel'
						id='react-tabs-47'
						aria-labelledby='react-tabs-46'
					></div>
=======
						<button class='nav-link' onClick={() => setCurrentTab('reviews')}>
							Reviews (2)
						</button>
					</li>
				</ul>
				<div class='tab-content'>
					<div class='tab-pane active show' role='tabpanel'>
						{renderView()}
					</div>
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
				</div>
			</div>
		</div>
	);
};

<<<<<<< HEAD
export default index;
=======
export default Tabs;
>>>>>>> f8bc86af9920eca87e30532456a041a256448cad
