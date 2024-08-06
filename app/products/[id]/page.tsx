import Image from "next/image";
import Cart from "./icon-cart.svg";
import ProductCount from "./ProductCount";
import AddButton from "../../components/AddButton";
import SelectSize from "../../components/SelectSize";

const mockProducts = [
  {
    id: 1,
    name: "Air Max 90",
    company: "Nike",
    price: 129.99,
    discountPrice: 99.99,
    discountPerc: 15,
    sizes: ["EU 40", "EU 42", "EU 46"],
    gender: "Men",
    description:
      "Step into unparalleled comfort and timeless style with the Air Max 90.",
  },
  {
    id: 2,
    name: "Superstar",
    company: "Adidas",
    price: 79.99,
    sizes: ["EU 46", "EU 48"],
    gender: "Men",
    description:
      "Unleash the superstar within you with these iconic men's Adidas Superstar sneakers.",
  },
  {
    id: 3,
    name: "Chuck Taylor All Star",
    company: "Converse",
    price: 49.99,
    sizes: ["EU 41", "EU 47"],
    gender: "Men",
    description:
      "The Chuck Taylor All Star boasts a low-top silhouette, providing a casual and laid-back vibe that pairs perfectly with any outfit.",
  },
  {
    id: 4,
    name: "Ultra Boost",
    company: "Adidas",
    price: 179.99,
    discountPrice: 129.99,
    discountPerc: 25,
    sizes: ["EU 40"],
    gender: "Men",
    description:
      "These running shoes are designed to take your workouts to the next level, thanks to their responsive cushioning and innovative technology. The Ultra Boost features a low-profile yet dynamic silhouette, offering a modern and sleek aesthetic.",
  },
  {
    id: 5,
    name: "Classic Leather",
    company: "Reebok",
    price: 64.99,
    sizes: ["EU 50", "EU 51"],
    gender: "Men",
    description:
      "Elevate your everyday style with the timeless appeal of the men's Reebok Classic Leather. With a low-profile design and a premium leather upper, the Classic Leather exudes a sophisticated yet laid-back vibe.",
  },
];

async function getProduct(id) {
  const product = mockProducts.find((product) => product.id == id);
  return product;
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
          <AddButton product={product} />
        </div>
      </div>
    </div>
  );
}
