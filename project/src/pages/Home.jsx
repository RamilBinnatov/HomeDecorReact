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

  const getPageHeader = async () => {
    await axios.get(`${url}/pageHeader`).then((res) => {
      setPageHeader(res.data);
    });
  };

  useEffect(() => {
    getPageHeader();
  }, []);

  return (
    <main>
      <PageHeader {...pageHeader} />
      <Slider>
        {<SliderCard />}
        {<SliderCard />}
        {<SliderCard />}
        {<SliderCard />}
      </Slider>
      <AboutSection />
      <Banner />
      <ProductList />
      <Slider head={"MOST POPULAR"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
      <Slider head={"COLLECTIONS"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
      <ContactSection />
    </main>
  );
}

export default Home;
