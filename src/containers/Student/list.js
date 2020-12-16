import React from "react";
import { Table, Button, Modal, DatePicker, Space, InputNumber, Row, Form, Input, message } from 'antd';

const columns = [
  {
    title: 'Овог',
    dataIndex: 'lastname',
    key: 'Овог',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Нэр',
    dataIndex: 'firstname',
    key: 'Нэр',
  },
  {
    title: 'Анги дугаар',
    dataIndex: 'classid',
    key: 'Анги дугаар',
  },
  {
    title: 'Дансны дугаар',
    key: 'Дансны дугаар',
    dataIndex: 'accountid',
  },
  {
    title: 'Төрсөн огноо',
    key: 'Төрсөн огноо',
    dataIndex: 'birth',
  },
  {
    title: 'Имэйл',
    dataIndex: 'email',
    key: 'email'
  }
];

class Student extends React.Component {
  state = {
    isVisible: false,
  }

  handleOpenModal = () => {
    this.setState({ isVisible: true })
  }

  handleCloseModal = () => {
    this.setState({ isVisible: false })
  }

  onFinish = (values) => {
    this.props.addStudentList(values).then((res) => {
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
    this.props.getStudentList();
  }


  render() {
    const { isVisible } = this.state;
    const { data } = this.props; //ene
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
        <Modal visible={isVisible} footer={false} style={{ padding: 30 }} onCancel={this.handleCloseModal}>
        <Form
        name="basic"
        onFinish={this.onFinish}
      >
          <Form.Item
            label="Овог"
            name="lastname"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="fistname"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Анги дугаар"
            name="classid"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <InputNumber min={1} max={10} />
          </Form.Item>
          <Form.Item
            label="Дансны дугаар"
            name="accountid"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Имэйл"
            name="email"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
           <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Нууц үг"
            name="password"
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

export default Student
