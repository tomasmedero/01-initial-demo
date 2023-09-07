import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <div className='center'>
        <h1>Contact Page</h1>
      </div>

      <div className='grid'>
        <h1 className='title'>
          Ir al <Link href='/'>Index.tsx</Link>
        </h1>
      </div>
    </>
  )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default ContactPage
