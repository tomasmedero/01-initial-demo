import Head from 'next/head'
import { NavBar } from '../NavBar'
import styles from './MainLayout.module.css'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode
}

export const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Tomas</title>
        <meta name='description' content='Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  )
}
