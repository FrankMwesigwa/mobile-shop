/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
	return (
		<nav
			aria-label='breadcrumb'
			class='breadcrumb-nav breadcrumb-nav border-0 mb-0'
		>
			<div class='container  d-flex align-items-center'>
				<ol class='breadcrumb'>
					<li class='breadcrumb-item'>
						<Link to='/'>Home</Link>
					</li>
					<li class='breadcrumb-item'>
						<Link to='/'>Products</Link>
					</li>
					<li class='breadcrumb-item active' aria-current='page'>
						Default
					</li>
				</ol>
				<nav class='product-pager ml-auto' aria-label='Product'>
					<a
						class='product-pager-link product-pager-prev'
						aria-label='Previous'
						tabindex='-1'
						href='#'
					>
						<i class='icon-angle-left'></i>
						<span>Prev</span>
						<div class='product-detail'>
							<figure>
								<img
									src='/react/molla/assets/images/demos/demo-2/products/product-15-1-300x300.jpg'
									alt='Product'
								/>
							</figure>
							<h3 class='product-name'>Carronade Table</h3>
						</div>
					</a>
					<a
						class='product-pager-link product-pager-next'
						aria-label='Next'
						tabindex='-1'
						href='#'
					>
						<span>Next</span>
						<i class='icon-angle-right'></i>
						<div class='product-detail'>
							<figure>
								<img
									src='/react/molla/assets/images/products/single/centered/1.jpg'
									alt='Product'
								/>
							</figure>
							<h3 class='product-name'>Beige metal hoop tote bag</h3>
						</div>
					</a>
				</nav>
			</div>
		</nav>
	);
};

export default BreadCrumb;
