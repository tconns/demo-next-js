import { cn } from '@/utils/style/tailwind'
import { Image } from '@nextui-org/react'
import React, { useMemo } from 'react'
import { FaEye, FaStar } from 'react-icons/fa'

type Props = {
  idx: number
  thumbnail: string
  title: string
  view: number
  rating: number
}
const RankingCard: React.FC<Props> = ({ idx, thumbnail, title, view, rating }) => {
  const styleElement = useMemo(() => {
    if (idx === 0) {
      return {
        background: 'linear-gradient(to right, #f64f59, #c471ed, #12c2e9)',
        backgroundClip: 'text',
        color: 'transparent',
      }
    }
    if (idx === 1) {
      return {
        background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        backgroundClip: 'text',
        color: 'transparent',
      }
    }
    if (idx === 2) {
      return {
        background: 'linear-gradient(to right, #00f260, #0575e6)',
        backgroundClip: 'text',
        color: 'transparent',
      }
    }
    return {}
  }, [idx])
  return (
    <div className="w-full flex items-center justify-center gap-2 relative">
      <div
        className={cn([
          'rounded-full font-bold w-8 h-8 flex justify-center items-center p-2 border border-gray-200 dark:border-gray-400',
        ])}
        style={styleElement}
      >
        0{idx + 1}
      </div>
      <Image
        src="//st.nettruyenvv.com/data/comics/26/sat-thu-buom.jpg"
        alt="image"
        className="w-[80px] h-[100px] object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <h3 className="line-clamp-1 font-semibold">{title}</h3>
        <div>
          <div className="flex items-center py-2 gap-2">
            <FaStar className="text-[#eba573]" />
            <div className="text-xs text-gray-400">{rating} đ.giá</div>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-[#6dc4bd]" />
            <div className="text-xs text-gray-400">{view} lượt xem</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankingCard
