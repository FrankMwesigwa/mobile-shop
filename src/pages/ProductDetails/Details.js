/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'

const Details = () => {
	return (
		<div class='col-md-6'>
			<div class='product-details '>
				<h1 class='product-title'>Dark yellow lace cut out swing dress</h1>
				<div class='ratings-container'>
					<div class='ratings'>
						<div class='ratings-val' style={{width: '80%'}}></div>
					</div>
					<a
						class='ratings-text'
						id='review-link'
						href='#'
					>
						( 2 Reviews )
					</a>
				</div>
				<div class='product-price'>$84.00</div>
				<div class='product-content'>
					<p>
						Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
						luctus metus libero eu augue. Morbi purus libero, faucibus
						adipiscing. Sed lectus.{' '}
					</p>
				</div>
				<div class='details-filter-row details-row-size'>
					<label>Color:</label>
					<div class='product-nav product-nav-thumbs'>
						<a class='active' href='/react/molla/product/default/27'>
							<img
								src='images/home/home8.jpeg'
								alt='product desc'
							/>
						</a>
						<a class='' href='/react/molla/product/default/27'>
							<img
								src='images/home/home8.jpeg'
								alt='product desc'
							/>
						</a>
					</div>
				</div>
				<div class='details-filter-row details-row-size'>
					<label for='size'>Size:</label>
					<div class='select-custom'>
						<select name='size' id='size' class='form-control'>
							<option value='#' selected=''>
								Select a size
							</option>
							<option value='s'>Small</option>
							<option value='m'>Medium</option>
							<option value='l'>Large</option>
							<option value='xl'>Extra Large</option>
						</select>
					</div>
					<a class='size-guide' href='/react/molla/product/default/27'>
						<i class='icon-th-list'></i>size guide
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
							style={{display: 'none'}}
						/>
						<div class='input-group input-spinner'>
							<div class='input-group-prepend'>
								<button
									style={{minWidth: '26px'}}
									class='btn btn-decrement btn-spinner'
									type='button'
								>
									<i class='icon-minus'></i>
								</button>
							</div>
							<input
								type='text'
								style={{textAlign: 'center'}}
								class='form-control '
								required=''
								placeholder=''
							/>
							<div class='input-group-append'>
								<button
									style={{minWidth: '26px'}}
									class='btn btn-increment btn-spinner'
									type='button'
								>
									<i class='icon-plus'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class='product-details-action'>
                    <Link to='/cart'>
					<button class='btn-product btn-cart'>
						<span>add to cart</span>
					</button>
                    </Link>
					<div class='details-action-wrapper'>
						<button class='btn-product btn-wishlist pl-0 pr-0' title='Wishlist'>
							<span>Add to Wishlist</span>
						</button>
						<button class='btn-product btn-compare pr-0' title='Compare'>
							<span>Add to Compare</span>
						</button>
					</div>
				</div>
				<div class='product-details-footer'>
					<div class='product-cat'>
						<span>Category: </span>
						<span class='mr-0'>
							<a href='/react/molla/product/default/27'>Women</a>,{' '}
						</span>
						<span class='mr-0'>
							<a href='/react/molla/product/default/27'>Dresses</a>,{' '}
						</span>
						<span class='mr-0'>
							<a href='/react/molla/product/default/27'>Yellow</a>
						</span>
					</div>
					<div class='social-icons social-icons-sm'>
						<span class='social-label'>Share:</span>
						<a
							class='social-icon'
							title='Facebook'
							target='_blank'
							href='/react/molla/product/default/27'
						>
							<i class='icon-facebook-f'></i>
						</a>
						<a
							class='social-icon'
							title='Twitter'
							target='_blank'
							href='/react/molla/product/default/27'
						>
							<i class='icon-twitter'></i>
						</a>
						<a
							class='social-icon'
							title='Instagram'
							target='_blank'
							href='/react/molla/product/default/27'
						>
							<i class='icon-instagram'></i>
						</a>
						<a
							class='social-icon'
							title='Pinterest'
							target='_blank'
							href='/react/molla/product/default/27'
						>
							<i class='icon-pinterest'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
