import React, {useRef, useEffect} from 'react';
import {TweenMax, Power3} from 'gsap';

function NavBar() {
    return (
      <div className="Nav">
         <nav>
             <h2>newBlog</h2>
             <ul>
               <li>Article</li>
               <li>Contact</li>
               <li>logIN</li>
             </ul>
         </nav>
      </div>
    );
  }
  
  export default NavBar;
