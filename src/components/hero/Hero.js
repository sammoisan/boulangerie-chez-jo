import './Hero.css'
import '../productItem/ProductItem';

import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import ProductItem from '../productItem/ProductItem';
import ShapeDivider from '../shapeDivider/ShapeDivider';

function Hero() {
  return (
    <main>

      {/* Hero section */}
      <section className="hero flex flex-col justify-center items-center">

        <div className='flex flex-col justify-center items-center space-y-5 text-white title-shadow text-7xl md:text-8xl lg:text-9xl' id='title'>
          <span className='block font-bold font-title'>Boulangerie</span>
          <span className='block font-bold font-title'>chez Jo</span>
        </div>

        <div className='scroll-down-container flex flex-col justify-center items-center'>
          <div className='scroll-down'></div>
        </div>

        {/* Hamburger button */}
        <HamburgerMenu />

        {/* Mobile Menu */}
        <div id="menu" className='hidden absolute top-0 left-0 block z-20 w-full h-full items-center justify-center'>
          <ul className='flex flex-col p-5 text-white space-y-10'>
            <li className='font-bold text-4xl cursor-pointer hover:text-lightBrown transition duration-300'>Produits</li>
            <li className='font-bold text-4xl cursor-pointer hover:text-lightBrown transition duration-300'>À propos</li>
            <li className='font-bold text-4xl cursor-pointe hover:text-lightBrown transition duration-300'>Contact</li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <nav className='absolute top-0 right-0 hidden md:block'>
          <ul className='flex flex-row p-5'>
            <li className='font-bold text-lg px-5 cursor-pointer hover:text-darkBrown transition duration-300'>Produits</li>
            <li className='font-bold text-lg px-5 cursor-pointer hover:text-darkBrown transition duration-300'>À propos</li>
            <li className='font-bold text-lg px-5 cursor-pointer hover:text-darkBrown transition duration-300'>Contact</li>
          </ul>
        </nav>

      </section>



      <div className='flex flex-col'>

        {/* Artist section */}
        <section className='bg-darkBrown text-white px-5 pt-10 pb-16 md:px-20 lg:px-32'>
          <h1 className='text-7xl uppercase font-extralight text-center py-10'>L'artiste</h1>

          <div className='flex flex-col md:flex-row md:space-x-10'>

            <div className='md:w-1/2 lg:w-1/3'>
              <img className='w-full rounded-md shadow-lg grayscale hover:grayscale-50 transition duration-500' src='/images/jo.png' alt='Jordan Moisan' />
              <p className='text-center text-lightBrown font-bold pt-2 pb-10'>Jordan Moisan</p>
            </div>

            <div className='md:w-1/2'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium soluta ea minima distinctio expedita exercitationem vero provident, velit adipisci unde ad in blanditiis alias dolorum. Impedit saepe quae accusantium mollitia incidunt autem temporibus! Totam sint quis, magnam modi obcaecati blanditiis!</p>

              <br />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia vel minus minima fuga voluptates saepe! Tempora aut consequatur animi culpa? Suscipit repellendus quas exercitationem laboriosam, quae consequuntur, atque adipisci incidunt explicabo fugit nam facere? Enim quasi ipsum impedit asperiores quisquam, ex eligendi quod sequi pariatur nesciunt id corporis praesentium nam excepturi voluptates eius molestiae quibusdam nemo veritatis ut. Qui!</p>
            </div>

          </div>

        </section>

        {/* Product section */}
        <section className='relative bg-lightBrown text-white px-5 py-16 pt-36 md:px-20 lg:px-32'>

          <ShapeDivider />

          <h1 className='section-title'>Nos produits</h1>

          {/* Products container */}
          <div className='px-5 flex flex-col space-y-14 md:grid md:grid-cols-2 md:space-y-0 md:gap-y-10 md:gap-x-10 lg:grid-cols-3 xl:grid-cols-4'>

            {/* Single Product*/}
            <ProductItem source='/images/produits/pain_complet.png' name='Pain complet' />

            <ProductItem source='/images/produits/pain_levin.png' name='Pain au levin' />

            <ProductItem source='/images/produits/pain_seigle.png' name='Pain de seigle' />

            <ProductItem source='/images/produits/croissant.png' name='Croissant' />

            <ProductItem source='/images/produits/biscuits.png' name='Biscuits' />

            <ProductItem source='/images/produits/muffin.png' name='Muffins' />

          </div>

          <p className='font-title text-8xl drop-shadow-lg text-center pt-20 pb-10 md:text-8xl lg:text-9xl'>Là où le goût rencontre la perfection.</p>
        </section>

      </div>


    </main>

  )
}

export default Hero;