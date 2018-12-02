import { createStore, combineReducers } from 'redux';

//add expense
//remove expense
//edit expense
//set text filter
//sort by date
//sort by amnt
//set start date
//set end date

const expensesReducerDefaultState =[];

const expensesReducer = (state= expensesReducerDefaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}
//Filter reducer
const filterReducerDefaultState = {
  text:'',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state=filterReducerDefaultState, action) => {
  switch(action.type) {
    default: return state;
  }
}
//store creation 
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
)

console.log(store.getState())

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

