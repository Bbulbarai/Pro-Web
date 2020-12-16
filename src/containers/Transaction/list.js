import React from "react";
import { Table, Button, Modal, Space, Row, Form, Input, message } from 'antd';

const columns = [
  {
    title: 'Сурагч',
    dataIndex: 'Сурагч',
    key: 'Сурагч',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Хичээллийн түвшин',
    dataIndex: 'Хичээллийн түвшин',
    key: 'Хичээллийн түвшин',
  },
  {
    title: 'Хэмжээ',
    dataIndex: 'Хэмжээ',
    key: 'Хэмжээ',
  },
  {
    title: 'Үнийн дүн',
    key: 'Үнийн дүн',
    dataIndex: 'Үнийн дүн',
  }
  
];

const data = [
  {
    Student: '1',
    SubLesson: 'sublesson',
    Amout: '200k',
    Value: '1',
  },
];
class Transaction extends React.Component {
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
    this.props.addTransaction(values).then((res) => {
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
    this.props.getTransactiontList();
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
            label="Сурагч"
            name="student"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Дэд хичээл"
            name="sublesson"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Хэмжээ"
            name="amout"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Үнийн дүн"
            name="value"
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

export default Transaction
