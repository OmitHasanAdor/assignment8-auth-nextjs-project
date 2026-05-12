import products from '@/lib/summer_products.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const PopularProduct = () => {
    return (
        <div>
            <h2 className=' text-4xl font-bold mb-4 text-center'>Popular Products</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[85%] mx-auto">
                {
                    products.filter(item => item.id <= 3).map((item) => {
                        return <div key={item.id} className=' p-5 shadow-md rounded-md space-y-5 flex flex-col'>
                            <h2 className=' text-2xl font-bold line-clamp-1'>{item.name}</h2>
                            <p className=' text-gray-600'>{item.description}</p>
                            <div className="grow">
                                <Image src={item.image} alt={item.name} width={300} height={200} className=' w-full h-60 ' />
                            </div>
                            <div className=" flex flex-col sm:flex-row text-start justify-between ">

                                <p className=' text-xl font-bold mt-auto'>$ {item.price.toFixed(2)}</p>
                                <p className=" flex items-center gap-2"><FaStar />Ratings : {item.rating} out of 5</p>
                            </div>

                            <Link href={`/product/${item.id}`} className=''>
                                <button className=' btn btn-neutral w-full btn-outline'>View Details</button>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default PopularProduct;