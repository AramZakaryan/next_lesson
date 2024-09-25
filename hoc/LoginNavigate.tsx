import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'

export const LoginNavigate = ({ children }: PropsWithChildren) => {

  const router = useRouter()

  const Auth = true

  if (!Auth) void router.push('/')

  return <> {children}</>

}