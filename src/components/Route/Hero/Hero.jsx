import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> Women Wears & Needs
        </h1>
        <p className="pt-5 text-[16px] font-[poppins] font-[400] text-[#000000ba]">
          Discover the finest selection of women's clothing and essential
          products. <br/> Your one-stop destination for fashion, lifestyle, and
          everyday necessities  tailored <br/> to women's tastes and preferences.
          Explore the best collection curated just for you.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[poppins] text-[18px]">
                Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
