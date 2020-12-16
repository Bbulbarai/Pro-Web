/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Journal as JournalModel,
  Student as StudentModel,
  Teacher as TeacherModel,
  Schedule as ScheduleModel,
} from "../../models";
import List from "./list";

const mapStateToProps = state => ({
  data: state.journal.data,
  studentData: state.student.data,
  teacherData: state.teacher.data,
  scheduleData: state.schedule.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({
    ...JournalModel,
    ...StudentModel,
    ...TeacherModel,
    ...ScheduleModel,
  }, dispatch),
});

class Page extends React.Component {
  componentDidMount () {
    this.props.getStudentList();
  }


  render() {
    return (
      <div>
        <List {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
