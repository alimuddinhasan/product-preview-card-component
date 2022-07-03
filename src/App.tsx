import React from "react";
import image from "./assets/image-product-desktop.jpg";

export default function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-3xl border'>
        <img src={image} className='w-1/2' />
        <div className='p-7'>
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
          <div>
            <span className='font-Fraunces font-bold text-3xl'>$149.99</span>
            <span className='font-Montserrat'>$169.99</span>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
