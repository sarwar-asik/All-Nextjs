import { Button } from "antd";
import React from 'react';
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";

import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "@/firebase/firebase.auth";
// import { auth } from "@/firebase/firebase.config";



//! firebase ///

const LoginPage = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    // console.log(data);
    const {email,password} =data
    createUserWithEmailAndPassword(email,password)

  };
  const errorStyle ={
    color:'red'
  }
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
        </div>
        <hr />
        {/* form */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span style={errorStyle}>Email is required</span>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span style={errorStyle}>Password is required</span>}
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
