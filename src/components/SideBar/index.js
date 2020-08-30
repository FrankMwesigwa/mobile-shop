import React from 'react';
import './styles.css';

const index = () => {
	return (
		<>
			<aside class='sidebar sidebar-shop'>
				<div class=''>
					<div class='widget widget-clean'>
						<label>Filters:</label>
						<a href='#a' class='sidebar-filter-clear'>
							Clear All
						</a>
					</div>
					<div class='widget widget-collapsible'>
						<h3 class='widget-title'>
							<a
								href='#category'
								role='button'
								aria-expanded='true'
								aria-controls='widget-1'
							>
								TV Sets
							</a>
							{/* <span class='item-count'><i class="fas fa-chevron-down"></i></span> */}
						</h3>
						<div>
							<div class='widget-body'>
								<div class='filter-items filter-items-count'>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Samsung
												<input type='checkbox' checked='checked' />
												<span class='checkmark'></span>
											</label>
										</div>

										<span class='item-count'>8</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												LG
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>0</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Sony
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Hisense
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>2</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Phillips
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Toshiba
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>2</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='widget widget-collapsible'>
						<h3 class='widget-title'>
							<a
								href='#category'
								role='button'
								aria-expanded='true'
								aria-controls='widget-1'
							>
								Mobile Phones
							</a>
							{/* <span class='item-count'><i class="fas fa-chevron-down"></i></span> */}
						</h3>
						<div>
							<div class='widget-body'>
								<div class='filter-items filter-items-count'>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Apple
												<input type='checkbox' checked='checked' />
												<span class='checkmark'></span>
											</label>
										</div>

										<span class='item-count'>8</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Samsung
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>0</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Huawei
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Xaomi/ Redmi
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>2</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Google pixel
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												OnePlus
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>2</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Tecno
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Infinx
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>2</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Oppo
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Nokia
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>2</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='widget widget-collapsible'>
						<h3 class='widget-title'>
							<a
								href='#category'
								role='button'
								aria-expanded='true'
								aria-controls='widget-1'
							>
								Condition
							</a>
							{/* <span class='item-count'><i class="fas fa-chevron-down"></i></span> */}
						</h3>
						<div>
							<div class='widget-body'>
								<div class='filter-items filter-items-count'>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Brand New
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>

										<span class='item-count'>8</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Used
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>0</span>
									</div>
									<div class='filter-item'>
										<div class='custom-control custom-checkbox'>
											<label class='check-custom'>
												Refbursied
												<input type='checkbox' />
												<span class='checkmark'></span>
											</label>
										</div>
										<span class='item-count'>4</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='widget widget-collapsible'>
						<h3 class='widget-title'>
							<a
								href='#category'
								role='button'
								aria-expanded='true'
								aria-controls='widget-1'
							>
								Color
							</a>
							{/* <span class='item-count'><i class="fas fa-chevron-down"></i></span> */}
						</h3>
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

					<div class='widget widget-collapsible'>
						<h3 class='widget-title'>
							<a
								href='#category'
								role='button'
								aria-expanded='true'
								aria-controls='widget-1'
							>
								Price Range
							</a>
							{/* <span class='item-count'><i class="fas fa-chevron-down"></i></span> */}
						</h3>
						<div>
							<div class='widget-body'>
								<div class='filter-items filter-items-count'>
									<div class='filter-item'>
										<label class='check-custom'>
											200,000 to 500,000
											<input type='checkbox' />
											<span class='checkmark'></span>
										</label>
									</div>
									<div class='filter-item'>
										<label class='check-custom'>
											500,000 to 1,000,000
											<input type='checkbox' />
											<span class='checkmark'></span>
										</label>
									</div>
									<div class='filter-item'>
										<label class='check-custom'>
											1,000,000 to 2,000,0000
											<input type='checkbox' />
											<span class='checkmark'></span>
										</label>
									</div>
									<div class='filter-item'>
										<label class='check-custom'>
											2,000,000 to 3,000,0000
											<input type='checkbox' />
											<span class='checkmark'></span>
										</label>
									</div>
									<div class='filter-item'>
										<label class='check-custom'>
											3,000,000 to 4,000,0000
											<input type='checkbox' />
											<span class='checkmark'></span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
			<div class='sidebar-filter-overlay'></div>
		</>
	);
};

export default index;
