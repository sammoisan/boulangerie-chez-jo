function ProductItem(props) {
  return (
    <div className="border-2 border-darkBrown text-center bg-white rounded-lg shadow-lg mx-auto w-full hover:scale-105 transition duration-500">

      <img src={props.source} className='mx-auto object-contain py-1 px-10' alt="" />
      <p className="text-black font-bold text-lg py-4">{props.name}</p>
      <span className='inline-block rounded-sm border-2 border-black text-gray-900 cursor-pointer px-10 py-3 mb-7 hover:bg-black hover:text-white transition duration-200'>En savoir plus</span>

    </div>
  );
}


export default ProductItem;