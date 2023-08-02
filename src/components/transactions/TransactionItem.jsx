import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState()
    return (
        <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full
        flex justify-between items-center truncate'>
            <p className='text-sm mr-1 truncate'>{transaction.description}</p>
            <div>
                <span> {transaction.amount} $ </span>
                <button onClick={() => { deleteTransaction(transaction.id) }}>X</button>
            </div>

        </li>
    )
}

export default TransactionItem