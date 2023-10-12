import React from 'react'
import "../styles/Card.css";

function Description(props) {
  const places = props.places;
  return (
    <div className="description">
          <div>
            <h2>{places.title}</h2>
          </div>
          <span className="price" >$ {places.price}</span>
          <div className="info">
            <i>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.83333 17.4167V11.9167C1.83333 11.5042 1.91736 11.1299 2.08541 10.7937C2.25347 10.4576 2.47499 10.1597 2.74999 9.89999V7.33333C2.74999 6.56944 3.01736 5.92013 3.55208 5.38541C4.0868 4.85069 4.73611 4.58333 5.49999 4.58333H9.16666C9.51805 4.58333 9.84652 4.64841 10.1521 4.77858C10.4576 4.90813 10.7403 5.0875 11 5.31666C11.2597 5.0875 11.5424 4.90813 11.8479 4.77858C12.1535 4.64841 12.4819 4.58333 12.8333 4.58333H16.5C17.2639 4.58333 17.9132 4.85069 18.4479 5.38541C18.9826 5.92013 19.25 6.56944 19.25 7.33333V9.89999C19.525 10.1597 19.7465 10.4576 19.9146 10.7937C20.0826 11.1299 20.1667 11.5042 20.1667 11.9167V17.4167H18.3333V15.5833H3.66666V17.4167H1.83333ZM11.9167 9.16666H17.4167V7.33333C17.4167 7.07361 17.3287 6.85575 17.1527 6.67974C16.9773 6.50436 16.7597 6.41666 16.5 6.41666H12.8333C12.5736 6.41666 12.3561 6.50436 12.1807 6.67974C12.0047 6.85575 11.9167 7.07361 11.9167 7.33333V9.16666ZM4.58333 9.16666H10.0833V7.33333C10.0833 7.07361 9.99563 6.85575 9.82025 6.67974C9.64425 6.50436 9.42638 6.41666 9.16666 6.41666H5.49999C5.24027 6.41666 5.02241 6.50436 4.84641 6.67974C4.67102 6.85575 4.58333 7.07361 4.58333 7.33333V9.16666Z" fill="#A1A7B0"/>
              </svg>                                          
            </i>
            <span>{places.bedroom} bedrooms</span>
          </div>
          <div className="info">
            <i>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="14" height="14" rx="4" fill="#A1A7B0"/>
              <line x1="7.5" y1="10.5" x2="7.5" y2="7.5" stroke="white" stroke-linecap="round"/>
              <line x1="14.5" y1="11.5" x2="14.5" y2="14.5" stroke="white" stroke-linecap="round"/>
              <line x1="10.5" y1="7.5" x2="7.5" y2="7.5" stroke="white" stroke-linecap="round"/>
              <line x1="11.5" y1="14.5" x2="14.5" y2="14.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </i>
            <span>{places.size}m<sup>2</sup></span>
          </div>
          <span className="per">per month</span>
        </div>
  )
}

export default Description