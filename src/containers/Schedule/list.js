import React from "react";
import { Table,Button, Modal, TimePicker, Row, Form, Input, message } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Өдар',
    dataIndex: 'Өдар',
    key: 'Өдар',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Эхлэх цаг',
    dataIndex: 'Эхлэх цаг',
    key: 'Эхлэх цаг',
  },
  {
    title: 'Дуусах цаг',
    dataIndex: 'Дуусах цаг',
    key: 'Дуусах цаг',
  },
  {
    title: 'Түвшин дугаар',
    key: 'Түвшин дугаар',
    dataIndex: 'Түвшин дугаар',
  }
 
];

const data = [
  {
    Day: '1',
    StarTime: '9',
    EndTime: '11',
    SubLessonId: '1',
 
  },
 
];

class Schedule extends React.Component {
  state = {
    isVisible: false,
    // showNow= false,
  }

  handleOpenModal = () => {
    this.setState({ isVisible: true })
  }

  handleCloseModal = () => {
    this.setState({ isVisible: false })
  }

  onFinish = (values) => {
    this.props.addSchedule(values).then((res) => {
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
    this.props.getScheduleList();
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
            label="Өдар"
            name="day"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Эхлэх цаг"
            name="starttime"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
         <TimePicker format="HH:mm" />
          </Form.Item>
          <Form.Item
            label="Түвшин дугаар"
            name="sublessonid"
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

export default Schedule
