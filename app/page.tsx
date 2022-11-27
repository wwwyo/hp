import Link from 'next/link'
import Paper from '@/components/atoms/Paper'
import Heading from '@/components/molecules/Heading'

const Page = () => {
  const topPageStructure = {
    仕入管理: {
      items: [
        {
          text: '仕入登録',
          href: '/#',
        },
        {
          text: '仕入一覧',
          href: '/#',
        },
        {
          text: '運賃登録',
          href: '/#',
        },
        {
          text: '運賃一覧',
          href: '/#',
        },
        {
          text: 'メーカー登録',
          href: '/#',
        },
        {
          text: 'メーカーマスタ',
          href: '/#',
        },
        {
          text: '商品登録',
          href: '/#',
        },
        {
          text: '商品マスタ',
          href: '/#',
        },
        // {
        //   text: '買掛金元帳',
        //   href: '/#',
        // },
      ],
    },
    顧客管理: {
      items: [
        {
          text: '顧客管理',
          href: '/#',
        },
        {
          text: '顧客一覧',
          href: '/#',
        },
        {
          text: '見積もり',
          href: '/#',
        },
        {
          text: '販売',
          href: '/#',
        },
      ],
    },
    '支払・売上': {
      items: [
        {
          text: '支払登録',
          href: '/#',
        },
        {
          text: '顧客一覧',
          href: '/#',
        },
        {
          text: '見積もり',
          href: '/#',
        },
        {
          text: '販売',
          href: '/#',
        },
      ],
    },
  }

  return (
    <>
      {Object.entries(topPageStructure).map(([title, { items }]) => (
        <section key={title} className='mb-16'>
          <Heading type='screenTitle' tag='h2'>
            {title}
          </Heading>
          <ul className='grid grid-cols-4 gap-6 my-6'>
            {items.map(({ text, href }) => (
              <li key={href}>
                <Paper>
                  <Link href={href} className='block p-5 text-2xl text-center'>
                    {text}
                  </Link>
                </Paper>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
export default Page
