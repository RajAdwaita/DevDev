// import React from 'react'
import sample from '../assets/Sample.jpg'
import { Link } from 'react-router-dom'

interface Props {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: string
}

const BlogCard = ({ authorName, title, content, publishedDate, id }: Props) => {
    return (
        <>
            <Link to={`/blog/${id}`}>
                <div className='flex flex-col items-center justify-between mt-8 cursor-pointer '>

                    <div className="max-w-4xl w-full flex justify-between items-start gap-8 space-y-8">
                        {/* Added `items-start` for top alignment and increased gap */}

                        <div className='text-data w-2/3'> {/* Limited width to 2/3 */}
                            <div className="flex gap-4 items-center">
                                <div className="h-10 w-10 p-1 text-sm font-semibold object-cover rounded-full shadow-lg bg-black text-white flex items-center justify-center">
                                    {authorName.split(' ').length > 1
                                        ? authorName.split(' ')[0][0] + authorName.split(' ')[1][0] // Return initials from first and second name
                                        : authorName.split(' ')[0][0]} {/* Only return the first letter if there’s no second name */}                            </div>
                                <div>{authorName}</div>
                                <div>{publishedDate}</div>
                            </div>

                            <div className="font-bold text-xl mt-4">
                                <div>{title}</div>
                            </div>

                            <div className="text-lg font-small mt-2">
                                <div>{content.slice(0, 250) + "..."}</div>
                            </div>

                            <div className="mt-8 flex justify-between items-center">
                                <div className='flex gap-8'>
                                    <div className='p-1 bg-gray-300 shadow-md rounded-lg'>Side Hustle</div>
                                    <div>{Math.ceil(content.length / 100)} - min-read</div>
                                </div>
                                <div className='flex gap-4'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" w-1/3"> {/* Limited width to 1/3 */}
                            <img src={sample} alt="Sample" className='h-48 w-full object-cover rounded-lg' /> {/* Adjusted image size */}
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default BlogCard
