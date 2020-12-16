import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class TeacherModel extends BaseModel {
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
        getTeacherModel: {
          request: this.buildActionName("request", "getTeacher"),
          response: this.buildActionName("response", "getTeacher"),
          error: this.buildActionName("error", "getTeacher"),
        },
        addTeacherModel: {
          request: this.buildActionName("request", "addTeacher"),
          response: this.buildActionName("response", "addTeacher"),
          error: this.buildActionName("error", "addTeacher"),
        },
      };
    }
  }

  getTeacherList = () =>
    asyncFn({
      url: `/teacher/teacherList`,
      method: 'GET',
      model: this.model.getTeacherModel,
    });

    addTeacher = (body) => 
    asyncFn({
      url: `/teacher/addTeacher`,
      method: 'POST',
      model: this.model.addTeacherModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getTeacherModel.request:
        return { ...state, isLoading: true };
      case this.model.getTeacherModel.error:
        return { ...state, isLoading: false };
      case this.model.getTeacherModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default TeacherModel;
