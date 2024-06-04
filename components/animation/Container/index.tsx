'use client'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { AnimationEnum } from './type'
type Props = {
  className?: string
  style?: React.CSSProperties
  animation?: AnimationEnum
  children?: React.ReactNode
}
const Container: React.FC<Props> = ({ className, style, animation, children }) => {
  const animate = useMemo(() => {
    switch (animation) {
      case AnimationEnum.FadeIn:
        return {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
        }
      default:
        return {}
    }
  }, [animation])
  return (
    <motion.div
      className={className}
      style={style}
      {...animate}
    >
      {children}
    </motion.div>
  )
}

export default Container
