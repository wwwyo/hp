import { ReactNode } from 'react'
import Header from '@/components/organisms/Header'
import SideNav from '@/components/organisms/SideNav'
import 'styles/globals.css'

type Props = {
  children?: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='ja'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>ヨシカマ</title>
      </head>
      <body className='w-screen h-screen overflow-hidden'>
        <Header />
        <div className='flex w-full h-full'>
          <SideNav />
          <main className='px-16 py-8'>{children}</main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
