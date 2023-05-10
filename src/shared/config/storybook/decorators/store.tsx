import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StoreProvider, StateSchema } from '@/app/providers/store'

function StoreDecorator (initialState: DeepPartial<StateSchema>) {
  return function StoryComponent (Component: Story) {
    return (
        <StoreProvider initialState={initialState}>
            <Component />
        </StoreProvider>
    )
  }
}

export default StoreDecorator
