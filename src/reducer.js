const initialState = {
    basket : [],
    user : null,
};

const getTotal = (basket) => 
  (basket?.reduce( (prevValue, currValue) => prevValue + currValue.price, 0));

const reducer = (state, action) => {
     
    // console.log(action);

    switch(action.type){
        case "ADD_TO_BASKET": 
          return{
            ...state,
              basket: [...state.basket, action.item],
          };

        // using filter function of array in Js
        // case "REMOVE_FROM_BASKET":
        //   return {
        //     ...state,
        //     basket: state.basket.filter(item => item.id!=action.id)
        //   }

        case "REMOVE_FROM_BASKET":
           let idx = state.basket.findIndex( item => item.id==action.id)
           state.basket.splice(idx, 1);
           return{
             ...state,
             basket: [ ...state.basket],
           }

        case "SET_USER" : 
          return{
            ...state,
              user: action.user,
          }

        default:
            return state;
    }
};

export  {reducer, getTotal, initialState};