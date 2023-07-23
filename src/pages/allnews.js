
import { Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";

import Image from "next/image";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";

const { Meta } = Card;


const Newses = ({ allNews}) => {
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
                <Meta
                //   avatar={
                //     <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                //   }
                  title={news?.title}
                  description={news?.description}
                />
                <h3>comment :: {news?.comment_count}</h3>

              <Link href={`/news/${news?.id}`}>
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
          </p></Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Newses;
Newses.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  // console.log("🚀 ~ file: index.js:32 ~ getStaticProps ~ data:", data);

  return {
    props: {
      allNews: data,
    },
    revalidate: 30,
  };
};