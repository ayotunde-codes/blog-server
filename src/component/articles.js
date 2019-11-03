import React, {useState, useRef, useEffect} from 'react';
import {TweenMax, Power3} from 'gsap'; 
import { Form, Icon, Input, Button } from 'antd';




function Article({articleList}) {
  const [titleData, setTitle] = useState('')
  const [contentData, setContent] = useState('')
  const [, setSubmit] = useState()
// send api request (fetch, axios)
  function handleSubmit(e) {
    let data = {
      title: titleData,
      content: contentData
    }
    e.preventDefault()
    fetch('https://my-blog-96.herokuapp.com/articles/', {
    // fetch('http://localhost:8000/articles/', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // useEffect(() => {setSubmit({})}, [])
  }

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
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" value={titleData} onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>
              Comment:
              <input type="text" value={contentData} onChange={e => setContent(e.target.value)}/>
            </label>
            <input type="submit"/>
          </form>

        {/* <Form onSubmit={handleSubmit}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Title"
              value={titleData} onChange={e => setTitle(e.target.value)}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              // type="text"
              placeholder="Content"
              value={contentData} onChange={e => setContent(e.target.value)}
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
        
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