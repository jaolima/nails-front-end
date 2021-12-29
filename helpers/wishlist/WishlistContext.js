import React, {createContext , useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


export const Context = createContext({
  wishlistItems: Function,
  addToWish: Function,
  removeFromWish: Function
}
);

const getLocalWishlistItems = () => {
  try {
    const list = localStorage.getItem('wishlist');
      if (list === null) {
        return [];
      }else{
        return JSON.parse(list)
      }
  } catch (err) {
    return [];
  }
};

export const Provider = (props) => {
  const { t } = useTranslation();
    const [wishlistItems, setWishlistItems] = useState(getLocalWishlistItems())

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
    }, [wishlistItems])


    // Add Product To Wishlist
    const addToWish = (item) => {
        const index = wishlistItems.findIndex(wish => wish.id === item.id)
        if (index === -1) {
            toast.success(t('Product Added Successfully !'));
            setWishlistItems([...wishlistItems, item])
        }else{
          toast.error(t('This Product Already Added !'));
        }
    }

    // Remove Product From Wishlist
    const removeFromWish = (item) => {
      setWishlistItems(wishlistItems.filter((e)=>(e.id !== item.id)))
      toast.error(t('Product Removed Successfully !'));
    }

    // const {value} = props

    return (
        <Context.Provider value={{
            wishlistItems:wishlistItems,
            addToWish:addToWish,
            removeFromWish:removeFromWish
          }}>
          {props.children}
        </Context.Provider>
      );
}

export {
  Context as WishlistContext,
  Provider as WishlistContextProvider,
} from "./WishlistContext";
