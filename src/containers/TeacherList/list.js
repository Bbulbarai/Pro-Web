import React from "react";
import { Table, Row, Button, Form,Input,Modal, message } from 'antd';

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
    title: 'Имэйл',
    dataIndex: 'email',
  },
  {
    title: 'Төрөл',
    dataIndex: 'type',
    key: 'Төрөл',
  },
  {
    title: 'Зураг',
    key: 'Зураг',
    dataIndex: 'img',
  },
  {
    title: 'Нууц үг',
    key: 'Нууц үг',
    dataIndex: 'password',
  }
];

class TeacherList extends React.Component {
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
    this.props.addTeacher(values).then((res) => {
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
    this.props.getTeacherList();
  }

  render() {
    const { isVisible } = this.state;
    const { data } = this.props;
    return (
     <div style={{ padding:30 }}>
        <Row>
          <Button type="primary" onClick={this.handleOpenModal} >Шинэ</Button>
          <Button type="primary" style={{ marginLeft: 10 }}  onClick={this.handleSearch}>Хайх</Button>
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
            label="Имэйл"
            name="email"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Төрөл"
            name="type"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>
          <Form.Item
            label="Зураг"
            name="img"
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

export default TeacherList
