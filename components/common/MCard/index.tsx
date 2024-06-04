'use client'

import React from 'react'
import { Card, CardHeader, CardBody, Image, image } from '@nextui-org/react'
import { cn } from '@/utils/style/tailwind'
import { FaStar } from 'react-icons/fa'
import { MdBookmarkAdd } from 'react-icons/md'
import { bgGradient } from '@/utils/style/common'

type Props = {
  className?: string
  image: string
}
const MCard: React.FC<Props> = ({ className, image }) => {
  return (
    <Card
      isPressable
      shadow="none"
      radius="sm"
      className={cn(['group', className])}
      classNames={{
        base: ['bg-transparent'],
      }}
    >
      {/* overlay */}
      <div className="relative w-full overflow-hidden rounded-b-lg">
        <div
          className={cn([
            'absolute top-0 left-0 right-0 bottom-0 to-100% z-[20] pointer-events-none',
            bgGradient.primary,
          ])}
        >
          <div className="absolute text-xs py-1 top-2 right-2 p-2 rounded-lg bg-primaryColor text-white">
            2 giờ trước
          </div>
          <div className="absolute w-full text-white bottom-0 py-2">
            <div className="flex justify-between px-2 text-xs">
              <div className="flex gap-1 items-center">
                <span>8.9</span>
                <FaStar className="text-primaryColor" />
              </div>
              <div>Chap 108</div>
            </div>
          </div>
        </div>
        <Image
          src={image}
          alt="card"
          width={120}
          height={300}
          radius="sm"
          className="w-full h-[200px] sm:h-[300px] pointer-events-none object-cover group-hover:scale-105 !transition-transform !duration-300 ease-in-out"
          classNames={{
            wrapper: ['!max-w-full', 'w-full'],
          }}
          loading="lazy"
        />
      </div>
      <h3 className="text-base mb-2 mt-2 line-clamp-2 font-medium text-left">
        Sau Khi Chia Tay , Tôi Có Kết Đẹp Cùng Với Chú Nhỏ
      </h3>
    </Card>
  )
}
export default MCard
