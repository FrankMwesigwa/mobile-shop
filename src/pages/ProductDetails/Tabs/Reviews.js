import React from 'react';

const Reveiews = () => {
	return (
		<div class='reviews'>
			<h3>Reviews (2)</h3>
			<div class='review'>
				<div class='row no-gutters'>
					<div class='col-auto'>
						<h4>
							<a href='/react/molla/product/default/27'>Samanta J.</a>
						</h4>
						<div class='ratings-container'>
							<div class='ratings'>
								<div class='ratings-val' style={{ width: '80%' }}></div>
							</div>
						</div>
						<span class='review-date'>6 days ago</span>
					</div>
					<div class='col'>
						<h4>Good, perfect size</h4>
						<div class='review-content'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ducimus cum dolores assumenda asperiores facilis porro
								reprehenderit animi culpa atque blanditiis commodi perspiciatis
								doloremque, possimus, explicabo, autem fugit beatae quae
								voluptas!
							</p>
						</div>
						<div class='review-action'>
							<a href='/react/molla/product/default/27'>
								<i class='icon-thumbs-up'></i>Helpful (2)
							</a>
							<a href='/react/molla/product/default/27'>
								<i class='icon-thumbs-down'></i>Unhelpful (0)
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class='review'>
				<div class='row no-gutters'>
					<div class='col-auto'>
						<h4>
							<a href='/react/molla/product/default/27'>John Doe</a>
						</h4>
						<div class='ratings-container'>
							<div class='ratings'>
								<div class='ratings-val' style={{ width: '100%' }}></div>
							</div>
						</div>
						<span class='review-date'>5 days ago</span>
					</div>
					<div class='col'>
						<h4>Very good</h4>
						<div class='review-content'>
							<p>
								Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum
								blanditiis laudantium iste amet. Cum non voluptate eos enim, ab
								cumque nam, modi, quas iure illum repellendus, blanditiis
								perspiciatis beatae!
							</p>
						</div>
						<div class='review-action'>
							<a href='/react/molla/product/default/27'>
								<i class='icon-thumbs-up'></i>Helpful (0)
							</a>
							<a href='/react/molla/product/default/27'>
								<i class='icon-thumbs-down'></i>Unhelpful (0)
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reveiews;
