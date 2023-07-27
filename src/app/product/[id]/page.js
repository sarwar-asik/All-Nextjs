import ProductDetails from "@/components/UI/ProductDetails";
import Image from "next/image";

const ProductDetailsPage =async ({params}) => {
    const id  = params.id
    // console.log(id);
    const res =await fetch(`http://localhost:5000/watches/${id}`,{
        cache:"no-store"

    })
    const data = await res.json()




  return (
    <div className="">
      <ProductDetails product={data} key={id}/>
    </div>
  );
};

export default ProductDetailsPage;
