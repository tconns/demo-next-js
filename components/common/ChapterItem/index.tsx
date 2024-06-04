import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {
  title?: string
  date?: string
}
const ChapterItem: React.FC<Props> = ({ date, title }) => {
  return (
    <Button className="h-auto bg-default-100 rounded-lg gap-2 flex flex-col justify-center items-start p-4">
      <div>
        <div className="mb-1 text-left">{title}</div>
        <div className="text-xs text-left text-gray-400">{date}</div>
      </div>
    </Button>
  )
}

export default ChapterItem
