import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const loginToken = localStorage.getItem('token')
    if (loginToken) null

    router.push('login')
  }, [router])

  return <></>
}
