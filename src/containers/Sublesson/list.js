import React from "react";
import { Table, Button, Modal, Select, Row, Form, Input,InputNumber, message } from 'antd';

const columns = [
  {
    title: 'Хичээлийн дугаар',
    dataIndex: 'id',
    key: 'Хичээлийн дугаар',
  },
  {
    title: 'Нэр',
    key: 'Нэр',
    dataIndex: 'name',
  },
  {
    title: 'Түвшин',
    key: 'Түвшин',
    dataIndex: 'level',
  },
  {
    title: 'Үнэ',
    key: 'price',
    dataIndex: 'Үнэ',
  },
];

const data = [
  {
    LessonId: '1',
    Name: 'John Brown',
    Level: 'john',
    Price: '1',
   
  },
 
];

class Sublesson extends React.Component {
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
    this.props.addSublesson(values).then((res) => {
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
    this.props.getSublessonList();
  }

  render() {
    const { isVisible } = this.state;
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
            label="Хичээлийн дугаар"
            name="lessonid"
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
            label="Түвшин"
            name="level"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            {/* <Input placeholder="Нэр"/> */}

          
          <Select>
            <Option value="anhan">АНХАН</Option>
            <Option value="anhan">Дунд</Option>
            <Option value="anhan">АХИСАН дунд</Option>
            </Select>
         
            
          </Form.Item> 
          <Form.Item
            label="Үнэ"
            name="price"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            {/* <Input placeholder="Нэр" /> */}
            <InputNumber min={100000} max={500000}/>
          </Form.Item>
          <Button htmlType="submit">Хадгалах</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}

export default Sublesson;
