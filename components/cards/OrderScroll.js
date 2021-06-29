import React from "react";


const OrderScroll = ({item}) => {
  return(
        <div
          className="
            list-group-item
            d-flex
            justify-content-between
            cursor-pointer

            list-group-item
          "
        >
          <div className="d-flex">
            <div style={{paddingLeft: '0', margin : '10px'}}>
              <h5>{item.first_name} {item.last_name}</h5>
              <p>{item.order_no}<br /></p>
            </div>
          </div>
          <div className="p-2">
            <h5>${item.amount}</h5>  
          </div>
        </div>
  
     ) 
  }

export default OrderScroll;