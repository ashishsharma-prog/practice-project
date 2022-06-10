import PRODUCTS from "../../dummy/DummyData";

const initialState={
    availableProducts :PRODUCTS,//initial state ma abhi humare pass dummy data hai
    userProducts:PRODUCTS.filter(prod =>prod.ownerId==='u1')//userproduct ma humne filter karliya hai owner ki id vala data

};


export default(state=initialState,action)=>{
    return state;
}