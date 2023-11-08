import { prisma } from '@/prisma'
import SearchInput from './components/search-input'
import UserTable from './components/user-table'
import { Suspense } from 'react'
import Loading from './components/loading'

export default async function Users({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined

  return (
    <div className='min-h-screen bg-gray-50 px-8 pt-12'>
      <div className='flex items-center justify-between'>
        <div className='w-80'>
          <SearchInput search={search} />
        </div>
        <div className='ml-16 mt-0 flex-none'>
          <button className='block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Add user
          </button>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <UserTable searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
