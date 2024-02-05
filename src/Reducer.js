export const initialState = {
    basket:[{
        id:"6983456",
          title:"Apple iphone 11 pro gray smartphone",
          price:500,
          rating:5,
          image:"https://media.istockphoto.com/id/1190447864/photo/apple-iphone-11-pro-gray-smartphone.jpg?s=612x612&w=0&k=20&c=zETLJeguLoTEFBNKPl1vjPY1lvPW1uM6GPpyiMSvsC0="
    }],
    user:null,
    products:[],
    searchTitle:null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((product,totalPrice)=> Number(totalPrice.price) + Number(product) , 0);

    
const reducer=(state, action)=>{
   console.log(action)
switch(action.type){

    case "SET_USER": 
    return {
        ...state,
         user:action.user //returnig the suer
    }
    case 'EMPTY_BASKET':
        return {
            ...state,
            basket:[]
        }

    case 'ALL_PRODUCTS':
        return{
            ...state,
            products:[...state.products, action.products],
        };

    case 'CLEAR_PRODUCTS':
        return{
            ...state,
            products:[]
        }

    case 'ADD_TO_BASKET':
        //logic for adding items from basket
        return{
            ...state, // synstax use to add the items int the basket and display the action
             basket:[...state.basket,action.item]
            };
    
        case 'REMOVE_FROM_BASKET':
            //logic for removing items from basket
            //find the id of deleting item and slice it and return the else
    
           let newBasket = [...state.basket];//here we clone the bassket

           const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

           if(index>=0){
            //items exist in basket,remove it..
            newBasket.splice(index,1)//tell go to  index of id and splice it
           }

           else{
            console.warn(`cant remove product (id : ${action.id})  as its not exist`);
           }
           return {...state,basket:newBasket};
            default:
                return state;
}
}
export default reducer
