import { Button, ButtonColor, Input, Text } from '@/shared/ui'
import Flex from '@/shared/ui/Flex/Flex'
import Modal from '@/shared/ui/Modal/Modal'
import StarRating from '@/shared/ui/StarRating/StarRating'
import { FC, memo, useState } from 'react'

export interface IRatingProps {
  className?: string
  title?: string
  feedbackTitle?: string
  onCancel?: (star: number) => void
  onAccept?: (star: number, feedback?: string) => void
  rates: number[]
  rate?: number
}

// TODO - сделать для мобилок
const Rating: FC<IRatingProps> = (props) => {
  const { onAccept, onCancel, feedbackTitle, rates, title, rate = 0 } = props
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<string>('')
  const [activeRate, setActiveRate] = useState<number>(rate)

  const handleClick = (rate: number) => {
    if (feedbackTitle) {
      setActiveRate(rate)
      setIsModalOpen(true)
    } else {
      onAccept?.(rate)
    }
  }

  const handleClose = () => {
    setIsModalOpen(false)
    onCancel?.(activeRate)
  }

  const handleSave = () => {
    setIsModalOpen(false)
    onAccept?.(activeRate, feedback)
  }

  const handleChange = (value: string) => {
    setFeedback(value)
  }

  const renderModal = () => isModalOpen
    ? (
      <Modal onCloseOutside={handleClose}>
        <Flex gap="32">
          <Text title={feedbackTitle} />
          <Input onChange={handleChange} />
          <Flex>
            <Button onClick={handleClose} color={ButtonColor.PRIMARY}>
              {'Закрыть'}
            </Button>
            <Button onClick={handleSave} color={ButtonColor.SECONDARY}>
              {'Сохранить'}
            </Button>
          </Flex>
        </Flex>
      </Modal>
      )
    : null

  return (
    <Flex align="center" gap="8">
      <Text title={title} />
      <StarRating rate={rate} rates={rates} onClick={handleClick} />
      {renderModal()}
    </Flex>
  )
}

export default memo(Rating)
