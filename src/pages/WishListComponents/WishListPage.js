import React from 'react';
import MyFridge from "../../components/MyFridge";
import {PageContainer} from "../SearchPage.style";
import ItemToBuy from "./ItemToBuy";
import MyRecipeStyle from "../searchPageComponents/MyRecipes";

const WishListPage = () => {
  return (
    <PageContainer>
      < MyFridge />
      < MyRecipeStyle />
      < ItemToBuy />
    </PageContainer>
  );
};

export default WishListPage;
