import React from 'react'

const index = () => {
    return (
       <>
   <aside class="sidebar sidebar-shop">
      <div class="">
         <div class="widget widget-clean"><label>Filters:</label><a href="#a" class="sidebar-filter-clear">Clean All</a></div>
         <div class="widget widget-collapsible">
            <h3 class="widget-title"><a href="#category" role="button" aria-expanded="true" aria-controls="widget-1">Category</a></h3>
            <div>
               <div class="widget-body">
                  <div class="filter-items filter-items-count">
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-1"/><label class="custom-control-label" for="cat-1">Dresses</label></div>
                        <span class="item-count">8</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-2"/><label class="custom-control-label" for="cat-2">T-shirts</label></div>
                        <span class="item-count">0</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-3"/><label class="custom-control-label" for="cat-3">Bags</label></div>
                        <span class="item-count">4</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-4"/><label class="custom-control-label" for="cat-4">Jackets</label></div>
                        <span class="item-count">2</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-5"/><label class="custom-control-label" for="cat-5">Shoes</label></div>
                        <span class="item-count">4</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-6"/><label class="custom-control-label" for="cat-6">Jumpers</label></div>
                        <span class="item-count">2</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-7"/><label class="custom-control-label" for="cat-7">Jeans</label></div>
                        <span class="item-count">2</span>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="cat-8"/><label class="custom-control-label" for="cat-8">Sportwear</label></div>
                        <span class="item-count">0</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="widget widget-collapsible">
            <h3 class="widget-title"><a href="#Size" role="button" aria-expanded="true" aria-controls="widget-1">Size</a></h3>
            <div>
               <div class="widget-body">
                  <div class="filter-items">
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="size-1"/><label class="custom-control-label" for="size-1">XS</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="size-2"/><label class="custom-control-label" for="size-2">S</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="size-3"/><label class="custom-control-label" for="size-3">M</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="size-4"/><label class="custom-control-label" for="size-4">L</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="size-5"/><label class="custom-control-label" for="size-5">XL</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="size-6"/><label class="custom-control-label" for="size-6">XXL</label></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="widget widget-collapsible">
            <h3 class="widget-title"><a href="#colour" role="button" aria-expanded="true" aria-controls="widget-1">Colour</a></h3>
            <div>
               <div class="widget-body">
                  <div class="filter-colors"><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(184, 113, 69)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(240, 192, 74)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(51, 51, 51)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(204, 51, 51)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(51, 153, 204)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(102, 153, 51)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(242, 113, 156)'}}><span class="sr-only">Color Name</span></a><a class="" href="/react/molla/shop/sidebar/3cols" style={{background: 'rgb(235, 235, 235)'}}><span class="sr-only">Color Name</span></a></div>
               </div>
            </div>
         </div>
         <div class="widget widget-collapsible">
            <h3 class="widget-title"><a href="#brand" role="button" aria-expanded="true" aria-controls="widget-1">Brand</a></h3>
            <div>
               <div class="widget-body">
                  <div class="filter-items">
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-1"/><label class="custom-control-label" for="brand-1">Next</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-2"/><label class="custom-control-label" for="brand-2">River Island</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-3"/><label class="custom-control-label" for="brand-3">Geox</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-4"/><label class="custom-control-label" for="brand-4">New Balance</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-5"/><label class="custom-control-label" for="brand-5">UGG</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-6"/><label class="custom-control-label" for="brand-6">F&amp;F</label></div>
                     </div>
                     <div class="filter-item">
                        <div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="brand-7"/><label class="custom-control-label" for="brand-7">Nike</label></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="widget widget-collapsible">
            <h3 class="widget-title"><a href="#price" role="button" aria-expanded="true" aria-controls="widget-1">Price</a></h3>
            <div>
               <div class="widget-body">
                  <div class="filter-price">
                     <div class="filter-price-text">Price Range:&nbsp;<span class="filter-price-range">$0 - $1000</span></div>
                     <div class="price-slider">
                        <div aria-disabled="false" class="input-range">
                           <span class="input-range__label input-range__label--min"><span class="input-range__label-container">$0</span></span>
                           <div class="input-range__track input-range__track--background">
                              <div class="input-range__track input-range__track--active" style={{left: '0%', width: '100%'}}></div>
                              <span class="input-range__slider-container" style={{position: 'absolute',left: '0%'}}>
                                 <span class="input-range__label input-range__label--value"><span class="input-range__label-container">$0</span></span>
                                 <div aria-valuemax="1000" aria-valuemin="0" aria-valuenow="0" class="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                              </span>
                              <span class="input-range__slider-container" style={{position: 'absolute', left: '100%'}}>
                                 <span class="input-range__label input-range__label--value"><span class="input-range__label-container">$1000</span></span>
                                 <div aria-valuemax="1000" aria-valuemin="0" aria-valuenow="1000" class="input-range__slider" draggable="false" role="slider" tabindex="0"></div>
                              </span>
                           </div>
                           <span class="input-range__label input-range__label--max"><span class="input-range__label-container">$1000</span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </aside>
   <div class="sidebar-filter-overlay"></div>
</>
    )
}

export default index
