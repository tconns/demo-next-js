'use client'
import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsMoonStars } from 'react-icons/bs'
import { BsSunFill } from 'react-icons/bs'
import Animation from '@/components/animation'
import { AnimationEnum } from '@/components/animation/Container/type'
import { motion } from 'framer-motion'
import { cn } from '@/utils/style/tailwind'
type Props = {
  className?: string
  buttonProps?: React.ComponentProps<typeof Button>
}
const ThemeToggle: React.FC<Props> = ({ className, buttonProps }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <Animation.Container
      animation={AnimationEnum.FadeIn}
      className={className}
    >
      <Button
        radius="full"
        isIconOnly={true}
        onClick={onChangeTheme}
        {...buttonProps}
      >
        {theme === 'dark' ? (
          <BsMoonStars className="absolute text-primaryColor" />
        ) : (
          <BsSunFill className="absolute text-primaryColor" />
        )}
      </Button>
    </Animation.Container>
  )
}

export default ThemeToggle
