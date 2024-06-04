import Common from '@/components/common'
import Detail from '@/mypages/detail'
import { cn } from '@/utils/style/tailwind'
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaEye, FaStar } from 'react-icons/fa'
import { FaBookBookmark } from 'react-icons/fa6'

const Page = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row mt-12 gap-4 items-center sm:items-start">
        <div className="basis-[220px]">
          <Detail.Left />
        </div>
        <div className="flex-1">
          <Detail.Main />
        </div>
        <div className="sm:basis-[260px] w-full sm:hidden xl:block">
          <Common.Ranking />
        </div>
      </div>
    </section>
  )
}

export default Page
