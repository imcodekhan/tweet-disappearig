import React from 'react';
import { Layout, Input, Typography } from 'antd';
import "antd/dist/antd.css";

const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
const TweetField = () => {
    return (




        <Content style={{ padding: '0 50px' }}>
            <Title level={2}>Write your tweet</Title>
            <div className="site-layout-content">
                <TextArea style={{ width: "50%" }} rows={4} />
            </div>
        </Content>



    );
}
export default TweetField;




