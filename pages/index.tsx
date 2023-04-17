import Head from 'next/head'
import { useState } from 'react'
import type {MouseEventHandler} from 'react'
import LazyImage from '@/components/RandomFox'


const random = ()=> Math.floor(Math.random() * 123) + 1

type Item = {id: string, image: string}

export default function Home() {
  const [images, setImages] = useState<Array<Item>>([])

  const handleClick:MouseEventHandler<HTMLButtonElement> =(event)=>{
    event.preventDefault()
    const newItem: Item = {id: images.length.toString(), image: `https://randomfox.ca/images/${random()}.jpg`}
    setImages([...images, newItem])
  }
  return (
    <>
      <Head>
        <title>Random Foxes Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <button onClick={handleClick}>Add new fox</button>
        <div className='flex flex-wrap gap-4 justify-center'>
          {images.map((item,index) => { return <div key={index} className='w-96 h-fit overflow-hidden items-center'>
              <LazyImage key={index} image={item.image} width='500rem 'height='auto' className="rounded bg-grey-300" /> 
            </div>})}
        </div>
      </main>
    </>
  )
}
