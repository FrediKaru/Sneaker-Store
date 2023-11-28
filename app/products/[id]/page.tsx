import Image from "next/image";
import Cart from "./icon-cart.svg";
import ProductCount from "./ProductCount";
import AddButton from "../../components/AddButton";
import SelectSize from "../../components/SelectSize";

async function getProduct(id) {
  const res = await fetch("http://localhost:4000/products/" + id, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function Product({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="md:flex flex-row justify-center space-x-10">
      <div className="basis-1/3">
        <Image
          src={`/images/${product.id}.jpg`}
          alt="Product Image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </div>
      <div className="basis-1/3 flex flex-col space-y-6">
        <h4 className="text-lightGray uppercase tracking-widest text-sm">
          {product.company}
        </h4>
        <h1 className="text-black text-4xl font-semibold mb-2">
          {product.name}
        </h1>
        <p className="text-gray-600">{product.description}</p>
        <div>
          <div className="flex items-center">
            <h1 className="text-black text-3xl ">
              €{product.discountPrice ? product.discountPrice : product.price}
            </h1>
            {product.discountPrice && (
              <span className="bg-lightPrimary text-primary font-bold rounded-sm ml-2 px-1">
                {product.discountPerc}%
              </span>
            )}
          </div>

          <h4 className="line-through">
            {product.discountPrice && `€${product.price}`}
          </h4>
        </div>

        <div className="lg:flex items-center justify-start space-x-3">
          <div className="">
            <SelectSize sizes={product.sizes} />
          </div>
          <div className="">
            <AddButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
