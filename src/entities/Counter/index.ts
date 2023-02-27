import Counter from './ui/Counter'
import type { CounterSchema } from './model/types/schema'
import { counterReducer } from './model/slice/counter'

export {
  CounterSchema,
  Counter,
  counterReducer
}
