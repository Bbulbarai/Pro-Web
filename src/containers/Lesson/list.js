import React from "react";
import { Table, Button, Modal, Space, Row, Form, Input,message } from 'antd';

const columns = [
  {
    title: 'Нэр',
    dataIndex: 'name',
    key: 'Нэр',
    render: text => <a>{text}</a>,
  },
 
];

const data = [
  {
   Name: 'John Brown',
  },
 
];
class Lesson extends React.Component {
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
    this.props.addlesson(values).then((res) => {
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
    this.props.getLessonList();
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
            label="Нэр"
            name="name"
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

export default Lesson
