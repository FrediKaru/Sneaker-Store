import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-4 content-center">
        {products.map((product) => (
          <div key={product.id} className="mx-3">
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
                      height: "auto",
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
