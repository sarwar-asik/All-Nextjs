import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
const HomePage = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: index.js:6 ~ HomePage ~ session:", session);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To USER AUTH Home Page.
      </h1>

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

export default HomePage;
