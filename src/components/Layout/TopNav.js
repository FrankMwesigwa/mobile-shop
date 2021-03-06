/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<div class='sticky-wrapper'>
			<div class='header-middle sticky-header'>
				<div class='container'>
					<div class='header-left'>
						<button class='mobile-menu-toggler'>
							<span class='sr-only'>Toggle mobile menu</span>
							<i class='icon-bars'></i>
						</button>
						<Link class='logo undefined' to='/'>
							<img
								src='images/logo.jpeg'
								alt='Molla Logo'
								width='105'
								height='25'
							/>
						</Link>
						<nav class='main-nav'>
							<ul class='menu sf-arrows'>
								<li class='active'>
									<Link class='sf-with-ul' href='#'>
										Mobile Phones
									</Link>
									<ul>
										<li class=''>
											<Link to='/'>Iphones</Link>
										</li>
										<li class=''>
											<Link to='/'>Samsung</Link>
										</li>
										<li class='active'>
											<Link to='/'>Huawei</Link>
										</li>
										<li>
											<Link to='/'>Xaomi/ Redmi</Link>
										</li>
										<li>
											<Link to='/'>Google pixel</Link>
										</li>
										<li>
											<Link to='/'>Tecno</Link>
										</li>
										<li>
											<Link to='/'>Infinx</Link>
										</li>
										<li>
											<Link to='/'>Oppo</Link>
										</li>
										<li>
											<Link to='/'>Nokia</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link
										class='sf-with-ul'
										href='/react/molla/product/default/27'
									>
										TV Sets
									</Link>
									<ul>
										<li>
											<Link to='/'>Samsung</Link>
										</li>
										<li>
											<Link to='/'>LG</Link>
										</li>
										<li>
											<Link to='/'>Sony</Link>
										</li>
										<li>
											<Link to='/'>Hisense</Link>
										</li>
										<li>
											<Link to='/'>Phillips</Link>
										</li>
										<li>
											<Link to='/'>Toshiba</Link>
										</li>
										<li>
											<Link to='/'>Panasonic</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link
										class='sf-with-ul'
										href='/react/molla/product/default/27'
									>
										Smart speakers
									</Link>
									<ul>
										<li>
											<Link to='/'>JBl</Link>
										</li>
										<li>
											<Link to='/'>Harman Kardon</Link>
										</li>
										<li>
											<Link to='/'>Bosse </Link>
										</li>
										<li>
											<Link to='/'>Sony</Link>
										</li>
										<li>
											<Link to='/'>Amazon</Link>
										</li>
										<li>
											<Link to='/'>Apple</Link>
										</li>
										<li>
											<Link to='/'>Panasonic</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link
										class='sf-with-ul'
										href='/react/molla/product/default/27'
									>
										Fridges
									</Link>
									<ul>
										<li>
											<Link to='/'>Hisense</Link>
										</li>
										<li>
											<Link to='/'>Samsung</Link>
										</li>
										<li>
											<Link to='/'>Lg</Link>
										</li>
										<li>
											<Link to='/'>ADH</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link
										class='sf-with-ul'
										href='/react/molla/product/default/27'
									>
										Accessories
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div class='header-right'>
						<div class='header-search'>
							<Link
								href='#dropdown'
								class='search-toggle'
								role='button'
								title='Search'
							>
								<i class='fas fa-search'></i>
							</Link>
							<form>
								<div class='header-search-wrapper'>
									<label for='q' class='sr-only'>
										Search
									</label>
									<input
										type='search'
										class='form-control'
										name='q'
										id='q'
										placeholder='Search in...'
										required=''
									/>
								</div>
							</form>
						</div>
						<div class='dropdown compare-dropdown'>
							<Link
								href='#dropdown'
								class='dropdown-toggle'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
								data-display='static'
								title='Compare Products'
								aria-label='Compare Products'
							>
								<div class='icon'>
									<i class='fas fa-arrows-alt'></i>
								</div>
							</Link>
							<div class='dropdown-menu dropdown-menu-right'>
								<ul class='compare-products'>
									<p class='mb-1'>No products in your wishlist.</p>
								</ul>
								<div class='compare-actions'>
									<button class='action-link'>Clear All</button>
									<Link class='btn btn-outline-primary-2' to='/wishlist'>
										<span>Wishlist</span>
										<i class='fas fa-arrows-alt'></i>
									</Link>
								</div>
							</div>
						</div>
						<div class='dropdown cart-dropdown'>
							<Link
								to='/cart'
								class='dropdown-toggle'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
								data-display='static'
							>
								<i class='fas fa-shopping-cart'></i>
								<span class='cart-count'>0</span>
							</Link>
							<div
								class='dropdown-menu dropdown-menu-right text-center'
								style={{ width: '200px' }}
							>
								<div class='dropdown-cart-products'></div>
								<p>Your Cart is Empty.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
