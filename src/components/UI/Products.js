import Image from "next/image";
import Link from "next/link";
const Products = ({ product }) => {
  // console.log(product);
  return (
    <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
      <Link href={`/product/${product.id}`} className="w-full">
        <Image src={product?.image} alt="product" width={300} height={350} />
        <h1 className="text-xl font-semibold">{product?.name}</h1>
      </Link>
      <p>Rating: {product?.rating}</p>
      <p className="text-sm">
        Availability: {product?.status ? "In stock" : "Out of stock"}
      </p>
      <p className="text-sm">Price: {product?.price}</p>
      <button className="btn btn-neutral">Add to cart</button>
    </div>
  );
};

export default Products;
