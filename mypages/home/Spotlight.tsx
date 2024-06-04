'use client'

import React, { Fragment, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Button, Image } from '@nextui-org/react'
import { cn } from '@/utils/style/tailwind'
import { bgGradient } from '@/utils/style/common'

const Spotlight = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 'auto',
      spacing: 15,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)

  const handleChangeSlide = (direction: 'next' | 'prev' | number) => {
    if (typeof direction === 'number') {
      instanceRef.current?.moveToIdx(direction)
      return
    }
    if (direction === 'prev') {
      instanceRef.current?.prev()
      return
    }
    instanceRef.current?.next()
  }
  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider md:h-[360px] mt-6 mb-4 rounded-large"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn([
              'keen-slider__slide',
              'rounded-large',
              'cursor-pointer',
              'max-w-[80vw] min-w-[80vw]',
              'md:max-w-[740px] md:min-w-[740px]',
            ])}
          >
            <div
              className={cn([
                'opacity-0 -translate-y-6 absolute pointer-events-none z-[11] top-0 left-0 right-0 bottom-0 to-transparent flex items-center',
                'transition-all',
                bgGradient.primary,
                currentSlide === i && 'opacity-100 translate-y-0',
              ])}
            >
              <div className="text-white ml-4">
                <h2 className=" text-base sm:text-xl font-medium mb-4">The Seven Dealy Sins</h2>
                <p className="text-xs sm:text-sm line-clamp-3 max-w-[60%] mb-4">
                  The Seen Desail Sins are a grano di cut inchts who clot cd to overthrow the
                  Kinodom of Enoland and are said to have been extirpated by the Hom Knights,
                  although some claim to sail be alive
                </p>
                <p className="flex gap-4">
                  <Button
                    radius="full"
                    size="sm"
                    className="border pointer-events-auto text-xs cursor-pointer border-gray-200 dark:border-gray-400 bg-black bg-gradient-to-r from-[#000000] to-[#434343] text-white"
                  >
                    Đọc ngay
                  </Button>
                  <Button
                    radius="full"
                    size="sm"
                    className="border cursor-default text-xs hidden sm:flex border-gray-200 dark:border-gray-400 bg-black bg-gradient-to-r from-[#000000] to-[#434343] text-white"
                  >
                    <div>Type:</div>
                    <div className="flex items-center gap-2">
                      {['Action', 'Magic', 'Revenge'].map((item, idx) => (
                        <Fragment key={idx}>
                          {idx !== 0 && <div className="w-1 h-1 block rounded-full bg-slate-600" />}
                          <div>{item}</div>
                        </Fragment>
                      ))}
                    </div>
                  </Button>
                </p>
              </div>
            </div>
            <Image
              src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              alt="manga"
              width={300}
              height={360}
              className="w-full h-full object-cover"
              classNames={{
                wrapper: ['!max-w-full'],
              }}
            />
          </div>
        ))}
      </div>
      {/* {loaded && instanceRef.current && (
        <>
          <Button
            onClick={(e) => handleChangeSlide('prev')}
            disabled={currentSlide === 0}
          />

          <Button
            onClick={(e) => handleChangeSlide('next')}
            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )} */}
      {loaded && instanceRef.current && (
        <div className="flex gap-2 justify-center mb-12">
          {Array.from({ length: 5 }).map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => handleChangeSlide(idx)}
                className={cn([
                  'w-[24px] rounded-sm h-1 bg-slate-500 transition-all',
                  currentSlide === idx && 'bg-primaryColor',
                ])}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Spotlight
