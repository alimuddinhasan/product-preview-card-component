import cart from "./assets/cart.svg";

export default function App() {
  return (
    <div className='flex justify-center items-stretch md:items-center h-screen bg-[#F2E9E2] p-5'>
      <div className='flex flex-col items-stretch h-full md:h-auto md:flex-row md:w-1/2 '>
        <div className='rounded-t-3xl h-1/2 md:h-auto md:rounded-none md:rounded-l-3xl md:w-1/2 bg-dark-grayish-blue bg-[url("./assets/image-product-desktop.jpg")] bg-cover'></div>
        <div className='flex flex-col justify-between md:justify-start md:gap-5 h-1/2 md:h-auto md:w-1/2 p-7 bg-white rounded-b-3xl md:rounded-none md:rounded-r-3xl'>
          <div className='flex flex-col gap-5'>
            <h2 className='font-Montserrat uppercase tracking-[.25em] text-[12px] text-dark-grayish-blue'>
              Perfume
            </h2>
            <h1 className='font-Fraunces font-bold text-3xl'>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className='font-Montserrat text-[14px]'>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-start gap-5'>
              <span className='font-Fraunces font-bold text-3xl text-dark-cyan'>
                $149.99
              </span>
              <span className='font-Montserrat mt-2 text-[12px] line-through'>
                $169.99
              </span>
            </div>
            <button className='bg-dark-cyan rounded-xl text-white w-full py-3 font-Montserrat font-bold flex justify-center items-center gap-2'>
              <img src={cart} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
