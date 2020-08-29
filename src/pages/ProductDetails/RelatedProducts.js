import React from 'react';

const RelatedProducts = () => {
	return (
        <>
		<div class='owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag'>
			<div class='owl-stage-outer'>
				<div
					class='owl-stage details-related'
				>
					<div class='owl-item' style={{width: '277px', marginRight: '20px'}}>
						<div class='product product-7 text-center'>
							<figure class='product-media'>
								<span class='product-label label-new'>New</span>
								<a href='/react/molla/product/default/22'>
									<img
										src='images/home/home8.jpeg'
										alt='Product'
										class='product-image'
									/>
								</a>
								<div class='product-action-vertical'>
									<button
										class='btn-product-icon btn-wishlist remove-from-wishlist'
										title='Add to wishlist'
									>
										<span>add to wishlist</span>
									</button>
									<button
										class='btn-product-icon btn-quickview'
										title='Quick view'
									>
										<span>Quick view</span>
									</button>
									<button class='btn-product-icon btn-compare' title='Compare'>
										<span>Compare</span>
									</button>
								</div>
								<div class='product-action'>
									<button class='btn-product btn-cart'>
										<span>add to cart</span>
									</button>
								</div>
							</figure>
							<div class='product-body'>
								<div class='product-cat'>
									<span class='mr-0'>
										<a href='/react/molla/product/default/27'>Women</a>
									</span>
								</div>
								<h3 class='product-title'>
									<a href='/react/molla/product/default/27'>
										Brown paperbag waist pencil skirt
									</a>
								</h3>
								<div class='product-price'>$60.00</div>
								<div class='ratings-container'>
									<div class='ratings'>
										<div class='ratings-val' style={{width: '20%'}}></div>
									</div>
									<span class='ratings-text'>( 2 Reviews )</span>
								</div>
								<div class='product-nav product-nav-thumbs'>
									<a class='active' href='/react/molla/product/default/27'>
										<img
											src='images/home/home7.jpeg'
											alt='product desc'
										/>
									</a>
									<a class='' href='/react/molla/product/default/27'>
										<img
											src='images/home/home7.jpegg'
											alt='product desc'
										/></a>
										<a class='' href='/react/molla/product/default/27'>
											<img
												src='images/home/home8.jpeg'
												alt='product desc'
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							class='owl-item active'
							style={{width: '277px', marginRight: '20px'}}
						>
							<div class='product product-7 text-center'>
								<figure class='product-media'>
									<span class='product-label label-out'>Out of Stock</span>
									<a href='/react/molla/product/default/23'>
										<img
											src='images/home/home10.jpeg'
											alt='Product'
											class='product-image'
										/>
									</a>
									<div class='product-action-vertical'>
										<button
											class='btn-product-icon btn-wishlist remove-from-wishlist'
											title='Add to wishlist'
										>
											<span>add to wishlist</span>
										</button>
										<button
											class='btn-product-icon btn-quickview'
											title='Quick view'
										>
											<span>Quick view</span>
										</button>
										<button
											class='btn-product-icon btn-compare'
											title='Compare'
										>
											<span>Compare</span>
										</button>
									</div>
									<div class='product-action'>
										<button class='btn-product btn-cart'>
											<span>add to cart</span>
										</button>
									</div>
								</figure>
								<div class='product-body'>
									<div class='product-cat'>
										<span class='mr-0'>
											<a href='/react/molla/product/default/27'>Jackets</a>
										</span>
									</div>
									<h3 class='product-title'>
										<a href='/react/molla/product/default/27'>
											Khaki utility boiler jumpsuit
										</a>
									</h3>
									<div class='product-price'>
										<span class='out-price'>$120.00</span>
									</div>
									<div class='ratings-container'>
										<div class='ratings'>
											<div class='ratings-val' style={{width: '80%'}}></div>
										</div>
										<span class='ratings-text'>( 6 Reviews )</span>
									</div>
								</div>
							</div>
						</div>
						<div
							class='owl-item active'
							style={{width: '277px', marginRight: '20px'}}
						>
							<div class='product product-7 text-center'>
								<figure class='product-media'>
									<span class='product-label label-top'>Top</span>
									<a href='/react/molla/product/default/24'>
										<img
											src='images/home/home12.jpeg'
											alt='Product'
											class='product-image'
										/>
									</a>
									<div class='product-action-vertical'>
										<button
											class='btn-product-icon btn-wishlist remove-from-wishlist'
											title='Add to wishlist'
										>
											<span>add to wishlist</span>
										</button>
										<button
											class='btn-product-icon btn-quickview'
											title='Quick view'
										>
											<span>Quick view</span>
										</button>
										<button
											class='btn-product-icon btn-compare'
											title='Compare'
										>
											<span>Compare</span>
										</button>
									</div>
									<div class='product-action'>
										<button class='btn-product btn-cart'>
											<span>add to cart</span>
										</button>
									</div>
								</figure>
								{/* <div class='product-body'>
									<div class='product-cat'>
										<span class='mr-0'>
											<a href='/react/molla/product/default/27'>Shoes</a>
										</span>
									</div>
									<h3 class='product-title'>
										<a href='/react/molla/product/default/27'>
											Light brown studded Wide fit wedges
										</a>
									</h3>
									<div class='product-price'>$110.00</div>
									<div class='ratings-container'>
										<div class='ratings'>
											<div class='ratings-val' style='width: 80%;'></div>
										</div>
										<span class='ratings-text'>( 1 Reviews )</span>
									</div>
									<div class='product-nav product-nav-thumbs'>
										<a class='active' href='/react/molla/product/default/27'>
											<img
												src='/react/molla/assets/images/products/product-11-thumb.jpg'
												alt='product desc'
											/>
										</a>
										<a class='' href='/react/molla/product/default/27'>
											<img
												src='/react/molla/assets/images/products/product-11-2-thumb.jpg'
												alt='product desc'
											/>
										</a>
										<a class='' href='/react/molla/product/default/27' />
										<img
											src='/react/molla/assets/images/products/product-11-3-thumb.jpg'
											alt='product desc'
										/>
									</a>
								</div> */}
							</div>
						</div>
					</div>
					
					
				</div>
			</div>
			<div class='owl-nav'>
			<div class='owl-prev'>
			 		<i class='icon-angle-left'></i>
			 	</div>
			 	<div class='owl-next disabled'>
			 		<i class='icon-angle-right'></i>
			 	</div>
			 </div>
			 <div class='owl-dots disabled'></div>
            </>
	);
};

export default RelatedProducts;
