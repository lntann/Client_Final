// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import * as React from 'react';
import { useEffect, useState } from "react";
import { axiosInstance } from '../../config';

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
       const res = await axiosInstance.get("/posts" /* + search*/);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, /*[search]*/);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}