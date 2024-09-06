// import React, { useEffect, useState } from 'react'
import BlogsTopBar from '../components/BlogsTopBar'
import BlogCard from '../components/BlogCard'
// import axios from 'axios'
import AppBar from '../components/AppBar'
import { useBlogs } from '../hooks/useBlogs'


interface Blog {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
}

const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>

            </div>
        )
    }







    return (
        <>

            <div>
                <AppBar />
                <BlogsTopBar />



                {
                    blogs.map((blog: Blog, index) => (
                        <BlogCard key={index} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"Sept-09, 24"} id={blog.id} />

                    ))


                }



            </div>


        </>
    )
}

export default Blogs