import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'

import { Wrapper } from './wrapper'

import { StateSchema } from '@/app/providers/store'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {
  asyncReducers: {}
}) {
  return render(<Wrapper options={options}>{component}</Wrapper>)
}
