import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { FaStar,FaArrowAltCircleRight } from 'react-icons/fa';




const SingleProduct = ({onAddToCart}) => {
    const {id} = useParams();
    const [product , setProduct] = useState([]);
    
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/products.json");
            const result = await response.json();
            const item = result.filter((p)=>p.id == id);
            console.log(item);
            setProduct(item[0]);
            
          } catch (error) {
            console.log("Error fetching data:",error);
          }
        };
        fetchData();
        window.scrollTo({top:0 , behavior:'smooth'})
      }, [id]);

      const {title,category,price,image,status} = product;
    
  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
        </div>
        <div className="p-3 max-w-7xl m-auto">
            
            <div className="mt-6 sm:mt-10">
                <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
                    <div>
                        <img  src={image} alt='' className='w-full'/>
                    </div>

                    {/* product detail */}
                    <div>
                        <h1 className='title text-left'>{title}</h1>
                        {/* Product Description */}
                        <p className="mt-3 text-gray-600 text-base text-justify leading-6 sm:text-left sm:mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                            facilisis mauris sit amet
                        </p>
                        {/* star rating */}
                        <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </span>

                        {/* product price */}
                        <p className="text-xl text-red-500 font-semibold sm:text-2xl">${price}</p>
                        <div className='mt-4'>
                            <div className='text-left flex flex-col gap-2 w-full'>
                                <label className='font-semibold'>Quantity</label>
                                <input
                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                                type="number"
                                defaultValue={1}
                                name="price"
                                id="price"
                                required
                                />
                            </div>
                            <div className="w-full text-left my-4">
                                <button
                                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                                title="Confirm Order"
                                onClick={() => {
                                    onAddToCart(product);
                                  }}
                                >
                                <span>Confirm Order</span>
                                <FaArrowAltCircleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='text-black/75 mt-12'>
                <h2 className='font-bold text-2xl'>Reviews</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquid excepturi deserunt facilis perferendis quae totam corporis ipsa fugit voluptatibus provident esse eaque, eos ut magni neque, tenetur veniam aperiam!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero accusantium quod corporis repellat ex. Placeat, aperiam? Tempora ipsam iste fugiat ullam nemo, ex quis corrupti repellat, assumenda vero nobis.</p>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct