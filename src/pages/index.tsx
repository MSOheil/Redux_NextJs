import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selector } from '../../store/CounterSlice'
import type { RootState } from "../../store/store"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selector)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>The value of count is {count}</h1>

      <div className='flex justify-between gap-x-10'>
        <button onClick={() => dispatch(increment())} className='bg-red-400'>add</button>
        <button onClick={() => dispatch(decrement())} className='bg-red-400'>remove</button>
      </div>
    </main>
  )
}
