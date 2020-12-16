/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Banner as BannerModel
} from "../../models";
import List from "./list";

const mapStateToProps = state => ({
  ...state.banner,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({
    ...BannerModel,
  }, dispatch),
});

class Page extends React.Component {
  render() {
    return (
      <div>
        <List {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
