import { Card ,Space } from 'antd';
import React from 'react';
import './index.css'

const { Meta } = Card;


const Main = () =>{
  return (
    <div className="no1" >
    <Space size={[17,14]} wrap >
      <Card
          hoverable
          style={{ width: 80}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="小 姐姐" description="真漂亮" />
        </Card>
        <Card
          hoverable
          style={{ width: 80}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="小 姐姐" description="真漂亮" />
        </Card>
        <Card
          hoverable
          style={{ width: 80}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="小 姐姐" description="真漂亮" />
        </Card>
        <Card
          hoverable
          style={{ width: 80}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="小 姐姐" description="真漂亮" />
        </Card>
        <Card
          hoverable
          style={{ width: 80}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="小 姐姐" description="真漂亮" />
        </Card>
        </Space>
    </div>
  )
}


export default Main