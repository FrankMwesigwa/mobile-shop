import React from 'react'

const TopBar = () => {
    return (
        <div class="header-top">
   <div class="container">
      <div class="header-left">
         <div class="header-dropdown">
            <a href="/react/molla/shop/sidebar/list">USD</a>
            <div class="header-menu">
               <ul>
                  <li><a href="/react/molla/shop/sidebar/list">Eur</a></li>
                  <li><a href="/react/molla/shop/sidebar/list">Usd</a></li>
               </ul>
            </div>
         </div>
         <div class="header-dropdown">
            <a href="/react/molla/shop/sidebar/list">Eng</a>
            <div class="header-menu">
               <ul>
                  <li><a href="/react/molla/shop/sidebar/list">English</a></li>
                  <li><a href="/react/molla/shop/sidebar/list">French</a></li>
                  <li><a href="/react/molla/shop/sidebar/list">Spanish</a></li>
               </ul>
            </div>
         </div>
      </div>
      <div class="header-right">
         <ul class="top-menu">
            <li>
               <a href="/react/molla/shop/sidebar/list">Links</a>
               <ul>
                  <li><a href="/react/molla/shop/sidebar/tel: "><i class="icon-phone"></i>Call: +0123 456 789</a></li>
                  <li><a href="/react/molla/shop/wishlist"><i class="icon-heart-o"></i>Wishlist <span>(0)</span></a></li>
                  <li><a href="/react/molla/pages/about">About Us</a></li>
                  <li><a href="/react/molla/pages/contact">Contact Us</a></li>
                  <li><a data-toggle="modal" href="/react/molla/shop/sidebar/list#login"><i class="icon-user"></i>Login</a></li>
               </ul>
            </li>
         </ul>
      </div>
   </div>
</div>
    )
}

export default TopBar
