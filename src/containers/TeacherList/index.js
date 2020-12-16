/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Teacher as TeacherModel
} from "../../models"; // ene
import List from "./list";

const mapStateToProps = state => ({
  data: state.teacher.data, // ene
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({
    ...TeacherModel, //ene
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
