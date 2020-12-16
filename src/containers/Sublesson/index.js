/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Sublesson as SublessonModel
} from "../../models";
import List from "./list";

const mapStateToProps = state => ({
  data: state.sublesson.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({
    ...SublessonModel,
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
