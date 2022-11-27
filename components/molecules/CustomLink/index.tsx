import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  href: string
  text: string
  prefix?: ReactNode
}

const CustomLink = ({ href, text, prefix }: Props) => (
  <>
    <div className='flex items-center text-white gap-x-1'>
      {prefix}
      <Link href={href}>{text}</Link>
    </div>
  </>
)

export default CustomLink
