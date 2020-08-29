import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/TopDetails';

const index = () => {
	return (
		<Layout>
			<div class='cart'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-9'>
							<table class='table table-cart table-mobile'>
								<thead>
									<tr>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<p class='pl-2 pt-1 pb-1'> No Products in Cart </p>
								</tbody>
							</table>
							<div class='cart-bottom'>
								<div class='cart-discount' style={{ minHeight: 'auto' }}>
									<form action='#'>
										<div class='input-group'>
											<input
												type='text'
												class='form-control'
												placeholder='coupon code'
											/>
											<div class='input-group-append'>
												<button class='btn btn-outline-primary-2' type='submit'>
													<i class='icon-long-arrow-right'></i>
												</button>
											</div>
										</div>
									</form>
								</div>
								<button class='btn btn-outline-dark-2'>
									<span>UPDATE CART</span>
									<i class='icon-refresh'></i>
								</button>
							</div>
						</div>
						<aside class='col-lg-3'>
							<div class='summary summary-cart'>
								<h3 class='summary-title'>Cart Total</h3>
								<table class='table table-summary'>
									<tbody>
										<tr class='summary-subtotal'>
											<td>Subtotal:</td>
											<td>$0.00</td>
										</tr>
										<tr class='summary-shipping'>
											<td>Shipping:</td>
											<td>&nbsp;</td>
										</tr>
										<tr class='summary-shipping-row'>
											<td>
												<div class='custom-control custom-radio'>
													<input
														type='radio'
														id='free-shipping'
														name='shipping'
														class='custom-control-input'
														checked=''
													/>
													<label
														class='custom-control-label'
														for='free-shipping'
													>
														Free Shipping
													</label>
												</div>
											</td>
											<td>$0.00</td>
										</tr>
										<tr class='summary-shipping-row'>
											<td>
												<div class='custom-control custom-radio'>
													<input
														type='radio'
														id='standard-shipping'
														name='shipping'
														class='custom-control-input'
													/>
													<label
														class='custom-control-label'
														for='standard-shipping'
													>
														Standard:
													</label>
												</div>
											</td>
											<td>$10.00</td>
										</tr>
										<tr class='summary-shipping-row'>
											<td>
												<div class='custom-control custom-radio'>
													<input
														type='radio'
														id='express-shipping'
														name='shipping'
														class='custom-control-input'
													/>
													<label
														class='custom-control-label'
														for='express-shipping'
													>
														Express:
													</label>
												</div>
											</td>
											<td>$20.00</td>
										</tr>
										<tr class='summary-shipping-estimate'>
											<td>
												Estimate for Your Country
												<br />{' '}
												<a href='/react/molla/shop/dashboard'>Change address</a>
											</td>
											<td>&nbsp;</td>
										</tr>
										<tr class='summary-total'>
											<td>Total:</td>
											<td>$0.00</td>
										</tr>
									</tbody>
								</table>
								<Link
									class='btn btn-outline-primary-2 btn-order btn-block'
									to='/checkout'
								>
									PROCEED TO CHECKOUT
								</Link>
							</div>
							<Link class='btn btn-outline-dark-2 btn-block mb-3' to='/'>
								<span>CONTINUE SHOPPING</span>
								<i class='icon-refresh'></i>
							</Link>
						</aside>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default index;
