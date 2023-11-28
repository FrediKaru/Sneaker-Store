async function getProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <>
      {products.map((product) => (
        <div key={produt.id} className="card my-5">
          <h3>{products.name}ik</h3>
          <p>hey</p>
          <h2>{products.price}</h2>
        </div>
      ))}
    </>
  );
}
