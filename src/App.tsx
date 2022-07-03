import React from "react";
import image from "./assets/image-product-desktop.jpg";
import cart from "./assets/cart.svg";

export default function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-[#F2E9E2] p-5'>
      <div className='flex flex-col md:flex-row md:max-w-xl'>
        <img src={image} className='md:w-1/2 rounded-t-3xl md:rounded-none md:rounded-l-3xl' />
        <div className='p-7 bg-white rounded-b-3xl md:rounded-none md:rounded-r-3xl'>
          <h2 className='font-Montserrat uppercase tracking-[.25em] text-[12px] text-dark-grayish-blue'>
            Perfume
          </h2>
          <h1 className='font-Fraunces font-bold text-3xl my-5'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='font-Montserrat text-[14px]'>
            Nostrud reprehenderit id cillum aliqua aliqua quis consectetur amet
            ut. Dolore mollit excepteur do sint veniam eu proident tempor cillum
            et ea ullamco ut.
          </p>
          <div className='my-5 flex items-start gap-5'>
            <span className='font-Fraunces font-bold text-3xl text-dark-cyan'>
              $149.99
            </span>
            <span className='font-Montserrat mt-2 text-[12px] line-through'>$169.99</span>
          </div>
          <button className='bg-dark-cyan rounded-xl text-white w-full py-3 font-Montserrat font-bold flex justify-center items-center gap-2'>
            <img src={cart} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
