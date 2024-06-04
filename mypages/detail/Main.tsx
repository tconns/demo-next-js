'use client'
import { bgGradient } from '@/utils/style/common'
import { cn } from '@/utils/style/tailwind'
import { BreadcrumbItem, Breadcrumbs, Button } from '@nextui-org/react'
import { current } from '@reduxjs/toolkit'
import React from 'react'
import { FaBookmark, FaHome, FaMinus, FaPlus } from 'react-icons/fa'
import { GiOpenBook, GiStack } from 'react-icons/gi'
import Episodes from './children/Episodes'
const cardVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  },
  out: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
}
const genres = ['Action', 'Adventure', 'Fantasy', 'Shounen', 'Webtoons']
const Main = () => {
  const descriptionRef = React.useRef<HTMLDivElement>(null)
  const [isShowMore, setIsShowMore] = React.useState(false)
  const onShowMore = () => {
    if (!isShowMore && descriptionRef && descriptionRef.current) {
      const contentHeight = descriptionRef.current.scrollHeight
      descriptionRef.current.style.height = contentHeight + 20 + 'px'
      descriptionRef.current.classList.remove('line-clamp-5')
      setIsShowMore(true)
    }
    if (isShowMore && descriptionRef && descriptionRef.current) {
      descriptionRef.current.style.height = 120 + 'px'
      descriptionRef.current.classList.add('line-clamp-5')
      setIsShowMore(false)
    }
  }
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem startContent={<FaHome className="text-primaryColor" />}>
          Trang chủ
        </BreadcrumbItem>
        <BreadcrumbItem>Solo Leveling</BreadcrumbItem>
      </Breadcrumbs>
      <div className="mt-4">
        <h1 className="font-semibold text-3xl">Solo Leveling</h1>
        <div className="flex flex-wrap gap-2 mt-4">
          <Button
            radius="full"
            isIconOnly
            size="sm"
            className="border border-gray-200 dark:border-gray-400 dark:bg-black bg-transparent"
          >
            <FaBookmark />
          </Button>
          {genres.map((item) => (
            <Button
              key={item}
              radius="full"
              size="sm"
              className="border text-gray-400 border-gray-200 dark:border-gray-400 dark:bg-black bg-transparent"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="relative">
        <div
          className="mt-4 text-gray-400 line-clamp-5 text-justify transition-all"
          ref={descriptionRef}
        >
          Hãy bảo vệ khu phố bằng nắm đấm đó! Huyền thoại về vị anh hùng chiến đấu Sakura - học sinh
          cấp 3 giang hồ. Điểm chuẩn thì lẹt đẹt, nhưng đánh nhau thì luôn là mạnh nhất. Nơi nổi
          danh là ngôi trường của những tên giang hồ khủng khiếp nhất: THPT Fuurin. Với mục đích trở
          thành kẻ đứng đầu của một Fuurin như vậy, vào mùa xuân năm ấy, học sinh lớp 10 Sakura
          Haruka đến khu phố Tonpuu và biết được về băng nhóm bảo vệ khu phố với tên gọi "Boufuurin"
          của trường. Sakura quyết định sẽ bắt đầu chiến đấu để bảo vệ nơi ấy như một thành viên của
          Fuurin!
        </div>
        <div
          className={cn([
            'absolute h-6 w-full flex justify-center bottom-0',
            'dark:bg-gradient-to-b dark:from-transparent dark:to-transparent',
            bgGradient.lightSecondary,
          ])}
        >
          <Button
            radius="full"
            size="sm"
            onClick={onShowMore}
            className="shadow-showMore w-[200px] dark:bg-black bg-white border text-gray-400"
          >
            {isShowMore ? (
              <>
                <FaMinus />
                Thu gọn
              </>
            ) : (
              <>
                <FaPlus />
                Xem thêm
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="border border-gray-200 dark:border-gray-400 w-full relative p-2 flex items-center rounded-lg mt-12 gap-4 overflow-hidden">
        <div className="absolute -left-[2px] bg-primaryColor rounded-full w-1 h-[80%]"></div>
        <div
          className={cn(['radial-gradient-pri', 'absolute -left-36', 'w-[600px] h-full -z-10'])}
        ></div>
        <GiStack className="text-primaryColor" />
        <h2 className="font-semibold">Tuyển tập Solo Leveling</h2>
      </div>
      <div className="border border-gray-200 dark:border-gray-400 w-full relative p-2 flex items-center rounded-lg mt-4 gap-4">
        <div className="absolute -left-[2px] bg-gray-500 rounded-full w-1 h-[80%]"></div>
        <GiOpenBook className="text-gray-400" />
        <h2>
          Tiếp tục đến <span className="text-primaryColor">chương 1</span>
        </h2>
      </div>
      <Episodes />
    </>
  )
}

export default Main
