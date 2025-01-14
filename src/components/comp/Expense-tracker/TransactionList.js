import React, { useContext } from 'react'
import { ExpenseContext } from '../../contexts/ExpenseContext'
import Transaction from './Transaction'
function TransactionList() {
    const { transactions } = useContext(ExpenseContext);
    //console.log(context)
    
    return (
        <div className="scrollable">
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(t => (<Transaction key={t.id} transaction={t} />))}

            </ul>
        </div>
    )
}

export default TransactionList
