import React from 'react'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 9
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen);

  // if(hour >= openHour && hour <=closeHour){
  //     alert("we're currently open..!!!")
  // }
  // else{
  //     alert("Sorry We're closed...😅")
  // }    
  return (
    <div>
      <footer className='footer'>
        <h1>
          {/* {isOpen && 
          <div className='order'>
          <p>We're currently open!!! until {closeHour}:00 come visit us or order online
          </p>
          <button className='btn'>Order</button>
          </div>
          } */}

          {isOpen ?
            (<Order closeHour={closeHour}/>):<p>We're happy to Welcome you but shop is open between {openHour}:00 to {closeHour} :00
            </p>
          }
        </h1>
      </footer>
    </div>
  )
}
// new Date().toLocaleDateString()- gives u date



 const Order = (props) => {
  return (
    <div className='order'>
              <p>We're currently open!!! until {props.closeHour}:00 come visit us or order online
              </p>
              <button className='btn'>Order</button>
            </div>
  )
}

export default Footer