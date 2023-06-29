function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-5 pt-16 md:px-20 lg:px-32">
      <div className="flex flex-col space-y-12 md:flex-row  md:space-y-0 md:space-x-12">

        <div className="md:w-1/3">
          <span className="block text-3xl font-bold pb-2">Nos produits</span>
          <ul className="text-xl">
            <li className="py-1 cursor-pointer hover:text-lightBrown">Pain</li>
            <li className="py-1 cursor-pointer hover:text-lightBrown">Humus</li>
            <li className="py-1 cursor-pointer hover:text-lightBrown">Biscuit</li>
            <li className="py-1 cursor-pointer hover:text-lightBrown">Soupe</li>
            <li className="py-1 cursor-pointer hover:text-lightBrown">Brownies</li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <span className="block text-3xl font-bold pb-2">Contactez-nous</span>
          <address className="not-italic">479, rue du lac Simon,<br />
            Saint-Léonard-de-portneuf (Québec)<br />
            G1X 2Y3</address>
        </div>

        <div className="md:w-1/3">
          <span className="block text-3xl font-bold pb-2">Suivez-nous</span>
          <i className="fa-brands fa-square-facebook ficon cursor-pointer"></i>
          <i className="fa-brands fa-instagram ficon cursor-pointer"></i>
        </div>

      </div>

      <p className="text-xs text-center opacity-40 pt-12 pb-4">&copy; 2023 – Boulangerie chez Jo, tous droits réservés</p>
    </footer>
  )
}

export default Footer;