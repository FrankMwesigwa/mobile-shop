/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const DetailsTop = () => {
    return (
            
            <div class='col-md-6'>
			<div class='product-gallery product-gallery-vertical'>
				<div class='row'>
					<figure class='product-main-image' index='0'>
						<div style={{userSelect: 'none', cursor: 'crosshair'}}>
							<div style={{position: 'relative', cursor: 'move'}}>
								<img src='images/home/home8.jpeg' alt='Example' className="details-img-small" />
								<div className="details-box">
									<img
										src='images/home/home8.jpeg'
                                        alt='Example'
                                        className="details-img"
									/>
								</div>
							</div>
						</div>
						<a
							id='btn-product-gallery'
							class='btn-product-gallery'
							href='/react/molla/product/default/27'
						>
							<i class='icon-arrows'></i>
						</a>
					</figure>
					<div id='product-zoom-gallery' class='product-image-gallery'>
						<a
							class='product-gallery-item active'
							data-image='images/home/home8.jpeg'
							data-zoom-image='images/home/home8.jpeg'
							href='#'
						>
							<img
								src='images/home/home8.jpeg'
								alt='product back'
							/>
						</a>
						<a
							class='product-gallery-item '
							data-image='images/home/home8.jpeg'
							data-zoom-image='images/home/home8.jpeg'
							href='#'
						>
							<img
								src='images/home/home8.jpeg'
								alt='product back'
							/>
						</a>
						<a
							class='product-gallery-item '
							data-image='images/home/home8.jpeg'
							data-zoom-image='images/home/home8.jpeg'
							href='#'
						>
							<img
								src='images/home/home8.jpeg'
								alt='product back'
							/>
						</a>
						<a
							class='product-gallery-item '
							data-image='images/home/home8.jpeg'
							data-zoom-image='images/home/home8.jpeg'
							href='#'
						>
							<img
								src='images/home/home8.jpeg'
								alt='product back'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
    )
}

export default DetailsTop
