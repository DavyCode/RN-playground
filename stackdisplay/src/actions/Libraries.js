import React from 'react'
import { select_library } from './types'

const selectLibrary = (payload) => {
  return {
      type: select_library,
      payload
  }
};


export { selectLibrary }