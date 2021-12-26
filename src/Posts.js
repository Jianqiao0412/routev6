import React from "react";
import { Outlet } from "react-router-dom";
import PostLists from "./PostLists";

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>博客：</h2>
      {/* 在这里显示PostLists内容 */}
      <PostLists />
      <Outlet />
    </div>
  );
}

export default Posts;