import Main from '@/components/Main'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='m-5 sm:m-10'>
      <Main/>
    </div>
  )
}
