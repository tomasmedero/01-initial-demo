import type { ReactElement } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { NextPageWithLayout } from './_app'

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <div className='center'>
        <h1>About Page</h1>
      </div>

      <div className='grid'>
        <h1 className='title'>
          Ir al <Link href='/'>Index.tsx</Link>
        </h1>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}

export default AboutPage
