"use client";
import React from "react";
import { BsFillChatRightFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
const CommentButton = () => {
  return (
    <>
      <button className="flex space-x-2 items-center">
        <BsFillChatRightFill size={20} className="mr-2"></BsFillChatRightFill>
        <span className="hidden md:block">Comment</span>
      </button>
    </>
  );
};

export default CommentButton;
