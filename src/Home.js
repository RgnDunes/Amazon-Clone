import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Macbook Pro 13''"
          price={1656.22}
          rating={5}
          image="https://images.macrumors.com/t/j1ksdiuVG29iz5MA0CcAhDcY9Ow=/400x0/filters:quality(90)/article-new/2020/03/macbook-pro-13-inch.jpg?lossy"
        />
        <Product
          id="2"
          title="Macbook Air"
          price={1251.94}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1603332211000"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Iphone 11 Pro Max"
          price={1265.41}
          rating={3}
          image="https://img.router-switch.com/media/customoptions/79/1/1/iphone-11-pro-max-gold.jpg"
        />
        <Product
          id="4"
          title="LG 49WL95C-W 49 Inch 32:9 UltraWide Dual QHD IPS Curved LED Monitor with HDR 10"
          price={1499.99}
          rating={4}
          image="https://www.lg.com/us/images/monitors/md06064396/gallery/1100-3.jpg"
        />
        <Product
          id="5"
          title="Anker Data Hub A7516011 4-Port USB Charger"
          price={21.55}
          rating={3}
          image="data:image/jpeg;base64,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"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="LG 3 Star RT26FARZASP Samsung Refrigerator, Capacity: 300 L, Double Door"
          price={350.38}
          rating={2}
          image="https://5.imimg.com/data5/FB/VL/GT/SELLER-36249512/rt26farzasp-samsung-refrigerator-500x500.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
