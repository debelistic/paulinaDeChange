import React, {useEffect, useState} from 'react'
import { Welcome, SignUp } from './screens'

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000)
  }, [])

  return !loading ?  <Welcome /> : <SignUp/>
}

