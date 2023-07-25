import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut as NextSignOut} from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";


const Navbar = () => {
  const { data: session } = useSession();


  const [user, loading, error] = useAuthState(auth);
  const [signOut ] = useSignOut(auth);
  console.log("🚀 ~ file: Navbar.js:9 ~ Navbar ~ session:", session);

   const handleLogout =()=>{
    if(session?.user){
      // next-auth signout 
      // signOut()
      NextSignOut()
    }
    else if (user?.email){
      // firebase signout 

      signOut()

    }

   




   }
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          USER AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        {(session?.user || user?.email) ? (
          <>
            <items>
              <Button onClick={()=>handleLogout()} type="primary" danger>
                Logout
              </Button>
            </items>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/profile"
            >
              <items>Profile</items>
            </Link>
          </>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginInline: "40px",
            }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
