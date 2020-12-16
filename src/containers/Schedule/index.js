/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Schedule as ScheduleModel
} from "../../models";
import List from "./list";

const mapStateToProps = state => ({
  data: state.schcedule.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({
    ...ScheduleModel,
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
