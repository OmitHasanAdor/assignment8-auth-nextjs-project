import products from '@/lib/summer_products.json';
import Image from 'next/image';
import { AiOutlineStock } from 'react-icons/ai';
import { BiSolidCategory } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { SiBrandfolder } from 'react-icons/si';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const product = products.find(item => item.id === parseInt(id));
    console.log(product)
    return (
        <div className=' max-w-3xl mx-auto p-5'>
            <div key={product.id} className=' p-5 shadow-md rounded-md space-y-5 flex flex-col'>
                <h2 className=' text-2xl font-bold line-clamp-1 text-center'>{product.name}</h2>
                <p className=' text-gray-600 text-center'>{product.description}</p>
                <div className="flex justify-around">
                    <p className=" text-sm text-black flex flex-col items-center font-semibold"><BiSolidCategory />Category: {product.category}</p>
                    <p className=" text-sm  text-black flex flex-col items-center font-semibold"><AiOutlineStock />Stock: {product.stock}</p>
                    <p className=" text-sm  text-black flex flex-col items-center font-semibold"><SiBrandfolder />Brand: {product.brand}</p>
                </div>
                <div className="grow flex justify-center items-center">
                    <Image src={product.image} alt={product.name} width={300} height={200} className=' w-125 h-100 ' />
                </div>
                <div className=" flex flex-col sm:flex-row text-start justify-between ">

                    <p className=' text-xl font-bold mt-auto'>$ {product.price.toFixed(2)}</p>
                    <p className=" flex items-center gap-2"><FaStar />Ratings : {product.rating} out of 5</p>

                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;