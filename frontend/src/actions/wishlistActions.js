let addToWishlist = (item) => {
    return {
      type: 'ADD_TO_WISHLIST',
      payload: item,
    };
  };

  export default addToWishlist