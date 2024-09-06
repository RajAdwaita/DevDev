import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BACKEND_URL } from '../config'
import AppBar from '../components/AppBar'


interface Blog {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
}

const Blog = () => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog | null>(null)
    const { id } = useParams<{ id: string }>()

    useEffect(() => {


        try {

            async function fetchBlog() {
                const token = await localStorage.getItem('token')
                const response = await axios.get(`${BACKEND_URL}/blog/blog/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                await console.log(response.data.blog)
                const blog = await response.data.blog;
                await setBlog(blog)
                await setLoading(false)


            }
            fetchBlog();
        }
        catch (error) {
            console.log(error);
        }
    }, [id])


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>

            </div>
        )
    }
    if (!blog) {
        return <div>No blog found</div>; // Handle null case for blog
    }


    return (
        <>
            <div>
                <AppBar />
            </div>

            <div className='grid grid-cols-3 gap-4 p-16'>


                <div className=' col-span-2 flex flex-col items-center justify-between  '>

                    <div className=" w-full flex-row justify-between items-center gap-8 space-y-6">
                        <div className='flex items-center justify-left text-4xl font-bold '>{blog.title}</div>
                        <div className='flex items-center justify-left text-xl font-small '>{blog.content}</div>
                    </div>
                </div>

                <div className='lex items-center justify-between p-12'>
                    <div className='flex justify-left items-center text-xl font-medium text-gray-500'>Author</div>
                    <div className='flex gap-4 mt-5'>
                        <div className='flex justify-center items-center  bg-gray-500 h-10   w-10 rounded-full text-white text-xl font-medium uppercase'>{blog.author.name === "" ? "U" : blog.author.name[0]}</div>
                        <div className='flex-row justify-center items-center text-left space-y-1' >
                            <div className='font-bold text-3xl'>{blog.author.name}</div>
                            <div className='font-small text-lg text-gray-500'>Stuff</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog