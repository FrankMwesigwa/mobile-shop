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
						<button
							class='nav-link'
							onClick={() => setCurrentTab('description')}
						>
							Description
						</button>
					</li>
					<li
						class='nav-item'
						role='tab'
						id='react-tabs-42'
						aria-selected='false'
						aria-disabled='false'
						aria-controls='react-tabs-43'
					>
						<button
							class='nav-link'
							onClick={() => setCurrentTab('additional')}
						>
							Additional information
						</button>
					</li>
					<li
						class='nav-item'
						role='tab'
						id='react-tabs-44'
						aria-selected='false'
						aria-disabled='false'
						aria-controls='react-tabs-45'
					>
						<button class='nav-link' onClick={() => setCurrentTab('shipping')}>
							Shipping &amp; Returns
						</button>
					</li>
					<li
						class='nav-item'
						role='tab'
						id='react-tabs-46'
						aria-selected='false'
						aria-disabled='false'
						aria-controls='react-tabs-47'
					>
						<button class='nav-link' onClick={() => setCurrentTab('reviews')}>
							Reviews (2)
						</button>
					</li>
				</ul>
				<div class='tab-content'>
					<div class='tab-pane active show' role='tabpanel'>
						{renderView()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
