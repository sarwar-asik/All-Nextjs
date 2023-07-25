import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  console.log(user,"firebase user");
  console.log("🚀 ~ file: index.js:6 ~ HomePage ~ session:", session);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To USER AUTH Home Page.
      </h1>

      {(session?.user || user?.email)&&
      <>
       <h2
       style={{ textAlign: "center", marginTop: "10%" }}
       >Logged In user {session?.user?.name || user?.displayName } </h2>
       <h2
       style={{ textAlign: "center", marginTop: "10%" }}
       >Logged In user {session?.user?.email || user?.email }</h2>
       <Image src={session?.user?.image  } alt="userPhoto" height={200} width={250}
        style={{ textAlign: "center", marginTop: "10%",marginInline:"auto" }}
        />
       <h5>Expires :{session?.expires}</h5>
      </>
       }
    </div>
  );
};

export default HomePage;
