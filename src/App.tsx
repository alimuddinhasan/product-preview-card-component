import React from "react";
import image from "./assets/image-product-desktop.jpg";

export default function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-3xl border max-h-96'>
        <img src={image} className='w-1/2' />
        <div>
          <h2>Perfume</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            Non deserunt nulla aute labore dolor est cillum consequat sit dolore
            et. Commodo duis magna dolor consectetur enim officia labore
            incididunt ea consequat nostrud non. Ut elit consequat aute ipsum
            qui. Commodo adipisicing fugiat ea pariatur excepteur laborum cillum
            ut ad. Duis culpa voluptate aliquip enim et consectetur.
          </p>
          <div>
            <span>$149.99</span>
            <span>$169.99</span>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
