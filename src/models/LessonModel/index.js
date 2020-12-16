import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class LessonModel extends BaseModel {
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
        getLessonModel: {
          request: this.buildActionName("request", "getLesson"),
          response: this.buildActionName("response", "getLesson"),
          error: this.buildActionName("error", "getLesson"),
        },
        addLessonModel: {
          request: this.buildActionName("request", "addLesson"),
          response: this.buildActionName("response", "addLesson"),
          error: this.buildActionName("error", "addLesson"),
        },
      };
    }
  }

  getLessonList = () =>
    asyncFn({
      url: `/lesson/lessonList`,
      method: 'GET',
      model: this.model.getLessonModel,
    });

    addlesson = (body) => 
    asyncFn({
      url: `/lesson/addLesson`,
      method: 'POST',
      model: this.model.addLessonModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getLessonModel.request:
        return { ...state, isLoading: true };
      case this.model.getLessonModel.error:
        return { ...state, isLoading: false };
      case this.model.getLessonModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default LessonModel;
