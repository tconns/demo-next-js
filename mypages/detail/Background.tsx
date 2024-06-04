'use client'
import { bgGradient } from '@/utils/style/common'
import { cn } from '@/utils/style/tailwind'
import { Image } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Background = () => {
  const [mounted, setMounted] = useState(false)

  const { theme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="relative max-w-screen-2xl m-auto ">
      {theme === 'dark' && (
        <>
          <Image
            src="https://res-3.cloudinary.com/mangasio/image/fetch/c_limit,w_1200/f_auto/https://cdn.mangas.io/uploads/IFi_Aaj6jR9I1l2mbOurx.jpeg"
            alt="image"
            classNames={{
              wrapper: ['!max-w-full', 'z-0'],
            }}
            className="absolute w-screen left-0 max-w-full top-[65px] h-[400px] object-cover"
          />
          <div className={cn(['absolute w-full top-[65px] h-[400px]'], bgGradient.secondary)}></div>
        </>
      )}
    </div>
  )
}

export default Background
