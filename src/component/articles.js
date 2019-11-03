import React, {useRef, useEffect} from 'react';
import {TweenMax, Power3} from 'gsap'; 



function Article({articleList}) {
    return (
      <div className="">
        {console.log(articleList)}
        <div className="article">
          {articleList.map((article,index) => {
            return (<div className={`card-${index+1}`}>
              <img src="brooke.jpg" alt=""/>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
                <i className="fab-fa facebook-f"></i>
            </div>)
          })}
        
        {/* <div className="card-2">
          <img src="brooke.jpg" alt=""/>
          <h2></h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
               Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing</p>
            <i className="far fa-comment-alt"></i>
        </div>
        <div className="card-3">
          <img src="brooke.jpg" alt=""/>
          <h2></h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
               Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing</p>
            <i className="fab-fa facebook-f"></i>
        </div> */}
        </div>
      </div>
    );
  }
  
  export default Article;