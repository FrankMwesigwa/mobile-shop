import React from 'react';
import Layout from '../../components/Layout';

const index = () => {
	return (
		<Layout>
			<div class='checkout'>
				<div class='container'>
					<div class='checkout-discount'>
						<form action='#'>
							<input
								type='text'
								class='form-control'
								required=''
								id='checkout-discount-input'
							/>
							<label for='checkout-discount-input' class='text-truncate'>
								Have a coupon? <span>Click here to enter your code</span>
							</label>
						</form>
					</div>
					<form action='#'>
						<div class='row'>
							<div class='col-lg-9'>
								<h2 class='checkout-title'>Billing Details</h2>
								<div class='row'>
									<div class='col-sm-6'>
										<label>First Name *</label>
										<input type='text' class='form-control' required='' />
									</div>
									<div class='col-sm-6'>
										<label>Last Name *</label>
										<input type='text' class='form-control' required='' />
									</div>
								</div>
								<label>Company Name (Optional)</label>
								<input type='text' class='form-control' />
								<label>Country *</label>
								<input type='text' class='form-control' required='' />
								<label>Street address *</label>
								<input
									type='text'
									class='form-control'
									placeholder='House number and Street name'
									required=''
								/>
								<input
									type='text'
									class='form-control'
									placeholder='Appartments, suite, unit etc ...'
									required=''
								/>
								<div class='row'>
									<div class='col-sm-6'>
										<label>Town / City *</label>
										<input type='text' class='form-control' required='' />
									</div>
									<div class='col-sm-6'>
										<label>State / County *</label>
										<input type='text' class='form-control' required='' />
									</div>
								</div>
								<div class='row'>
									<div class='col-sm-6'>
										<label>Postcode / ZIP *</label>
										<input type='text' class='form-control' required='' />
									</div>
									<div class='col-sm-6'>
										<label>Phone *</label>
										<input type='tel' class='form-control' required='' />
									</div>
								</div>
								{/* <label>Email address *</label>
               <input type="email" class="form-control" required=""/>
               <s class="custom-control custom-checkbox">
                   <input type="checkbox" class="custom-control-input" id="checkout-create-acc"/><label class="custom-control-label" for="checkout-create-acc">Create an account?</label></s (optional)</label>
               <textarea class="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
               <div class="custom-control custom-checkbox">
                   <input type="checkbox" class="custom-control-input" id="checkout-diff-address"/>
                   <label class="custom-control-label" for="checkout-diff-address">Ship to a different address?</label></div>
               <label>Order note */}
							</div>
							<aside class='col-lg-3'>
								<div class='summary'>
									<h3 class='summary-title'>Your Order</h3>
									<table class='table table-summary'>
										<thead>
											<tr>
												<th>Product</th>
												<th>Total</th>
											</tr>
										</thead>
										<tbody>
											<tr class='summary-subtotal'>
												<td>Subtotal:</td>
												<td>$0.00</td>
											</tr>
											<tr>
												<td>Shipping:</td>
												<td>Free shipping</td>
											</tr>
											<tr class='summary-total'>
												<td>Total:</td>
												<td>$0.00</td>
											</tr>
										</tbody>
									</table>
									<div class='accordion-summary'>
										<div class='card undefined'>
											<div class='card-header'>
												<h2 class='card-title'>
													<span
														class='toggle-button expanded'
														style={{height: 'auto'}}
													>
														Direct bank transfer
													</span>
												</h2>
											</div>
											<div>
												<div class='card-body'>
													Make your payment directly into our bank account.
													Please use your Order ID as the payment reference.
													Your order will not be shipped until the funds have
													cleared in our account.
												</div>
											</div>
										</div>
										<div class='card undefined'>
											<div class='card-header'>
												<h2 class='card-title'>
													<span
														class='toggle-button collapsed'
														style={{height: 'auto'}}
													>
														Check payments
													</span>
												</h2>
											</div>
											<div style={{display: 'none'}}>
												<div class='card-body'>
													Ipsum dolor sit amet, consectetuer adipiscing elit.
													Donec odio. Quisque volutpat mattis eros. Nullam
													malesuada erat ut turpis.
												</div>
											</div>
										</div>
										<div class='card undefined'>
											<div class='card-header'>
												<h2 class='card-title'>
													<span
														class='toggle-button collapsed'
														style={{height: 'auto'}}
													>
														Cash on delivery
													</span>
												</h2>
											</div>
											<div style={{display: 'none'}}>
												<div class='card-body'>
													Quisque volutpat mattis eros. Lorem ipsum dolor sit
													amet, consectetuer adipiscing elit. Donec odio.
													Quisque volutpat mattis eros.
												</div>
											</div>
										</div>
										<div class='card undefined'>
											<div class='card-header'>
												<h2 class='card-title'>
													<span
														class='toggle-button collapsed'
														style={{height: 'auto'}}
													>
														PayPal
													</span>
												</h2>
											</div>
											<div style={{display: 'none'}}>
												<div class='card-body'>
													<small class='float-right paypal-link'>
														What is PayPal?
													</small>
													Nullam malesuada erat ut turpis. Suspendisse urna
													nibh, viverra non, semper suscipit, posuere a, pede.
													Donec nec justo eget felis facilisis fermentum.
												</div>
											</div>
										</div>
										<div class='card undefined'>
											<div class='card-header'>
												<h2 class='card-title'>
													<span
														class='toggle-button collapsed'
														style={{height: 'auto'}}
													>
														Credit Card (Stripe)
													</span>
												</h2>
											</div>
											<div style={{display: 'none'}}>
												<div class='card-body'>
													<img
														src='/react/molla/assets/images/payments-summary.png'
														alt='payments cards'
													/>
													Donec nec justo eget felis facilisis fermentum.Lorem
													ipsum dolor sit amet, consectetuer adipiscing elit.
													Donec odio. Quisque volutpat mattis eros. Lorem ipsum
													dolor sit ame.
												</div>
											</div>
										</div>
									</div>
									<button
										type='submit'
										class='btn btn-outline-primary-2 btn-order btn-block'
									>
										<span class='btn-text'>Place Order</span>
										<span class='btn-hover-text'>Proceed to Checkout</span>
									</button>
								</div>
							</aside>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default index;
