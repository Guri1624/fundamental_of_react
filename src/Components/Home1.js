import React from "react";
function Home1(props) {
  console.warn("props",props)
  return (
   
  <div>
    <h1>home componenet</h1>
      <div className="img-warapper item">
        <img src="https://beebom.com/wp-content/uploads/2020/08/iphone-12-dummy.jpg?quality=75&strip=all" />
      </div>
      <div className="text-warapper item">
        <span>i phone</span><br/>
        <span>prise:=$1000</span>
      </div>
      <div className="btn-warper item">
    <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}>add to cart</button><br/>
    <div className="remove-to-btn">
        <button onClick={()=>props.removeToCartHandler()}>remove to cart</button>
        </div>
      </div>
      </div>
  );
}
export default Home1;
