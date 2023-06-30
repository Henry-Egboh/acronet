import styled from "styled-components";
import { useState, useEffect } from "react";

const ProductContainer = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
  margin: 4rem 0rem;
  
`;

const ProductCards = styled.section`
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.2);
  background: rgb(253, 253, 255);
  padding: 2rem;
//   height: 40rem;
`;

const TitleAndPrice = styled.div`
    display: flex;
    column-gap: 1rem;
    font-size: 0.8rem;
    font-weight: 300;
`;

const ProductCategory = styled.div({
    textTransform: "capitalize", 
    marginBottom: "2rem", 
    color: "hsla(234, 28%, 28%, 0.8)"
});

const Products = () => {
  const [products, setProducts] = useState([]);
  const fakeProducts = "https://fakestoreapi.com/products";

  const fetchFakeProducts = () => {
    return fetch(fakeProducts)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(()=>{
    fetchFakeProducts();
  }, [])

  return (
  <ProductContainer>
    {products.map((product) => {
        return (
            <div key={product.id}>
                <ProductCards>
                    <ProductCategory><h1>{product.category}</h1></ProductCategory>
                    <div><img src={product.image} alt="productImages" className="productImg" /></div>
                    <TitleAndPrice><h4>{product.title}</h4><pre>$ {product.price}</pre></TitleAndPrice>
                    {/* <div>{product.description}</div> */}
                </ProductCards>
            </div>
        )
    })}
  </ProductContainer>);
};

export default Products;
