/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
	return (
		<div class='header-top'>
			<div class='container'>
				<div class='header-left'>
					<div class='header-drop'>
						<span>Eng</span>
					</div>
				</div>
				<div class='header-right'>
					<ul class='top-menu'>
						<li>
							<ul>
								<li>
                           <i class="fas fa-phone"></i>Call: +256 779 825056
								</li>
								<li>
									<Link to='/wishlist'>
										<i class="far fa-heart"></i>Wishlist <span>(0)</span>
									</Link>
								</li>
								<li>
									<Link to='/about'>About Us</Link>
								</li>
								<li>
									<Link to='/contact'>Contact Us</Link>
								</li>
								<li>
									<Link
										data-toggle='modal'
										to='/react/molla/shop/sidebar/list#login'
									>
										<i class="far fa-user"></i>Login
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
