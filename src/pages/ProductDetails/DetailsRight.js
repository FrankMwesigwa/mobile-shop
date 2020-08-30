/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
	return (
		<div class='col-md-6'>
			<div class='products-details '>
				<h1 class='products-title'>Samsung Galaxy A11 6.4" 2GB RAM 32GB</h1>
				<div class='ratings-container'>
					<div class='ratings'>
						<div class='ratings-val' style={{ width: '80%' }}></div>
					</div>
					<a class='ratings-text' id='review-link' href='#'>
						( 2 Reviews )
					</a>
				</div>
				<div class='product-price'>UGX 539,999</div>
				<div class='product-content'>
					<p>
						Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
						luctus metus libero eu augue. Morbi purus libero, faucibus
						adipiscing. Sed lectus.{' '}
					</p>
				</div>
				<div class='details-filter-row details-row-size'>
					<label>Color:</label>
					<div>
						<div class='widget-body'>
							<div class='filter-colors'>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(184, 113, 69)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(240, 192, 74)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(51, 51, 51)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(204, 51, 51)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(51, 153, 204)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(102, 153, 51)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(242, 113, 156)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
								<a
									class=''
									href='/react/molla/shop/sidebar/3cols'
									style={{ background: 'rgb(235, 235, 235)' }}
								>
									<span class='sr-only'>Color Name</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class='details-filter-row details-row-size'>
					<label for='size'>RAM Size:</label>
					<div class='select-custom'>
						<select name='size' id='size' class='form-control'>
							<option value='#' selected=''>
								Select a RAM
							</option>
							<option value='s'>12GB</option>
							<option value='m'>14GB</option>
							<option value='l'>20GB</option>
							<option value='xl'>64GB</option>
						</select>
					</div>
					<a class='size-guide' href='/react/molla/product/default/27'>
						<i class='icon-th-list'></i>specifications
					</a>
				</div>
				<div class='details-filter-row details-row-size'>
					<label for='qty'>Qty:</label>
					<div class='product-details-quantity'>
						<input
							type='number'
							id='qty'
							class='form-control'
							min='1'
							max='16'
							step='1'
							data-decimals='0'
							required=''
							value='1'
							style={{ display: 'none' }}
						/>
						<div class='input-group input-spinner'>
							<div class='input-group-prepend'>
								<button
									style={{ minWidth: '26px' }}
									class='btn btn-decrement btn-spinner'
									type='button'
								>
									<i class='fas fa-minus'></i>
								</button>
							</div>
							<input
								type='text'
								style={{ textAlign: 'center' }}
								class='form-control '
								required=''
								placeholder=''
							/>
							<div class='input-group-append'>
								<button
									style={{ minWidth: '26px' }}
									class='btn btn-increment btn-spinner'
									type='button'
								>
									<i class='fas fa-plus'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class='product-details-action'>
					<button class='btn-product btn-cart'>
						<span>add to cart</span>
					</button>
					<button class='btn-product btn-cart ml-3'>
						<span>buy now</span>
					</button>
					<div class='details-action-wrapper'>
						<button class='btn-product btn-wishlist pl-0 pr-0' title='Wishlist'>
							<span>Add to Wishlist</span>
						</button>
					</div>
				</div>
				<div class='product-details-footer'>
					<div class='product-cat'>
						<span>Brand: </span>
						<span class='mr-0'>
							<a href='#'>Samsung </a>,{' '}
						</span>
						<span class='mr-0'>
							<a href='#'>IPhone</a>,{' '}
						</span>
						<span class='mr-0'>
							<a href='#'>Techno</a>
						</span>
					</div>
					<div class='social-icons social-icons-sm'>
						<span class='social-label'>Share:</span>
						<a class='social-icon' title='Facebook' target='_blank' href='#'>
							<i class='fab fa-facebook-f'></i>
						</a>
						<a class='social-icon' title='Twitter' target='_blank' href='#'>
							<i class='fab fa-twitter'></i>
						</a>
						<a class='social-icon' title='Instagram' target='_blank' href='#'>
							<i class='fab fa-instagram'></i>
						</a>
						<a
							class='social-icon'
							title='Pinterest'
							target='_blank'
							href='/react/molla/product/default/27'
						>
							<i class='fab fa-pinterest'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
