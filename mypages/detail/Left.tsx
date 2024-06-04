import { Button, Divider, Image, colors } from '@nextui-org/react'
import React from 'react'
import { BiSolidCommentDetail } from 'react-icons/bi'
import { FaEye, FaStar } from 'react-icons/fa'
import { FaBookBookmark } from 'react-icons/fa6'

export const Badge = ({ color, children }: { children: React.ReactNode; color: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full relative border border-gray-200 dark:border-gray-400 rounded-lg">
      <div
        className="absolute w-[80%] rounded-full h-1 -top-[1px]"
        style={{
          background: color,
        }}
      ></div>
      {children}
    </div>
  )
}
const Left = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="https://st.nettruyenvv.com/data/comics/178/tieu-gia-chu-cua-tu-xuyen-duong-gia-tro-6665.jpg"
        alt="image"
        width={120}
        height={300}
        className="w-full h-[300px] object-cover"
        classNames={{
          wrapper: ['!max-w-full', 'w-full'],
        }}
      />
      <div className="grid grid-cols-3 h-[80px] mt-4 gap-2 rounded-lg border-gray-200 dark:border-gray-400 w-full">
        <Badge color={'#eba573'}>
          <FaStar color="#eba573" />
          <div className="text-[#eba573]">4.6</div>
          <div className="text-xs text-gray-400">Đánh giá</div>
        </Badge>
        <Badge color={'#6dc4bd'}>
          <FaEye color="#6dc4bd" />
          <div className="text-[#6dc4bd]">4.6</div>
          <div className="text-xs text-gray-400">Lượt xem</div>
        </Badge>
        <Badge color={'#bf89de'}>
          <FaBookBookmark color="#bf89de" />
          <div className="text-[#bf89de]">4.6</div>
          <div className="text-xs text-gray-400">Theo dõi</div>
        </Badge>
      </div>
      <Button
        endContent={<BiSolidCommentDetail />}
        className="w-full text-black font-semibold mt-4 rounded-lg border border-primaryColor bg-primaryColor"
      >
        Đánh giá của bạn
      </Button>
      <div className="rounded-lg border border-gray-200 dark:border-gray-400 px-2 mt-4 w-full">
        <div className="text-center my-2">
          <div className="text-xs text-gray-400">Phong cách</div>
          <div>Current</div>
        </div>
        <Divider />
        <div className="text-center my-2">
          <div className="text-xs text-gray-400">Thể loại</div>
          <div>Current</div>
        </div>
        <Divider />
        <div className="text-center my-2">
          <div className="text-xs text-gray-400">Xuất bản</div>
          <div>Current</div>
        </div>
        <Divider />
        <div className="text-center my-2">
          <div className="text-xs text-gray-400">Tác giả</div>
          <div>Đang cập nhật</div>
        </div>
        <Divider />
        <div className="text-center my-2">
          <div className="text-xs text-gray-400">Cập nhật</div>
          <div>Current</div>
        </div>
        <Divider />
      </div>
    </div>
  )
}

export default Left
