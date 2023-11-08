'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Spinner } from '../lib/icons'

export default function SearchInput({ search }: { search?: string }) {
  let router = useRouter()
  let [isPending, startTransition] = useTransition()
  let [timer, setTimer] = useState<NodeJS.Timeout>()
  let isSearching = isPending || timer

  return (
    <div className='relative mt-1 rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <MagnifyingGlassIcon
          className='h-5 w-5 text-gray-400'
          aria-hidden='true'
        />
      </div>
      <input
        type='text'
        name='search'
        defaultValue={search}
        className='block w-full py-2 rounded-md border border-gray-300 pl-10 text-sm focus:border-gray-400 focus:outline-none focus:ring-0'
        placeholder='Search'
        onChange={event => {
          clearTimeout(timer)

          let id = setTimeout(() => {
            startTransition(() => {
              if (event.target.value) {
                router.push(`/?search=${event.target.value}`)
              } else {
                router.push('/')
              }
              setTimer(undefined)
            })
          }, 500)

          setTimer(id)
        }}
      />
      {isSearching && (
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          <Spinner
            className='h-5 w-5 text-gray-400 animate-spin'
            aria-hidden='true'
          />
        </div>
      )}
    </div>
  )
}
