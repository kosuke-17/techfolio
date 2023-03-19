import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const loginToken = localStorage.getItem('token')
    if (loginToken) {
      router.push('/spread-sheet')
    } else {
      router.push('/login')
    }
  }, [router])

  return <></>
}
