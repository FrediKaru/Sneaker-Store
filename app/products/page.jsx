import Image from "next/image";
import Link from "next/link";

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
async function getProducts() {
  return mockProducts;
  // try {
  //   const res = await fetch("http://localhost:4000/products");
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch products");
  //   }
  //   return res.json();
  //   return products2;
  // } catch (error) {
  //   console.log("Fetch error:", error);
  //   return [
  //     {
  //       id: 1,
  //       name: "Air Max 90",
  //       company: "Nike",
  //       price: 129.99,
  //       discountPrice: 99.99,
  //       discountPerc: 15,
  //       sizes: ["EU 40", "EU 42", "EU 46"],
  //       gender: "Men",
  //       description:
  //         "Step into unparalleled comfort and timeless style with the Air Max 90.",
  //     },
  //     {
  //       id: 2,
  //       name: "Superstar",
  //       company: "Adidas",
  //       price: 79.99,
  //       sizes: ["EU 46", "EU 48"],
  //       gender: "Men",
  //       description:
  //         "Unleash the superstar within you with these iconic men's Adidas Superstar sneakers.",
  //     },
  //   ];
  // }
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-4 content-center">
        {products.map((product) => (
          <div key={product.id} className="">
            <div>
              <Link href={`/products/${product.id}`}>
                <div className="my-2">
                  {/* Assuming you have the image in the public folder */}
                  <Image
                    src={`/images/${product.id}.jpg`}
                    alt={product.name}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    width={500}
                    height={300}
                  />
                </div>
                <h4 className="text-primary">{product.company}</h4>
                <h1 className="text-black">{product.name}</h1>
                <h2>
                  €
                  {product.discountPrice
                    ? product.discountPrice
                    : product.price}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
