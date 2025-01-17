import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

interface ICard  {
    id:string;
    image:string;
    tag:string;
    title:string;
    author:string;
    date:string;
}

function Card({id,image,tag,title,author,date}:ICard) {
  return (
    <div>
        <Link href={`/blog/${id}`}>
    <div className=' p-5 max-w-md mx-auto shadow-sm'>
        <Image src={image} alt='card' width={400} height={300} layout='responsive' quality={100} className='w-full'></Image>
        <Button variant={'secondary'} size={'sm'} className='my-4'>{tag}</Button>
        <p className='font-workSans font-semibold text-xl'>{title}</p>
        <div className="text-sm flex gap-6 pt-4 opacity-70">
                <p>{author}</p>
                <p>{date}</p>
            </div>
    </div>
    </Link>
    </div>
  )
}

export default Card