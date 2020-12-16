import React from "react";
import { Table, Button, Modal, Space, Row, Form, Input, message, Select } from 'antd';
const {Option} = Select;

const columns = [
  {
    title: 'Цагийн хувиарь',
    dataIndex: 'Цагийн хувиарь',
    key: 'Цагийн хувиарь',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Сурагч',
    dataIndex: 'Сурагч',
    key: 'Сурагч',
  },
  {
    title: 'Багш',
    dataIndex: 'Багш',
    key: 'Багш',
  },
  {
    title: 'Ирц',
    key: 'Ирц',
    dataIndex: 'Ирц',
  },
  {
    title: 'Дүн',
    key: 'Дүн',
    dataIndex: 'Дүн',
  },
 
];

const data = [
  {
    Schedule: '8-9',
    Student: 'john',
    Teacher: '1',
    IsActive: '3',
    Result: '89',
  },
 
];
class Journal extends React.Component {
  state = {
    isVisible: false,
  }

  handleOpenModal = () => {
    this.setState({ isVisible: true })
  }

  handleCloseModal = () => {
    this.setState({ isVisible: false })
  }

  renderStudent = () => {
    const {studentData } = this.props;
    if(studentData) {
      let tmp = studentData.map((item, i) => {
        return (
        <Option value={item._id}>{item.lastname}</Option>
        );
      })
      return tmp
    }

  }
  renderTeacher = () => {
    const {teacherData } = this.props;
    if(teacherData) {
      let tmp = teacherData.map((item, i) => {
        return (
        <Option value={item._id}>{item.lastname}</Option>
        );
      })
      return tmp
    }

  }

  renderSchedule = () => {
    const {scheduleData } = this.props;
    if(scheduleData) {
      let tmp = scheduleData.map((item, i) => {
        return (
        <Option value={item._id}>{item.lastname}</Option>
        );
      })
      return tmp
    }

  }

  onFinish = (values) => {
    this.props.addJournal(values).then((res) => {
      if(res.payload.success) {
        this.setState({ isVisible: false })
        this.handleSearch();
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    })
    
  }
  
  handleSearch = () => {
    this.props.getJournalList();
  }


  render() {
    const { isVisible } = this.state;
    const { data } = this.props; 
    return (
     <div style={{ padding:30 }}>
        <Row>
          <Button type="primary" onClick={this.handleOpenModal} >Шинэ</Button>
          <Button type="primary" style={{ marginLeft: 10 }} onClick={this.handleSearch}>Хайх</Button>
        </Row>
        <Row>
          <Table
          columns={columns}
          style={{width: "100%", marginTop: 10 }}
          dataSource={data}/>
        </Row>
        <Modal visible={isVisible} footer={false} style={{ padding: 30 }}>
        <Form
        name="basic"
        onFinish={this.onFinish}
      >
         <Form.Item
            label="Цагийн хувиарь"
            name="schedule"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
                <Select>
              {this.renderSchedule()}
              </Select>
          </Form.Item>
          <Form.Item
            label="Сурагч"
            name="student"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Select>
              {this.renderStudent()}
              </Select>
          </Form.Item>
          <Form.Item
            label="Багш"
            name="teacher"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          > <Select>
          {this.renderTeacher()}
          </Select>
          </Form.Item>
          <Form.Item
            label="Ирц"
            name="isactive"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Дүн"
            name="result"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Button htmlType="submit">Хадгалах</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}


export default Journal
