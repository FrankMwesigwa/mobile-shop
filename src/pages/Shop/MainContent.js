import React from 'react'

const MainContent = () => {
    return (
        <>
   <div class="toolbox">
      <div class="toolbox-left">
         <div class="toolbox-info">Showing <span>9 of 47</span> Products</div>
      </div>
      <div class="toolbox-right">
         <div class="toolbox-sort">
            <label for="sortby">Sort by:</label>
            <div class="select-custom">
               <select name="sortby" id="sortby" class="form-control">
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Most Rated</option>
                  <option value="date">Date</option>
               </select>
            </div>
         </div>
         <div class="toolbox-layout">
            <button class="btn-layout ">
               <svg width="16" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="10" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="10" height="4"></rect>
               </svg>
            </button>
            <button class="btn-layout ">
               <svg width="10" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="4" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="4" height="4"></rect>
               </svg>
            </button>
            <button class="btn-layout active">
               <svg width="16" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="4" height="4"></rect>
                  <rect x="12" y="0" width="4" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="4" height="4"></rect>
                  <rect x="12" y="6" width="4" height="4"></rect>
               </svg>
            </button>
            <button class="btn-layout ">
               <svg width="22" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="4" height="4"></rect>
                  <rect x="12" y="0" width="4" height="4"></rect>
                  <rect x="18" y="0" width="4" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="4" height="4"></rect>
                  <rect x="12" y="6" width="4" height="4"></rect>
                  <rect x="18" y="6" width="4" height="4"></rect>
               </svg>
            </button>
         </div>
      </div>
   </div>
   <div class="products mb-3">
      <div class="row">
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <span class="product-label label-circle label-new">New</span><a href="/react/molla/product/default/47"><img src="images/home/home3.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Women</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Brown paperbag waist pencil skirt</a></h3>
                  <div class="product-price">$60.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '20%'}}></div>
                     </div>
                     <span class="ratings-text">( 2 Reviews )</span>
                  </div>
                  <div class="product-nav product-nav-dots"><a class="active" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(204, 153, 102)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(51, 51, 51)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(123, 93, 54)'}}></a></div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <a href="/react/molla/product/default/46"><img src="images/home/home8.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Dresses</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Dark yellow lace cut out swing dress</a></h3>
                  <div class="product-price">$84.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '0%'}}></div>
                     </div>
                     <span class="ratings-text">( 0 Reviews )</span>
                  </div>
                  <div class="product-nav product-nav-dots"><a class="active" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(235, 235, 235)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(234, 188, 78)'}}></a></div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <span class="product-label label-out">Out Of Stock</span><a href="/react/molla/product/default/45"><img src="images/home/home6.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Jackets</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Khaki utility boiler jumpsuit</a></h3>
                  <div class="product-price"><span class="out-price">$120.00</span></div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '80%'}}></div>
                     </div>
                     <span class="ratings-text">( 6 Reviews )</span>
                  </div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <a href="/react/molla/product/default/44"><img src="images/home/home18.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Jeans</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Blue utility pinafore denim dress</a></h3>
                  <div class="product-price">$76.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '20%'}}></div>
                     </div>
                     <span class="ratings-text">( 2 Reviews )</span>
                  </div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <span class="product-label label-circle label-new">New</span><a href="/react/molla/product/default/43"><img src="images/home/home12.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Shoes</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Beige knitted elastic runner shoes</a></h3>
                  <div class="product-price">$84.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '0%'}}></div>
                     </div>
                     <span class="ratings-text">( 0 Reviews )</span>
                  </div>
                  <div class="product-nav product-nav-dots"><a class="active" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(216, 197, 176)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(51, 51, 51)'}}></a></div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <a href="/react/molla/product/default/42"><img src="images/home/home21.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Bags</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Orange saddle lock front chain cross body bag</a></h3>
                  <div class="product-price">$52.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '80%'}}></div>
                     </div>
                     <span class="ratings-text">( 1 Reviews )</span>
                  </div>
                  <div class="product-nav product-nav-dots"><a class="active" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(224, 122, 61)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(123, 93, 54)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(218, 193, 167)'}}></a></div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <a href="/react/molla/product/default/41"><img src="images/home/home15.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Shoes</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Light brown studded Wide fit wedges</a></h3>
                  <div class="product-price">$110.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '80%'}}></div>
                     </div>
                     <span class="ratings-text">( 1 Reviews )</span>
                  </div>
                  <div class="product-nav product-nav-dots"><a class="active" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(204, 153, 102)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(51, 51, 51)'}}></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(218, 193, 167)'}}></a></div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <a href="/react/molla/product/default/40"><img src="images/home/home19.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Jumpers</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Yellow button front tea top</a></h3>
                  <div class="product-price">$56.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '0%'}}></div>
                     </div>
                     <span class="ratings-text">( 0 Reviews )</span>
                  </div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
         <div class="col-6 col-md-4 col-lg-4">
            <div class="product product-11 text-center">
               <figure class="product-media">
                  <a href="/react/molla/product/default/39"><img src="images/home/home11.jpeg" alt="Product" class="product-image"/></a>
                  <div class="product-action-vertical"><button class="btn-product-icon btn-wishlist remove-from-wishlist" title="Add to wishlist"><span>add to wishlist</span></button></div>
               </figure>
               <div class="product-body">
                  <div class="product-cat"><span class="mr-0"><a href="/react/molla/shop/sidebar/3cols">Bags</a></span></div>
                  <h3 class="product-title"><a href="/react/molla/product/default/27">Black soft RI weekend travel bag</a></h3>
                  <div class="product-price">$68.00</div>
                  <div class="ratings-container">
                     <div class="ratings">
                        <div class="ratings-val" style={{width: '0%'}}></div>
                     </div>
                     <span class="ratings-text">( 0 Reviews )</span>
                  </div>
               </div>
               <div class="product-action"><button class="btn-product btn-cart"><span>add to cart</span></button></div>
            </div>
         </div>
      </div>
   </div>
   <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
         <li class="page-item disabled"><a class="page-link page-link-prev" aria-label="Previous" tabindex="-1" aria-disabled="true" href="/react/molla/shop/sidebar/3cols"><span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>Prev</a></li>
         <li class="page-item active" aria-current="page"><a class="page-link" href="/react/molla/shop/sidebar/3cols">1</a></li>
         <li class="page-item " aria-current="page"><a class="page-link" href="/react/molla/shop/sidebar/3cols">2</a></li>
         <li class="page-item " aria-current="page"><a class="page-link" href="/react/molla/shop/sidebar/3cols">3</a></li>
         <li class="page-item-total">of 6</li>
         <li class="page-item "><a class="page-link page-link-next" aria-label="Next" href="/react/molla/shop/sidebar/3cols">Next <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span></a></li>
      </ul>
   </nav>
</>
    )
}

export default MainContent
