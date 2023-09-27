// ADD TO CART
export const addToWishlist = (data) => async(dispatch, getState) => {
    dispatch({
        type: "addToWishlist",
        payload: data
    })
    localStorage.setItem("wishlistItems", JSON.stringify(getState()?.wishlistSlice?.wishlist));
    return data;
};


// REMOVE FROM CART
export const removeFromWishlist = (data) => async(dispatch, getState) => {
    dispatch({
        type: "removeFromWishlist",
        payload: data._id

    })
    localStorage.setItem("wishlistItems", JSON.stringify(getState()?.wishlistSlice?.wishlist));
    return data;
    
}