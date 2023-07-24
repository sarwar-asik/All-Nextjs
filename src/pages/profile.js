import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import { useSession } from "next-auth/react";
import Image from "next/image";
const ProfilePage = () => {
  const {data:session} = useSession()
  console.log(session);
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
      {session?.user &&
      <>
       <h2
       style={{ textAlign: "center", marginTop: "10%" }}
       >Logged In user {session?.user?.name}</h2>
       <h2
       style={{ textAlign: "center", marginTop: "10%" }}
       >Logged In user {session?.user?.email}</h2>
       <Image src={session?.user?.image} alt="userPhoto" height={200} width={250} />
       <h5>Expires :{session?.expires}</h5>
      </>
       }
    </div>
  );
};

export default ProfilePage;
