import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const NewsDetailPage = ({ news }) => {
  if (!news) {
    return (
      <p style={{ fontFamily: 800, fontSize: "4rem", color: "black" ,textAlign:"center"}}>
        Loading .........
      </p>
    );
  }

  const { title, image_url, description, comment_count, release_date, author } =
    news;
  return (
    <div>
      <h2> {news?.title} Detail Page </h2>
      <Row
      // gutter={{
      //   xs: 8,
      //   sm: 16,
      //   md: 24,
      //   lg: 32 ,
      // }}
      >
        <Col className="gutter-row ">
          <div
            style={
              {
                //   background: "#0092ff",
                //   padding: "8px 0",
              }
            }
          >
            <Image
              src={image_url}
              alt="Image"
              height={300}
              width={500}
              layout="responsive"
            />
          </div>
        </Col>
        <Col className="gutter-row">
          <div
          // style={{
          //   background: "#0092ff",
          //   padding: "8px 0",
          // }}
          >
            <Row>
              <Col
                lg={{
                  span: 8,
                }}
              >
                <h1 style={{ fontSize: "50px" }}>{title}</h1>
                <div
                  className="line"
                  style={{
                    height: "5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "95%",
                  }}
                ></div>

                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    color: "gray",
                    margin: "10px 0px",
                  }}
                >
                  <span>
                    <CalendarOutlined /> {release_date}
                  </span>
                  <span>
                    <CommentOutlined />
                    {comment_count}COMMENTS
                  </span>
                  <span>
                    <ProfileOutlined /> {author}
                  </span>
                </p>

                <p style={{ fontSize: "20px" }}>{description}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/news`);
  const newses = await res.json();
  const paths = newses?.map((news) => ({
    params: { newsId: news?.id },
  }));
  return { paths, fallback: false};
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
  const data = await res.json();
  //   console.log("🚀 ~ file: [newsId].js:21 ~ getStaticProps ~ data:", data);
  return {
    props: {
      news: data,
    },
  };
};
