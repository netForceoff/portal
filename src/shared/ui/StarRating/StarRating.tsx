import clsx from 'clsx'
import { FC, memo, useState } from 'react'

import Star from '../../assets/icons/star.svg'
import Flex from '../Flex/Flex'
import Icon from '../Icon/Icon'

import styles from './StarRating.module.scss'

export interface IStarRatingProps {
  className?: string
  rates: number[]
  onClick?: (id: number) => void
  rate?: number
}

const StarRating: FC<IStarRatingProps> = (props) => {
  const { rates, onClick, rate = 0 } = props
  const [activeRate, setActiveRate] = useState<number>(rate)
  const [isSelected, setIsSelected] = useState(false)

  const onHover = (index: number) => () => {
    console.log(index)
    !isSelected && setActiveRate(index)
  }

  const onLeave = () => {
    !isSelected && setActiveRate(0)
  }

  const handleClick = (id: number) => () => {
    !isSelected && onClick?.(id)
    setIsSelected(true)
  }

  const renderStar = (rate: number) =>
    <Icon
        onClick={handleClick(rate)}
        onMouseEnter={onHover(rate)}
        onMouseLeave={onLeave}
        className={clsx(styles.star, { [styles.active]: activeRate >= rate, [styles.selected]: isSelected })}
        key={rate}
        SVG={Star}
    />

  const renderRates = rates.map(renderStar)

  return (
    <Flex>
        {renderRates}
    </Flex>
  )
}

export default memo(StarRating)
