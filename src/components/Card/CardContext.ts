import { createContext } from 'react'
import { CardContextProps } from './types'

const CardContext = createContext<CardContextProps>({
  mode: 'vertical',
})

export default CardContext
