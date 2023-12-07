import IngredientComponent from '@/components/ingredient'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {

  return (
    
    <main className="flex min-h-screen flex-col items-center lg:p-10 p-5">
      <Head>
        <title>Cordial</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="z-10 max-w-5xl w-full  flex-grid grid-rows-2 grid-cols-4">
        <p className='text-5xl col-span-4 row-span-1 lg:pb-10 md:pb-5'> Cordial</p>
        <div className='row-span-1 items-center font-mono text-sm'><IngredientComponent /></div>
      </div>
    </main>
  )
}
