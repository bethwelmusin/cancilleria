
import React from 'react';
import Logo from "../assets/LOGO 1.png";
import Logo1 from "../assets/LOGO 2.png";


const Header = () => {
  return (
<div>
  <header>
    <nav class="bg-white shadow-lg border-gray-200 px-4 lg:px-6 py-2.5 h-20"> 
      <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl h-full"> 
          <img src={Logo} class="h-9 sm:h-9" alt=" Logo" />
          <img src={Logo1} class="h-6 sm:h-9" alt=" Logo" />
      </div>
    </nav>
  </header>
</div>


  )
}

export default Header