import React from 'react'
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory'
import { useGlobalState } from '../../context/GlobalState'

function ExpenseChart() {
  const { transactions } = useGlobalState()

  const totalIncomes = transactions.filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2)

  const totalExpenses = transactions.filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2) * -1

  const totalExpesesPercentage = Math.round((totalExpenses / totalIncomes) * 100)  
  const totalIncomesPercentage = 100 - totalExpesesPercentage

  return (
    <VictoryPie
      theme={VictoryTheme.material}
      colorScale = {['#4338ca', '#5772b3']}
      
      data={[
        { x: 'Expense', y: totalExpesesPercentage},
        { x: 'Incomes', y: totalIncomesPercentage}
      ]}
      animate={{
        duration: 2000
      }}
      labels={({datum}) => `${datum.y}%` }

      labelComponent={<VictoryLabel
        angle={45}
        style={{
          fill: 'white',
          fontSize: 15,
          zIndex: 10
        }}
      />}
    />

  )
}

export default ExpenseChart