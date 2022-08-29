import React from 'react';
import MyFridge from "../../components/MyFridge";
import SearchMain from "./SearchMain";
import MyRecipe from "./MyRecipes";
import {PageContainer} from "../SearchPage.style";

const SearchPage = () => {
  return (
    <PageContainer>
      < MyFridge />
      < SearchMain />
      < MyRecipe />
    </PageContainer>
  );
};

export default SearchPage;
