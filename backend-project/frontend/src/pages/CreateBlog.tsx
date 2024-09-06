import { useState } from 'react'
import AppBar from '../components/AppBar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

// type Props = {}

const CreateBlog = () => {
    const navigate = useNavigate();


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            const token = await localStorage.getItem('token');

            const response = await axios.post(`${BACKEND_URL}/blog/create`,
                {
                    title: title,
                    content: content
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            await console.log(response.data);
            await console.log(response.data.id);
            const blogId = await response.data.id;
            await toast.success("Blog Created");
            setTimeout(async () => {
                await navigate(`/blog/${blogId}`)
            }, 2000)



        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <div>

                <AppBar />
                <div className='flex  justify-center w-full mt-16'>
                    <div className='w-full max-w-4xl '>
                        <form action="" method="post" className=' space-y-8' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='Title'
                                className='block w-full border-b-2 border-gray-300 focus:border-black bg-transparent text-6xl font-bold placeholder-gray-500 outline-none py-4' onChange={(e) => {

                                    setTitle(e.target.value);

                                }}
                            />
                            <textarea placeholder='Content' className='block w-full bg-transparent text-xl leading-relaxed placeholder-gray-500 outline-none h-screen resize-none border-b-2 border-gray-200 focus:border-black py-4' rows={20} onChange={(e) => {
                                setContent(e.target.value);
                            }} ></textarea>
                            <div className='flex justify-center items-center text-center w-full py-8'>

                                <button type="submit" className=' h-9 w-20   rounded-full text-lg font-semibold cursor-pointer bg-green-600'>Publish</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Toaster />
        </>
    )
}
export default CreateBlog