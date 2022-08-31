import React from 'react';
import MyFridge from "../../components/MyFridge";
import {PageContainer} from "../SearchPage.style";
import ItemToBuy from "./ItemToBuy";
import MyRecipe from "../searchPageComponents/MyRecipes";

const WishListPage = () => {
  return (
    <PageContainer>
      < MyFridge />
      < MyRecipe />
      < ItemToBuy />
    </PageContainer>
  );
};

export default WishListPage;
