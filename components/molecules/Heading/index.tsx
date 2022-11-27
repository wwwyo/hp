import { createElement, ReactNode } from 'react'

type Props = {
  type: 'screenTitle' | 'sectionTitle' | 'blockTitle' | 'subBlockTitle'
  tag: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
  prefix?: ReactNode
  children: ReactNode
}

const Heading = ({ type, tag, className, prefix, children }: Props) => {
  const typeClass = {
    screenTitle: 'text-4xl font-bold',
    sectionTitle: 'text-2xl',
    blockTitle: 'text-base',
    subBlockTitle: 'text-base',
  }

  return createElement(tag, { className: `flex gap-x-2 items-center ${className} ${typeClass[type]}` }, [
    prefix,
    children,
  ])
}

export default Heading
