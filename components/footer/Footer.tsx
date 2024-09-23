import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'



export const Footer: NextPage<PropsWithChildren &{className?:string}> = ({ children, className }) => {
  return (
    <footer className={clsx(className,'fixed flex justify-center gap-4 px-4 py-2 bg-amber-300 h-10 items-center bottom-0 left-0 right-0 shadow-md')}>
      {children}
    </footer>
  )
}
