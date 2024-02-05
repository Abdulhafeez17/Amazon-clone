import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './Checkoutproduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout___left">
                <img
                    className="checkout__add"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout__image"
                />
                <div>
                    
                    {/* <h3>{user?.email}</h3> */}
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                        <div>
                            {
                                basket.map(item => (
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        ratings={item.ratings}
                                    />
                                ))
                            }
                        </div>

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout




// import React from "react";
// import { useStateValue } from "./StateProvider";
// import "./Checkout.css";
// import Checkoutproduct from "./Checkoutproduct";
// import Subtotal from "./Subtotal";

// function Checkout() {
//   const [{ basket }] = useStateValue();

//   return (
//     <div className="checkout">
//       <div className="checkout__left">
//         <img
//           className="checkout__add"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7Zi6kTLFiwE1-GSMjHaSOLw5ObfkzLcGRg&usqp=CAU"
//           alt=""
//         ></img>

//         {basket?.length === 0 ? (
//           <div>
//             <h2>your shopping basket is empty</h2>
//             <p>
//               You have no items in your basket. To buy one or more product click
//               "Add to basket" next to the item.
//             </p>
//           </div>
//         ) : (
//           <div>
//             <h2 className="checkout__title">Your shopping basket</h2>
//             {/* list out all of the checkout product */}
//             {basket?.map((item) => (
//               <Checkoutproduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       {basket.length > 0 && (
//         <div className="checkout__rigth">
//           <Subtotal></Subtotal>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Checkout;
