import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class ScheduleModel extends BaseModel {
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
        getScheduleModel: {
          request: this.buildActionName("request", "getSchedule"),
          response: this.buildActionName("response", "getSchedule"),
          error: this.buildActionName("error", "getSchedule"),
        },
        addScheduleModel: {
          request: this.buildActionName("request", "addSchedule"),
          response: this.buildActionName("response", "addSchedule"),
          error: this.buildActionName("error", "addSchedule"),
        },
      };
    }
  }

  getScheduleList = () =>
    asyncFn({
      url: `/schedule/scheduleList`,
      method: 'GET',
      model: this.model.getScheduleModel,
    });

    addSchedule = (body) => 
    asyncFn({
      url: `/schedule/addStudent`,
      method: 'POST',
      model: this.model.addScheduleModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getScheduleModel.request:
        return { ...state, isLoading: true };
      case this.model.getScheduleModel.error:
        return { ...state, isLoading: false };
      case this.model.getScheduleModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default ScheduleModel;
