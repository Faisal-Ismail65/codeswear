/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/outer'
const Forgot = () => {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('token')){
     router.push('/');
    }
  })
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
      <Link href={'login'}><a href="#" className="font-medium text-rose-600 hover:text-rose-500"> Sign In</a></Link>
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
      </div>
      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
          Continue
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Forgot