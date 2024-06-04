'use client'
import { cn } from '@/utils/style/tailwind'
import { Button, Card } from '@nextui-org/react'
import React, { useMemo } from 'react'
import { FaRankingStar } from 'react-icons/fa6'
import RankingCard from '../RankingCard'

const levelOptions = ['Daily', 'Weekly', 'Monthly']
const Ranking = () => {
  const [selectedLevel, setSelectedLevel] = React.useState(levelOptions[0])
  return (
    <div className="flex flex-col items-center border border-gray-200 dark:border-gray-400 rounded-lg py-4 pt-2">
      <div className="relative flex items-center px-4 gap-4 w-full mb-4">
        <div className="absolute h-full rounded-full w-1 -left-[1px] bg-primaryColor"></div>
        <div className="rounded-lg bg-primaryColor p-2">
          <FaRankingStar className="text-white" />
        </div>
        <h2 className="text-lg font-semibold">Bảng xếp hạng</h2>
      </div>
      <div className="flex justify-between gap-2 mb-4">
        {levelOptions.map((item, index) => (
          <Button
            key={index}
            radius="full"
            size="sm"
            onClick={() => setSelectedLevel(item)}
            className={cn([
              'border border-gray-200 dark:border-gray-400 text-gray-400 bg-transparent',
              selectedLevel === item && 'bg-primaryColor text-white border-primaryColor',
            ])}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="w-full flex flex-col px-4 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <RankingCard
            key={i}
            idx={i}
            rating={10}
            thumbnail=""
            title="Solo Leveling"
            view={100}
          />
        ))}
      </div>
    </div>
  )
}

export default Ranking
