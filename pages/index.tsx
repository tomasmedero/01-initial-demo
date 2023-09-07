import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div className='center'>
        <h1>Home Page</h1>
      </div>

      <div className='grid'>
        <h1 className='title'>
          Ir al <Link href='/about'>About.tsx</Link>
        </h1>
      </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
