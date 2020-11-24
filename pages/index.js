import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Group 15</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <h1>   
          -----------Group 15 ----------             
        </h1>
        This is homepage.
        <div>
        <Link href="content1"><a>link to a content</a></Link>
        </div>
      </body>

      
    </div>
  )
}
