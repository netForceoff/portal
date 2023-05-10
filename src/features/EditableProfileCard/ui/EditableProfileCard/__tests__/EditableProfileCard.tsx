import { componentRender } from '@/shared/lib/tests/componentRender'
import EditableProfileCard from '../EditableProfileCard'
import { fireEvent, screen } from '@testing-library/react'
import { Profile } from '../../../model/types'
import { profileReducer } from '../../../model/slice'
import { Currency } from '@/entities/Currency'
import { Country } from '@/shared/const/common'

const profile: Profile = {
  avatar: 'avatar',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin213'
}

const profileSchema = {
  profile: {
    profile,
    readonly: false,
    status: 'received' as const
  }
}

const options = {
  initialState: {
    profile: profileSchema
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('EditableProfileCard', () => {
  it('contains text field for adding "FirstName"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    componentRender(<EditableProfileCard />, options)

    expect(screen.getByTestId('ProfileCard.FirstName.Input')).toBeInTheDocument()
  })

  it('contains text field for adding "LastName"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    componentRender(<EditableProfileCard />, options)

    expect(screen.getByTestId('ProfileCard.LastName.Input')).toBeInTheDocument()
  })

  it('action onChange changing input firstname value', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    componentRender(<EditableProfileCard />, options)
    const element: HTMLInputElement = screen.getByTestId('ProfileCard.FirstName.Input')

    fireEvent.change(element, { target: { value: 'user123' } })

    expect(element.value).toEqual('user123')
  })

  it('action onChange changing input lastname value', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    componentRender(<EditableProfileCard />, options)
    const element: HTMLInputElement = screen.getByTestId('ProfileCard.LastName.Input')

    fireEvent.change(element, { target: { value: 'user123456' } })

    expect(element.value).toEqual('user123456')
  })
})
