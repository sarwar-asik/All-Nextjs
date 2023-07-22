
import { Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";

import Image from "next/image";

const AllNews = ({ allNews }) => {
  console.log(allNews);

  return (
    <div>
      <h2>All News are here </h2>
      <Row   gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      >
        {allNews?.map((news) => {
          return (
            <Col key={news?.id} style={{marginInline:'auto'}}>
              <Card
                style={{ width: 300 }}
                cover={
                  <Image src={news?.image_url} height={200} width={200} alt="card" layout="responsive"/>
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
            
              >
                {/* <Meta
                //   avatar={
                //     <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                //   }
                  title={news?.title}
                  description={news?.description}
                /> */}

                <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AllNews;
