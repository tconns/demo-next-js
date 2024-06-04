import LinkBtn from '@/components/common/LinkBtn'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import React from 'react'
import { btnStyles } from '.'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'

type Props = {
  pathname?: string | null
  item: {
    key: string
    name: string
    href: string
    isPopover?: boolean
    items: {
      key: string
      name: string
      href: string
    }[]
  }
}
const DropdownMenuItem: React.FC<Props> = ({ pathname, item }) => {
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false)
  const [timeoutId, setTimeoutId] = React.useState<any>(null)
  const delay = 700

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    setIsOpenDropdown(true)
  }
  const handelMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpenDropdown(false)
    }, delay)
    setTimeoutId(timeout)
  }
  return (
    <>
      <Popover
        isOpen={isOpenDropdown}
        classNames={{
          content: ['w-auto', 'flex-row', 'justify-start', 'p-3', 'gap-4', 'rounded-large'],
        }}
      >
        <PopoverTrigger>
          <LinkBtn
            radius="full"
            variant="light"
            isActive={pathname === item.href}
            className="hover:text-black dark:hover:text-white"
            activeClass={btnStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handelMouseLeave}
            endContent={<MdKeyboardArrowDown />}
          >
            {item.name}
          </LinkBtn>
        </PopoverTrigger>
        <PopoverContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsOpenDropdown(false)}
        >
          {item.items.map((subItem) => (
            <Button
              size="sm"
              radius="full"
              key={subItem.key}
              as={Link}
              href={subItem.href}
            >
              {subItem.name}
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DropdownMenuItem
