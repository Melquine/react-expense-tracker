import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function Balance() {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, el) => acc + el, 0).toFixed(2)

  return (
    <div className='flex justify-between flex-wrap mb-2'>
     <h3>Your balance:</h3>
     <h1 className='text-xl font-bold'>{total} $</h1>

    </div>
  )
}

export default Balance