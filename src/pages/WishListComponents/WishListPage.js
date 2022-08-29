import React from 'react';
import MyFridge from "../../components/MyFridge";
import {PageContainer} from "../SearchPage.style";
import WishMain from "./WishMain";
import ItemToBuy from "./ItemToBuy";

const WishListPage = () => {
  return (
    <PageContainer>
      < MyFridge />
      < WishMain />
      < ItemToBuy />
    </PageContainer>
  );
};

export default WishListPage;
