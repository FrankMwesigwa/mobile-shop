/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
	return (
		<>
			<div class='toolbox'>
				<div class='toolbox-left'>
					<div class='toolbox-info'>
						Showing <span>9 of 47</span> Products
					</div>
				</div>
				<div class='toolbox-right'>
					<div class='toolbox-sort'>
						<label for='sortby'>Sort by:</label>
						<div class='select-custom'>
							<select name='sortby' id='sortby' class='form-control'>
								<option value='popularity'>Most Popular</option>
								<option value='rating'>Most Rated</option>
								<option value='date'>Date</option>
							</select>
						</div>
					</div>
					<div class='toolbox-layout'>
						<button class='btn-layout '>
							<svg width='16' height='10'>
								<rect x='0' y='0' width='4' height='4'></rect>
								<rect x='6' y='0' width='10' height='4'></rect>
								<rect x='0' y='6' width='4' height='4'></rect>
								<rect x='6' y='6' width='10' height='4'></rect>
							</svg>
						</button>
						<button class='btn-layout '>
							<svg width='10' height='10'>
								<rect x='0' y='0' width='4' height='4'></rect>
								<rect x='6' y='0' width='4' height='4'></rect>
								<rect x='0' y='6' width='4' height='4'></rect>
								<rect x='6' y='6' width='4' height='4'></rect>
							</svg>
						</button>
						<button class='btn-layout active'>
							<svg width='16' height='10'>
								<rect x='0' y='0' width='4' height='4'></rect>
								<rect x='6' y='0' width='4' height='4'></rect>
								<rect x='12' y='0' width='4' height='4'></rect>
								<rect x='0' y='6' width='4' height='4'></rect>
								<rect x='6' y='6' width='4' height='4'></rect>
								<rect x='12' y='6' width='4' height='4'></rect>
							</svg>
						</button>
						<button class='btn-layout '>
							<svg width='22' height='10'>
								<rect x='0' y='0' width='4' height='4'></rect>
								<rect x='6' y='0' width='4' height='4'></rect>
								<rect x='12' y='0' width='4' height='4'></rect>
								<rect x='18' y='0' width='4' height='4'></rect>
								<rect x='0' y='6' width='4' height='4'></rect>
								<rect x='6' y='6' width='4' height='4'></rect>
								<rect x='12' y='6' width='4' height='4'></rect>
								<rect x='18' y='6' width='4' height='4'></rect>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class='products mb-3'>
				<div class='row'>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<span class='product-label label-circle label-new'>New</span>
								<Link to='/details'>
									<img
										src='images/phones/phone3.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Samsung</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Samsung Galaxy A11 6.4" 2GB RAM 32GB
									</Link>
								</h3>
								<div class='product-price'>UGX 539,999</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '20%' }}></div>
									</div>
									<span class='ratings-text'>( 2 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>buy now</span>
								</button>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<Link to='/details'>
									<img
										src='images/home/home8.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Iphone</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Tecno Camon 15 6.6" 4GB RAM 64GB
									</Link>
								</h3>
								<div class='product-price'>UGX 615,000</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '0%' }}></div>
									</div>
									<span class='ratings-text'>( 0 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<span class='product-label label-out'>Out Of Stock</span>
								<Link to='/details'>
									<img
										src='images/home/home6.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Techno</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Samsung Galaxy Note 8 – 6.3", 6GB RAM, 64GB
									</Link>
								</h3>
								<div class='product-price'>
									<span class='out-price'>UGX 1,350,000</span>
								</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '80%' }}></div>
									</div>
									<span class='ratings-text'>( 6 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<Link to='/details'>
									<img
										src='images/home/home10.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Ininix</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Infinix Note 7 6.95" 4GB RAM 64GB ROM 48MP Camera
									</Link>
								</h3>
								<div class='product-price'>UGX 693,000</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '20%' }}></div>
									</div>
									<span class='ratings-text'>( 2 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<span class='product-label label-circle label-new'>New</span>
								<Link to='/details'>
									<img
										src='images/home/home1.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Televison</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Golden Tech 32" In-Built Satellite & Digital Decoder
									</Link>
								</h3>
								<div class='product-price'>UGX 582,000</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '0%' }}></div>
									</div>
									<span class='ratings-text'>( 0 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<Link to='/details'>
									<img
										src='images/home/home21.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Television</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Skyworth 50UB7500 Skyworth 50" Android
									</Link>
								</h3>
								<div class='product-price'>UGX 2,011,100</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '80%' }}></div>
									</div>
									<span class='ratings-text'>( 1 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<Link to='/details'>
									<img
										src='images/phones/phone7.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Smart watch</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Smart Watch Fitness Tracker Sport Watches For Android IOS
									</Link>
								</h3>
								<div class='product-price'>UGX 19,000</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '80%' }}></div>
									</div>
									<span class='ratings-text'>( 1 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<Link to='/details'>
									<img
										src='images/home/home19.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Tecno</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Global Star Global-star Home theater Speaker System
									</Link>
								</h3>
								<div class='product-price'>UGX 216,000</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '0%' }}></div>
									</div>
									<span class='ratings-text'>( 0 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
					<div class='col-6 col-md-4 col-lg-4'>
						<div class='product product-11 text-center'>
							<figure class='product-media'>
								<Link to='/details'>
									<img
										src='images/home/home11.jpeg'
										alt='Product'
										class='product-image'
									/>
								</Link>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='#'>Mac Book</a>
									</span>
								</div>
								<h3 class='product-title'>
									<Link to='/details'>
										Apple MacBook Pro - 15" Display, Intel Core i7, 16 GB
										Memory, 512GB
									</Link>
								</h3>
								<div class='product-price'>UGX 9,399,000</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{ width: '0%' }}></div>
									</div>
									<span class='ratings-text'>( 0 Reviews )</span>
								</div>
							</div>
							<div class='product-action'>
								<button class='btn-product btn-cart'>
									<span>add to cart</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav aria-label='Page navigation'>
				<ul class='pagination justify-content-center'>
					<li class='page-item disabled'>
						<a
							class='page-link page-link-prev'
							aria-label='Previous'
							tabindex='-1'
							aria-disabled='true'
							href='#'
						>
							<span aria-hidden='true'>
								<i class='fas fa-long-arrow-alt-left'></i>
							</span>
							Prev
						</a>
					</li>
					<li class='page-item active' aria-current='page'>
						<a class='page-link' href='#'>
							1
						</a>
					</li>
					<li class='page-item ' aria-current='page'>
						<a class='page-link' href='#'>
							2
						</a>
					</li>
					<li class='page-item ' aria-current='page'>
						<a class='page-link' href='#'>
							3
						</a>
					</li>
					<li class='page-item-total'>of 6</li>
					<li class='page-item '>
						<a
							class='page-link page-link-next'
							aria-label='Next'
							href='#'
						>
							Next{' '}
							<span aria-hidden='true'>
								<i class='fas fa-long-arrow-alt-right'></i>
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MainContent;
