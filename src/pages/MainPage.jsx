import React from "react";
import classes from "./mainPage.module.scss";
import MenuTemplate from "../templates/menuTemplate/MenuTemplate";
import Banners from "../components/banners/Banners";
import Cards from "../components/cards/Cards";
import { menu1, menu2, menu3 } from "../components/menu/MenuContent";
import Headline from "../components/Headline";
import Carousel from "../components/carousel/Carousel";
import BlogPreview from "../templates/blogPreviewTemplate/BlogPreview";

const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <MenuTemplate menu={menu1} content={<Banners />} />
      <MenuTemplate menu={menu2} content={<Cards count={3} />} />
      <MenuTemplate menu={menu3} content={<Cards count={3} />} />
      <Headline headline={"Our customers says"} button={"Button"} />
      <Carousel />
      <Headline headline={"Section Headline"} button={"Button"} />
      <Cards count={4} />
      <Headline headline={"Read our blog posts"} button={"Go to blog"} />
      <BlogPreview />
    </div>
  );
};

export default MainPage;
