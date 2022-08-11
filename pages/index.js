import Head from 'next/head'
import Image from 'next/image'
import home from '../public/home.jpg'
export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear.com - Wear the code</title>
        <meta name="description" content="Codeswear.com - Wear the code"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={home} alt='wear the code' width={1400} height={500}></Image>
    </div>
  )
}
