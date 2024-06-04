import MCard from '@/components/common/MCard'
import Player from '@/components/common/Player'
import { cn } from '@/utils/style/tailwind'
import { Button, Pagination } from '@nextui-org/react'
import React from 'react'

const Main = () => {
  return (
    <section className="flex flex-col items-center max-w-[800px]">
      {/* <h2 className="flex flex-col items-center w-full text-xl md:text-3xl font-medium mb-6">
        <div>Discover the Trendsetters</div>
        <div>Explore Our Hottest Categories</div>
      </h2> */}
      {/* <div className="flex gap-4 flex-wrap justify-center mb-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <Button
            size="sm"
            key={i}
            radius="full"
            className={cn([
              'border border-gray-200 dark:border-gray-400 bg-transparent text-xs text-gray-400',
              i === 1 && 'bg-black bg-gradient-to-r from-[#000000] to-[#434343] text-white',
            ])}
          >
            VTVCab ON
          </Button>
        ))}
      </div> */}
      <div>
        <div className="grid max-w-[900px] w-full grid-cols-2 sm:grid-cols-4 gap-4">
          <Player />
        </div>
        {/* <div className="grid max-w-[900px] w-full grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <MCard
              image={
                i % 2 === 0
                  ? '//st.nettruyenvv.com/data/comics/178/tieu-gia-chu-cua-tu-xuyen-duong-gia-tro-6665.jpg'
                  : i % 3 === 0
                    ? '//st.nettruyenvv.com/data/comics/26/sat-thu-buom.jpg'
                    : '//st.nettruyenvv.com/data/comics/60/saijo-no-osewa-takane-no-hana-darakena-m-5096.jpg'
              }
              key={i}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Pagination
            total={10}
            classNames={{
              cursor: 'bg-primaryColor',
            }}
            initialPage={1}
          />
        </div> */}
      </div>
    </section>
  )
}

export default Main
