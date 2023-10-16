"use client"

import { useEffect, useState } from 'react'

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
})

interface CurrencyProps {
  value: string
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted) {
        return null
    }
  return <div className='semibold'>{formatter.format(Number(value))}</div>
}

export default Currency
