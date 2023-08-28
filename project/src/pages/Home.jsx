import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";
import Slider from "../components/Slider";
import AboutSection from "../components/About";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import ContactSection from "../components/Contact";
import SliderCard from "../components/SliderCard";
import ProductCard from "../components/ProductCard";

function Home() {
  const url = "http://localhost:3000";

  const [pageHeader, setPageHeader] = useState({});
  const [popularProducts, setPopularProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);

  const getPageHeader = async () => {
    await axios.get(`${url}/pageHeader`).then((res) => {
      setPageHeader(res.data);
    });
  };

  useEffect(() => {
    const getPopularProducs = async () => {
      try {
        const apiUrl = `${url}/products`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        data.sort((a, b) => b.saledCount - a.saledCount);
        const topPopularPruducts = data.slice(0, 6);

        setPopularProducts(topPopularPruducts);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getPopularProducs();
  }, []);

  useEffect(() => {
    getPageHeader();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const apiUrl = `${url}/Category`;
        const response = await axios.get(apiUrl);

        setCategories(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const apiUrl = `${url}/Collection`;
        const response = await axios.get(apiUrl);

        setCollections(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCollections();
  }, []);

  return (
    <main>
      <PageHeader {...pageHeader} />
      <Slider>
        {categories.map((category) => (
          <SliderCard title={category.name} img={category.img} />
        ))}
      </Slider>
      <AboutSection />
      <Banner />
      <ProductList />
      <Slider head={"MOST POPULAR"}>
        {popularProducts.map((product) => (
          <ProductCard
            price={product.price}
            name={product.name}
            img={product.img}
          />
        ))}
      </Slider>
      <Slider count={3} head={"COLLECTIONS"}>
        {collections.map((collection) => (
          <SliderCard title={collection.name} img={collection.img} />
        ))}
      </Slider>
      <ContactSection />
    </main>
  );
}

export default Home;
