import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class TransactionModel extends BaseModel {
  initialState = {
    current: {
      error: false,
      errorMessage: '',
      isLoading: false,
      data: {},
      isLoading: false,
    },
    data: []
  };

  constructor(data = {}) {
    super(data);
    if (data.model) {
      this.model = {
        getTransactionModel: {
          request: this.buildActionName("request", "getTransaction"),
          response: this.buildActionName("response", "getTransaction"),
          error: this.buildActionName("error", "getTransaction"),
        },
        addTransactionModel: {
          request: this.buildActionName("request", "addTransaction"),
          response: this.buildActionName("response", "addTransaction"),
          error: this.buildActionName("error", "addTransaction"),
        },
      };
    }
  }

  getTransactiontList = () =>
    asyncFn({
      url: `/transaction/tranList`,
      method: 'GET',
      model: this.model.getTransactionModel,
    });

    addTransaction = (body) => 
    asyncFn({
      url: `/transaction/addStudent`,
      method: 'POST',
      model: this.model.addTransactionModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getTransactionModel.request:
        return { ...state, isLoading: true };
      case this.model.getTransactionModel.error:
        return { ...state, isLoading: false };
      case this.model.getTransactionModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default TransactionModel;
