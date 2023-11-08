import { Spinner } from '../lib/icons'

export default function Loading() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-50'>
      <Spinner className='-mt-16 w-8 animate-spin text-gray-500' />
    </div>
  )
}
