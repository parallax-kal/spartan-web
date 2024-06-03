import Logo from '@/components/Logo'
import Image from 'next/image'
import Link from 'next/link'


const ThankYouPage = async () => {
  return (
    <main className='relative lg:min-h-full'>
      <div className='mt-20'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 '>
          <div className='lg:col-start-2'>
            <p className='text-sm font-medium text-blue-600'>
              Order successful
            </p>
            <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Thanks for ordering
            </h1>
            <div className='mt-16 text-sm font-medium'>
              <div className='flex items-center gap-3 text-muted-foreground'>
                <Logo /> Order nr.
              </div>
              <div className='mt-2 text-gray-900'>
              </div>
              <div className='mt-16 border-t border-gray-200 py-6 text-right'>
                <Link
                  href='/products'
                  className='text-sm font-medium text-blue-600 hover:text-blue-500'>
                  Continue shopping &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThankYouPage
