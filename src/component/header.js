import React, {useRef, useEffect} from 'react';
import NavBar from './navbar';
import {TweenMax, Power3, Ease} from 'gsap';

function HeaderHead() {
    let bigBox = useRef(null);
    let biggBox = useRef(null);

    useEffect(() =>{
        TweenMax.from(bigBox,2.0,{
            y: -40,
            color: 'red',
            ease: Power3.easeInOut
        })
        TweenMax.from(biggBox,2.0,{
            x: -40,
            color: 'red',
            ease: Power3.easeInOut
        },)
    })
    return (

      <div className="Header">
        <header> 
            <NavBar />
            <div className="box-1" ref={el =>{bigBox = el}}>
                <h2>Food is important to us</h2>
            </div>
            <div className="box-2" ref={el =>{biggBox = el}}>
                <h2>Food is important to us</h2>
            </div>
        </header>
      </div>
    );
  }
  
  export default HeaderHead;
