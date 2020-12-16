import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class SublessonModel extends BaseModel {
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
        getSublessonModel: {
          request: this.buildActionName("request", "getSublesson"),
          response: this.buildActionName("response", "getSublesson"),
          error: this.buildActionName("error", "getSublesson"),
        },
        addSublessonModel: {
          request: this.buildActionName("request", "addSub"),
          response: this.buildActionName("response", "addSub"),
          error: this.buildActionName("error", "addSub"),
        },
      };
    }
  }

  getSublessonList = () =>
    asyncFn({
      url: `/sublesson/subList`,
      method: 'GET',
      model: this.model.getSublessonModel,
    });

    addSublesson = (body) => 
    asyncFn({
      url: `/sublesson/addSub`,
      method: 'POST',
      model: this.model.addSublessonModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getSublessonModel.request:
        return { ...state, isLoading: true };
      case this.model.getSublessonModel.error:
        return { ...state, isLoading: false };
      case this.model.getSublessonModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default SublessonModel;
