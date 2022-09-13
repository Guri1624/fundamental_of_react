import React from "react";
function Header(props) {
  console.warn("props",props.data)
  return (
    <div>
      <h1>contener data</h1>
      <div className="img-card item">
        <img src="https://beebom.com/wp-content/uploads/2020/08/iphone-12-dummy.jpg?quality=75&strip=all"/>
      </div>
      </div>
  )
}
export default Header;
