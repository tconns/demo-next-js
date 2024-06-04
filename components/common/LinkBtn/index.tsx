'use client'
import { Button, ButtonProps } from '@nextui-org/react'
import React, { ForwardRefRenderFunction, forwardRef } from 'react'

interface Props extends ButtonProps {
  isActive?: boolean
  activeClass?: string
}
const LinkBtn: ForwardRefRenderFunction<any, Props> = (
  { isActive = false, children, activeClass, ...props },
  ref,
) => {
  return (
    <Button
      {...props}
      className={`${props.className} ${isActive ? activeClass : ''}`}
      ref={ref}
    >
      {children}
    </Button>
  )
}

export default forwardRef(LinkBtn)
