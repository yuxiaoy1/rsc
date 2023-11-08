import Link from 'next/link'

export default function NextPage({
  page,
  totalPages,
  currentSearchParams,
}: {
  page: number
  totalPages: number
  currentSearchParams: URLSearchParams
}) {
  let newSearchParams = new URLSearchParams(currentSearchParams)

  newSearchParams.set('page', `${page + 1}`)

  return page < totalPages ? (
    <Link
      href={`/?${newSearchParams}`}
      className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50'
    >
      Next
    </Link>
  ) : (
    <button
      disabled
      className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 opacity-50'
    >
      Next
    </button>
  )
}
