import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

export const useLoader = () => {

  const startLoading = () => NProgress.start()
  const endLoading = () => NProgress.done()

  const router = useRouter()


  useEffect(() => {
      router.events.on('routeChangeStart', startLoading)
      router.events.on('routeChangeComplete', endLoading)
      router.events.on('routeChangeError', endLoading)
      return () => {
        router.events.off('routeChangeStart', startLoading)
        router.events.off('routeChangeComplete', endLoading)
        router.events.off('routeChangeError', endLoading)
      }
    },
    [router]
  )


}