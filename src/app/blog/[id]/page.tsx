"use client";

import ThemeContext from "@/app/context/ThemeContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import cardData, { ICard } from "@/components/card-data";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { useParams } from "next/navigation";

export default function Page() {
  
  const {id}  = useParams<{id:string}>()
  
console.log('Resolved Promise ID', id);

  interface INewComment {
    name: string;
    comment: string;
  }

  const {theme} = useContext(ThemeContext)

  const [blog, setBlog] = useState<ICard | undefined>(undefined);
  const [newComment, setNewComment] = useState<INewComment>({
    name: "",
    comment: "",
  });
  const [comments, setComments] = useState<INewComment[]>([]);

  useEffect(() => {
    const findBlog = cardData.find((blog) => blog.id === id);
    setBlog(findBlog);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setNewComment((prev)=>({''}));
    // setNewComment({});
    if(newComment.name && newComment.comment){
    setComments([...comments,newComment])
    }
    setNewComment({name:'',comment:''})
  };

  return (
    <div className="w-full"
    style={{
      backgroundColor:theme.bg,
      color:theme.color
    }}>
    <div
    className="w-full md:w-3/5 mx-auto p-10 font-workSans">
      {blog && (
        <div className="flex flex-col gap-4 items-start" key={blog.id}>
          <Button>{blog.tag}</Button>
          <h1 className="font-semibold text-2xl md:text-4xl">{blog.title}</h1>
          <div className="flex gap-4 ">
            <p className="opacit-80 text-sm text-gray-500">{blog.author}</p>
            <p className="opacit-80 text-sm text-gray-500">{blog.date}</p>
          </div>
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
            quality={100}
            className="object-cover w-full"
          ></Image>
          <p className="pb-2 text-lg">{blog.para1}</p>
          <p className="text-lg">{blog.para2}</p>
          <h2 className="font-semibold text-xl">{blog.title2}</h2>
          <p className="pb-2 text-lg">{blog.para3}</p>
          <p className="text-lg">{blog.para4}</p>

          <div>
            <form action="" onSubmit={handleSubmit}>
            <h2 className="text-2xl pt-8">Share your thoughts</h2>
              <Input
                value={newComment.name}
                type="text"
                placeholder="Write your name"
                className="lg:w-[20vw] lg:pr-10 mt-3 shadow-md border-2"
                onChange={(e) => setNewComment((prev) => ({ ...prev, name:e.target.value }))}
              ></Input>
              <Textarea
                value={newComment.comment}
                placeholder="What are your thoughts?"
                className="lg:pr-10 mt-3 w-full shadow-md border-2"
                onChange={(e) => setNewComment((prev)=>({...prev,comment: e.target.value}))}
              />
              <Button type="submit" className="mt-4 mb-10">
                Respond
              </Button>
              {comments.length!== 0 && (<h2 className="text-3xl pt-8">Comments</h2>)}
              {comments.map((comment,index) => (
                <div className="p-2 " key={index}>
                <p className="pt-2">{comment.name} said:</p>
                <p className="pt-1">{comment.comment}</p>
                </div>
              ))}
              
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
