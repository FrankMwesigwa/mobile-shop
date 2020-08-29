/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
	return (
		<footer class='footer '>
			<div class='footer-middle '>
				<div class='container'>
					<div class='row'>
						<div class='col-sm-6 col-lg-3'>
							<div class='widget widget-about'>
								<img
									src='images/logo.jpeg'
									class='footer-logo'
									alt='Footer Logo'
									width='105'
									height='25'
								/>
								<p>
									Praesent dapibus, neque id cursus ucibus, tortor neque egestas
									augue, eu vulputate magna eros eu erat.{' '}
								</p>
								<div class='social-icons'>
									<a
										href='https://www.facebook.com/'
										rel='noopener noreferrer'
										class='social-icon'
										target='_blank'
										title='Facebook'
									>
										<i class='icon-facebook-f'></i>
									</a>
									<a
										href='https://twitter.com/'
										rel='noopener noreferrer'
										class='social-icon'
										target='_blank'
										title='Twitter'
									>
										<i class='icon-twitter'></i>
									</a>
									<a
										href='https://instagram.com/'
										rel='noopener noreferrer'
										class='social-icon'
										target='_blank'
										title='Instagram'
									>
										<i class='icon-instagram'></i>
									</a>
									<a
										href='https://youtube.com/'
										rel='noopener noreferrer'
										class='social-icon'
										target='_blank'
										title='Youtube'
									>
										<i class='icon-youtube'></i>
									</a>
									<a
										href='https://pinterest.com/'
										rel='noopener noreferrer'
										class='social-icon'
										target='_blank'
										title='Pinterest'
									>
										<i class='icon-pinterest'></i>
									</a>
								</div>
							</div>
						</div>
						<div class='col-sm-6 col-lg-3'>
							<div class='widget'>
								<h4 class='widget-title'>Useful Links</h4>
								<ul class='widget-list'>
									<li>
										<a href='#'>About MobileShop Ug</a>
									</li>
									<li>
										<a href='#'>How to shop on MobileShop Ug</a>
									</li>
									<li>
										<a href='#'>FAQ</a>
									</li>
									<li>
										<a href='#'>Contact us</a>
									</li>
									<li>
										<a href='login'>Log in</a>
									</li>
								</ul>
							</div>
						</div>
						<div class='col-sm-6 col-lg-3'>
							<div class='widget'>
								<h4 class='widget-title'>Customer Service</h4>
								<ul class='widget-list'>
									<li>
										<a href='#'>
											Payment Methods
										</a>
									</li>
									<li>
										<a href='#'>
											Money-back guarantee!
										</a>
									</li>
									<li>
										<a href='#'>Returns</a>
									</li>
									<li>
										<a href='#'>Shipping</a>
									</li>
									<li>
										<a href='#'>
											Terms and conditions
										</a>
									</li>
									<li>
										<a href='#'>Privacy Policy</a>
									</li>
								</ul>
							</div>
						</div>
						<div class='col-sm-6 col-lg-3'>
							<div class='widget'>
								<h4 class='widget-title'>My Account</h4>
								<ul class='widget-list'>
									<li>
										<a href='#'>Sign In</a>
									</li>
									<li>
										<a href='#'>View Cart</a>
									</li>
									<li>
										<a href='#map'>My Wishlist</a>
									</li>
									<li>
										<a href='#'>Track My Order</a>
									</li>
									<li>
										<a href='#'>Help</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='footer-bottom'>
				<div class='container'>
					<p class='footer-copyright'>
						Copyright © 2020 MobileShop Ug. All Rights Reserved.
					</p>
					<figure class='footer-payments'>
						<img
							src='images/home/payments.png'
							alt='Payment methods'
							width='272'
							height='20'
						/>
					</figure>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
