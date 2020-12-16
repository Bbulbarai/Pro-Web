import { message } from "antd";
import BaseModel from "../BaseModel";
import { asyncFn } from "../utils";

class BannerModel extends BaseModel {
  initialState = {
    current: {
      error: false,
      errorMessage: '',
      isLoading: false,
      data: {},
    },
    bannerInfo: [],
    bannerList: [],
    deleteBanner: [],
  };

  constructor(data = {}) {
    super(data);
    if (data.model) {
      this.model = {
        addBannerModel: {
          request: this.buildActionName("request", "banner"),
          response: this.buildActionName("response", "banner"),
          error: this.buildActionName("error", "banner"),
        },
        bannerList: {
          request: this.buildActionName('request', data.model, 'bannerList'),
          response: this.buildActionName('response', data.model, 'bannerList'),
          error: this.buildActionName('error', data.model, 'bannerList'),
        },
        deleteBanner: {
          request: this.buildActionName('request', data.model, 'deleteBanner'),
          response: this.buildActionName('response', data.model, 'deleteBanner'),
          error: this.buildActionName('error', data.model, 'deleteBanner'),
        },
      };
    }
  }

  addBanner = ({ body } = {}) =>
    asyncFn({
      body,
      isfiles: true,
      url: "/banners/addBanner",
      method: "POST",
      model: this.model.addBannerModel,
    });

  getAllBanner = () =>
    asyncFn({
      url: `/banners/bannerList`,
      method: 'GET',
      model: this.model.bannerList,
    });

  deleteBanner = ({ id } = {}) =>
    asyncFn({
      url: `/banners/banner/${id}`,
      method: 'DELETE',
      model: this.model.deleteBanner,
    });

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case this.model.addBannerModel.request:
        return { ...state, current: this.requestCase(state.current, action) };
      case this.model.addBannerModel.error:
        return { ...state, current: this.errorCase(state.current, action) };
      case this.model.addBannerModel.response:
        return { ...state, isLoading: false, bannerInfo: action.payload.data };
      // GET COMPANY INFO
      case this.model.bannerList.request:
        return { ...state, current: this.requestCase(state.current, action) };
      case this.model.bannerList.error:
        return { ...state, current: this.errorCase(state.current, action) };
      case this.model.bannerList.response:
        return { ...state, isLoading: false, bannerList: action.payload.data };
      case this.model.deleteBanner.request:
        return { ...state, current: this.requestCase(state.current, action) };
      case this.model.deleteBanner.error:
        return { ...state, current: this.errorCase(state.current, action) };
      case this.model.deleteBanner.response:
        return { ...state, isLoading: false, deleteBanner: action.payload.data };
      default:
        return state;
    }
  };
}

export default BannerModel;
