import { CounterSchema } from '../../types/schema'
import { createSelector } from '@reduxjs/toolkit'
import getCounter from '../counter/counter'

const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)

export default getCounterValue
