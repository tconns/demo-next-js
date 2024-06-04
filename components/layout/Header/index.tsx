'use client'
import LinkBtn from '@/components/common/LinkBtn'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoCafe } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import DropdownMenuItem from './DropdownMenuItem'
import ThemeToggle from '@/context/ThemeProvider/ThemeToggle'
import { FaUser } from 'react-icons/fa'

const mock = [
  {
    key: 'directory',
    name: 'Danh mục',
    href: '/danh-muc',
  },
  {
    key: 'category',
    name: 'Thể loại',
    href: '/',
    isPopover: true,
    items: [
      {
        key: 'category1',
        name: 'Category 1',
        href: '/',
      },
      {
        key: 'category2',
        name: 'Category 2',
        href: '/',
      },
      {
        key: 'category3',
        name: 'Category 3',
        href: '/',
      },
    ],
  },
  {
    key: 'ranking',
    name: 'Xếp hạng',
    href: '/sd',
  },
  {
    key: 'follow',
    name: 'Theo dõi',
    href: '/sda',
  },
  {
    key: 'History',
    name: 'Lịch sử',
    href: '/sda',
  },
  {
    key: 'contact',
    name: 'Liên hệ',
    href: '/sda',
  },
]
export const btnStyles = 'bg-primaryColor text-white'

const Header: React.FC = () => {
  const pathname = usePathname()
  const renderMenu = () => {
    return mock.map((item) => {
      if (item.isPopover) {
        return (
          <DropdownMenuItem
            key={item.key}
            item={item}
            pathname={pathname}
          />
        )
      }
      return (
        <NavbarItem key={item.key}>
          <LinkBtn
            radius="full"
            variant="light"
            className="hover:text-black dark:hover:text-white"
            isActive={pathname === item.href}
            activeClass={btnStyles}
          >
            {item.name}
          </LinkBtn>
        </NavbarItem>
      )
    })
  }
  return (
    <>
      <Navbar
        shouldHideOnScroll
        isBordered
        classNames={{
          wrapper: ['max-w-screen-xl'],
        }}
      >
        {/* logo container */}
        <NavbarBrand>
          <h1 className="font-bold text-inherit">VTVCab On</h1>
        </NavbarBrand>
        {/* menu */}
        <NavbarContent
          className="hidden md:flex gap-2"
          justify="center"
        >
          {renderMenu()}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="md:hidden">
            <ThemeToggle
              className="h-[40px]"
              buttonProps={{
                variant: 'bordered',
                className: 'border border-primaryColor',
              }}
            />
          </NavbarItem>
          <NavbarItem>
            <LinkBtn
              href="#"
              radius="full"
              className="border text-primaryColor border-primaryColor hover:text-white hover:bg-primaryColor lg:flex hidden"
              variant="bordered"
            >
              Đăng ký/Đăng nhập
            </LinkBtn>
            <Button
              href="#"
              radius="full"
              className="border border-primaryColor hover:text-white text-primaryColor hover:bg-primaryColor lg:hidden"
              variant="bordered"
              isIconOnly
            >
              <FaUser />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default Header
