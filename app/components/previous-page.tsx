import Link from 'next/link'

export default function PreviousPage({
  page,
  currentSearchParams,
}: {
  page: number
  currentSearchParams: URLSearchParams
}) {
  let newSearchParams = new URLSearchParams(currentSearchParams)

  if (page > 2) {
    newSearchParams.set('page', `${page - 1}`)
  } else {
    newSearchParams.delete('page')
  }

  return page > 1 ? (
    <Link
      href={`/?${newSearchParams}`}
      className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50'
    >
      Previous
    </Link>
  ) : (
    <button
      disabled
      className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 opacity-50'
    >
      Previous
    </button>
  )
}
