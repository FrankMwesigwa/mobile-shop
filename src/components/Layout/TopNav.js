import React from 'react'

const TopNav = () => {
    return (
        <div class="sticky-wrapper">
   <div class="header-middle sticky-header">
      <div class="container">
         <div class="header-left">
            <button class="mobile-menu-toggler"><span class="sr-only">Toggle mobile menu</span><i class="icon-bars"></i></button><a class="logo undefined" href="/react/molla/">
                <img src="images/logo.jpeg" alt="Molla Logo" width="105" height="25"/></a>
            <nav class="main-nav">
               <ul class="menu sf-arrows">
                  <li class="megamenu-container">
                     <a class="sf-with-ul" href="/react/molla/demo-18">Home</a>
                  </li>
                  <li class="active">
                     <a class="sf-with-ul" href="/react/molla/shop/sidebar/list">Shop</a>
                     <div class="megamenu megamenu-md">
                        <div class="row no-gutters">
                           <div class="col-md-8">
                              <div class="menu-col">
                                 <div class="row">
                                    <div class="col-md-6">
                                       <div class="menu-title">Shop with sidebar</div>
                                       <ul>
                                          <li class=""><a href="/react/molla/shop/sidebar/list">Shop List</a></li>
                                          <li class=""><a href="/react/molla/shop/sidebar/2cols">Shop Grid 2 Columns</a></li>
                                          <li class="active"><a href="/react/molla/shop/sidebar/3cols">Shop Grid 3 Columns</a></li>
                                          <li><a href="/react/molla/shop/sidebar/4cols">Shop Grid 4 Columns</a></li>
                                          <li><a href="/react/molla/shop/market"><span>Shop Market<span class="tip tip-new">New</span></span></a></li>
                                       </ul>
                                       <div class="menu-title">Shop no sidebar</div>
                                       <ul>
                                          <li><a href="/react/molla/shop/nosidebar/boxed"><span>Shop Boxed No Sidebar<span class="tip tip-hot">Hot</span></span></a></li>
                                          <li><a href="/react/molla/shop/nosidebar/fullwidth">Shop Fullwidth No Sidebar</a></li>
                                       </ul>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="menu-title">Product Category</div>
                                       <ul>
                                          <li><a href="/react/molla/shop/category/boxed">Product Category Boxed</a></li>
                                          <li><a href="/react/molla/shop/category/fullwidth"><span>Product Category Fullwidth<span class="tip tip-new">New</span></span></a></li>
                                       </ul>
                                       <div class="menu-title">Shop Pages</div>
                                       <ul>
                                          <li><a href="/react/molla/shop/cart">Cart</a></li>
                                          <li><a href="/react/molla/shop/checkout">Checkout</a></li>
                                          <li><a href="/react/molla/shop/wishlist">Wishlist</a></li>
                                          <li><a href="/react/molla/shop/dashboard">My Account</a></li>
                                          <li><a href="/react/molla/shop/sidebar/list#Lookbook">Lookbook</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="banner banner-overlay">
                                 <a class="banner banner-menu" href="/react/molla/shop/sidebar/list">
                                    <img src="/react/molla/assets/images/menu/banner-1.jpg" alt="Banner"/>
                                    <div class="banner-content banner-content-top">
                                       <div class="banner-title text-white">Last <br/>Chance<br/><span><strong>Sale</strong></span></div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <a class="sf-with-ul" href="/react/molla/product/default/27">Product</a>
                     <div class="megamenu megamenu-sm">
                        <div class="row no-gutters">
                           <div class="col-md-6">
                              <div class="menu-col">
                                 <div class="menu-title">Product Details</div>
                                 <ul>
                                    <li><a href="/react/molla/product/default/27">Default</a></li>
                                    <li><a href="/react/molla/product/centered/28">Centered</a></li>
                                    <li><a href="/react/molla/product/extended/29"><span>Extended Info<span class="tip tip-new">New</span></span></a></li>
                                    <li><a href="/react/molla/product/gallery/30">Gallery</a></li>
                                    <li><a href="/react/molla/product/sticky/34">Sticky Info</a></li>
                                    <li><a href="/react/molla/product/sidebar/32">Boxed With Sidebar</a></li>
                                    <li><a href="/react/molla/product/fullwidth/33">Full Width</a></li>
                                    <li><a href="/react/molla/product/masonry/35">Masonry Sticky Info</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner banner-overlay">
                                 <a href="/react/molla/product/centered/27">
                                    <img src="/react/molla/assets/images/menu/banner-2.jpg" alt="Banner"/>
                                    <div class="banner-content banner-content-bottom">
                                       <div class="banner-title text-white">New Trends<br/><span><strong>spring 2020</strong></span></div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <a class="sf-with-ul" href="/react/molla/pages/about">Pages</a>
                     <ul>
                        <li>
                           <a class="sf-with-ul" href="/react/molla/pages/about">About</a>
                           <ul>
                              <li><a href="/react/molla/pages/about">About 01</a></li>
                              <li><a href="/react/molla/pages/about-2">About 02</a></li>
                           </ul>
                        </li>
                        <li>
                           <a class="sf-with-ul" href="/react/molla/pages/contact">Contact</a>
                           <ul>
                              <li><a href="/react/molla/pages/contact">Contact 01</a></li>
                              <li><a href="/react/molla/pages/contact-2">Contact 02</a></li>
                           </ul>
                        </li>
                        <li><a href="/react/molla/pages/login">Login</a></li>
                        <li><a href="/react/molla/pages/faq">FAQs</a></li>
                        <li><a href="/react/molla/pages/404">Error 404</a></li>
                        <li><a href="/react/molla/pages/coming-soon">Coming Soon</a></li>
                     </ul>
                  </li>
                  <li>
                     <a class="sf-with-ul" href="/react/molla/blog/classic">Blog</a>
                     <ul>
                        <li><a href="/react/molla/blog/classic">Classic</a></li>
                        <li><a href="/react/molla/blog/listing">Listing</a></li>
                        <li>
                           <a class="sf-with-ul" href="/react/molla/blog/grid/2cols">Grid</a>
                           <ul>
                              <li><a href="/react/molla/blog/grid/2cols">Grid 2 columns</a></li>
                              <li><a href="/react/molla/blog/grid/3cols">Grid 3 columns</a></li>
                              <li><a href="/react/molla/blog/grid/4cols">Grid 4 columns</a></li>
                              <li><a href="/react/molla/blog/grid/sidebar">Grid sidebar</a></li>
                           </ul>
                        </li>
                        <li>
                           <a class="sf-with-ul" href="/react/molla/blog/masonry/2cols">Masonry</a>
                           <ul>
                              <li><a href="/react/molla/blog/masonry/2cols">Masonry 2 columns</a></li>
                              <li><a href="/react/molla/blog/masonry/3cols">Masonry 3 columns</a></li>
                              <li><a href="/react/molla/blog/masonry/4cols">Masonry 4 columns</a></li>
                              <li><a href="/react/molla/blog/masonry/sidebar">Masonry sidebar</a></li>
                           </ul>
                        </li>
                        <li>
                           <a class="sf-with-ul" href="/react/molla/blog/mask/grid">Mask</a>
                           <ul>
                              <li><a href="/react/molla/blog/mask/grid">Blog mask grid</a></li>
                              <li><a href="/react/molla/blog/mask/masonry">Blog mask masonry</a></li>
                           </ul>
                        </li>
                        <li>
                           <a class="sf-with-ul" href="/react/molla/blog/single/100">Single Post</a>
                           <ul>
                              <li><a href="/react/molla/blog/single/100">Default with sidebar</a></li>
                              <li><a href="/react/molla/blog/single-2/101">Fullwidth no sidebar</a></li>
                              <li><a href="/react/molla/blog/single-3/102">Fullwidth with sidebar</a></li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a class="sf-with-ul" href="/react/molla/elements/list">Elements</a>
                     <ul>
                        <li><a href="/react/molla/elements/products">Products</a></li>
                        <li><a href="/react/molla/elements/typography">Typography</a></li>
                        <li><a href="/react/molla/elements/titles">Titles</a></li>
                        <li><a href="/react/molla/elements/banners">Banners</a></li>
                        <li><a href="/react/molla/elements/categories">Product Category</a></li>
                        <li><a href="/react/molla/elements/video-banners">Video Banners</a></li>
                        <li><a href="/react/molla/elements/buttons">Buttons</a></li>
                        <li><a href="/react/molla/elements/accordions">Accordions</a></li>
                        <li><a href="/react/molla/elements/tabs">Tabs</a></li>
                        <li><a href="/react/molla/elements/testimonials">Testimonials</a></li>
                        <li><a href="/react/molla/elements/blog-posts">Blog Posts</a></li>
                        <li><a href="/react/molla/elements/portfolios">Portfolio</a></li>
                        <li><a href="/react/molla/elements/cta">Call to Action</a></li>
                        <li><a href="/react/molla/elements/icon-boxes">Icon Boxes</a></li>
                     </ul>
                  </li>
               </ul>
            </nav>
         </div>
         <div class="header-right">
            <div class="header-search">
               <a href="#dropdown" class="search-toggle" role="button" title="Search"><i class="icon-search"></i></a>
               <form>
                  <div class="header-search-wrapper"><label for="q" class="sr-only">Search</label><input type="search" class="form-control" name="q" id="q" placeholder="Search in..." required=""/></div>
               </form>
            </div>
            <div class="dropdown compare-dropdown">
               <a href="#dropdown" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                  <div class="icon"><i class="icon-random"></i></div>
               </a>
               <div class="dropdown-menu dropdown-menu-right">
                  <ul class="compare-products">
                     <p class="mb-1">No products in the compare.</p>
                  </ul>
                  <div class="compare-actions"><button class="action-link">Clear All</button><a class="btn btn-outline-primary-2" href="/react/molla/shop/sidebar/list"><span>Compare</span><i class="icon-long-arrow-right"></i></a></div>
               </div>
            </div>
            <div class="dropdown cart-dropdown">
               <a href="/react/molla/shop/cart" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"><i class="icon-shopping-cart"></i><span class="cart-count">0</span></a>
               <div class="dropdown-menu dropdown-menu-right text-center" style={{width: '200px'}}>
                  <div class="dropdown-cart-products"></div>
                  <p>Your Cart is Empty.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    )
}

export default TopNav
