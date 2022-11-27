type Props = {
  children: React.ReactNode
}

const Paper = ({ children }: Props) => <div className='bg-white rounded-md shadow-default'>{children}</div>
export default Paper
