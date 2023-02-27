import { StateSchema } from 'app/providers/store'
import { CounterSchema } from '../../types/schema'

const getCounter = (state: StateSchema): CounterSchema => state.counter

export default getCounter
