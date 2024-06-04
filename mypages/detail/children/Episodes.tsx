import ChapterItem from '@/components/common/ChapterItem'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Episodes = () => {
  return (
    <div>
      <Input
        className="w-full mt-4"
        startContent={<FaSearch />}
        classNames={{
          inputWrapper: 'bg-transparent border border-gray-200 dark:border-gray-400',
        }}
        placeholder="Tìm chap truyện"
      />
      <div className="webkit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl-cols-4 gap-2 mt-4 max-h-[640px] overflow-y-scroll">
        {Array.from({ length: 100 }).map((_, index) => (
          <ChapterItem
            key={index}
            title={`Chapter ${index}`}
            date="10:12, 27/12/2024"
          />
        ))}
      </div>
    </div>
  )
}

export default Episodes
