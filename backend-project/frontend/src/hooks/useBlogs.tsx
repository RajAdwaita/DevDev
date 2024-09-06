import axios from 'axios'
import { useEffect, useState } from 'react'


interface Blog {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
}


export const useBlogs = () => {


    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        //     try {
        //         const token = localStorage.getItem('token');

        //     }
        //     catch (error) {
        //         console.log(error);

        //     }


        async function getBlogs() {

            try {

                const token = localStorage.getItem('token');

                const response = await axios.get('https://backend.kingalfredo0095.workers.dev/api/v1/blog/allBlogs',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                await setBlogs(response.data.blogs)
                await console.log(blogs)
                await setLoading(false);
            }

            catch (error) {
                console.log(error);

            }


        }
        getBlogs();

    }, [])


    return {
        loading, blogs
    }
}

