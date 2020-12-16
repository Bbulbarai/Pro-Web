import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class JournalModel extends BaseModel {
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
        getJournalModel: {
          request: this.buildActionName("request", "getJournal"),
          response: this.buildActionName("response", "getJournal"),
          error: this.buildActionName("error", "getJournal"),
        },
        addJournalModel: {
          request: this.buildActionName("request", "addJournal"),
          response: this.buildActionName("response", "addJournal"),
          error: this.buildActionName("error", "addJournal"),
        },
      };
    }
  }

  getJournalList = () =>
    asyncFn({
      url: `/journal/journalList`,
      method: 'GET',
      model: this.model.getJournalModel,
    });

    addJournal = (body) => 
    asyncFn({
      url: `/journal/addJournal`,
      method: 'POST',
      model: this.model.addJournalModel,
      body: body
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.getJournalModel.request:
        return { ...state, isLoading: true };
      case this.model.getJournalModel.error:
        return { ...state, isLoading: false };
      case this.model.getJournalModel.response:
        return { ...state, isLoading: false, data: action.payload.data };
      default:
        return state;
    }
  };
}

export default JournalModel;
