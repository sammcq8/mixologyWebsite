import IngredientComponent from '@/components/ingredient'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Cordial</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <IngredientComponent/>
      </div>
    </main>
  )
}
