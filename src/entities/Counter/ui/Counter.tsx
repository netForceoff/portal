import { Button } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counter'
import getCounterValue from '../model/selectors/value/value'

const Counter = (): JSX.Element => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
    <>
        <Button onClick={increment}>
            increment
        </Button>
        <h1>{value}</h1>
        <Button onClick={decrement}>
            decrement
        </Button>
    </>
  )
}

export default Counter
