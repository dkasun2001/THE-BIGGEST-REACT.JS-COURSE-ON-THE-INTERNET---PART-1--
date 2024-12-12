const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$199" },
    { id: 2, name: "Laptopp", price: "$1200" },
    { id: 3, name: "Headphones", price: "$43" },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name: {p.name}</h1>
          <h1>Price: {p.price}</h1>
          <h1>ID: {p.id}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
