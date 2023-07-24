import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: Navbar.js:9 ~ Navbar ~ session:", session);

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
        {session?.user ? (
          <>
            <items>
              <Button onClick={()=>signOut()} type="primary" danger>
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
