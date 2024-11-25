import React, {useState, useEffect} from 'react';
import HeroBanner from '@/components/HeroBanner';
import BrowseTheRange from '@/components/BrowseTheRange';
import OurProducts from '@/components/OurProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [groceriesProduct, setGroceriesProduct] = useState([]);
  async function getData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      let groceriesData = data.products.filter((item)=> item.category == "groceries")
      console.log(data.products);
      console.log("Hello Home =====> ", groceriesData)  
      setProducts(data.products);
      setGroceriesProduct(groceriesData);
    } catch (error) {
      console.log(error);
    } 
}
useEffect(() => {
    getData()
}, [])
  return (
    <>
      <HeroBanner />
      <BrowseTheRange />
      <OurProducts productsData={products} />
    </>
  )
}

export default Home