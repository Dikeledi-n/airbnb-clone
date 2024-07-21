const initialState = {
  loading: false,
  error: null,
  listings: []
};

export const listingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LISTING_LIST_REQUEST':
      return { loading: true, listings: [] };
    case 'LISTING_LIST_SUCCESS':
      return { loading: false, listings: action.payload };
    case 'LISTING_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};