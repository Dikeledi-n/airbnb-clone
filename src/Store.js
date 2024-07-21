import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
 import { listingListReducer } from "./Reducers/listingReducers";
 import { modalReducer } from "./Reducers/modalReducers";
 import { userLoginReducer } from "./Reducers/userReducer"

const reducer = combineReducers({
  listinglist: listingListReducer,
   modal: modalReducer,
   userLogin: userLoginReducer,
});

 const userInfoFormLS = localStorage.getItem("userInfo")
   ? JSON.parsel(localStorage.getItem("userInfo"))
   : null;
 const initialState = {
   userLogin: { userInfo: userInfoFormLS },
 };
const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;