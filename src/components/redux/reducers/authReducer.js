import { v4 as uuid } from "uuid";

const initialState = {
  login: false,
  user: null,
  summarys: {},
  error: {},
  transactions: {},
  total: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, login: true, user: action.payload };

    case "LOGGED_OUT":
      return { ...state, login: false, user: null };

    case "REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };

    case "LOGIN_ERROR":
      return { ...state, error: { login: action.payload } };

    case "ADD_TRANSACTION":
      const newTransaction = {
        id: uuid(),
        payment: action.payload.overAllPayment,
        price: action.payload.itemPrice,
        name: action.payload.companyName,
        number: action.payload.sellerNumber,
        item: action.payload.itemName,
        description: action.payload.itemDescription,
      };
      return {
        ...state,
        transactions: [...state.transactions, newTransaction],
      };

    case "ADD_SUMMARY":
      const newSummary = {
        id: uuid(),
        payment: action.payload.overAllPayment,
        price: action.payload.itemPrice,
        name: action.payload.companyName,
        number: action.payload.sellerNumber,
        item: action.payload.itemName,
        description: action.payload.itemDescription,
      };
      return {
        ...state,
        summarys: [...state.summarys, newSummary],
      };

    case "DELETE_TRANSACTION":
      const filteredTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return { ...state, transactions: filteredTransactions };

      {
        /*case "EDIT_TRANSACTION":
      const updatedTransactionsInfo = state.transactions.map((transaction) => {
        if (transaction.id === action.transaction_id) {
          return { ...transaction, ...action.updated_info };
        } else {
          return transaction;
        }
      });
      return { ...state, transactions: updatedTransactionsInfo };

    case "SET_ALL_TRANSACTIONS":
    return { transactions: action.payload };*/
      }

    case "SEND_DATA":
      return { ...state, transactions: action.data };

    case "SEND_SUMMARY":
      return { ...state, total: action.data };

    default:
      return state;
  }
};
