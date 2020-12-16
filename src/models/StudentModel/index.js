import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class StudentModel extends BaseModel {
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
        getStudentModel: {
          request: this.buildActionName("request", "getStudent"),
          response: this.buildActionName("response", "getStudent"),
          error: this.buildActionName("error", "getStudent"),
        },
        addStudentModel: {
          request: this.buildActionName("request", "addStudent"),
          response: this.buildActionName("response", "addStudent"),
          error: this.buildActionName("error", "addStudent"),
        },
      };
    }
  }

  getStudentList = () =>
    asyncFn({
      url: `/student/studentList`,
      method: 'GET',
      model: this.model.getStudentModel,
    });

  addStudentList = (body) => 
    asyncFn({
      url: `/student/addStudent`,
      method: 'POST',
      model: this.model.addStudentModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getStudentModel.request:
        return { ...state, isLoading: true };
      case this.model.getStudentModel.error:
        return { ...state, isLoading: false };
      case this.model.getStudentModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default StudentModel;
