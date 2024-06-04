import { Divider } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Divider className="my-4" />
      <div className="max-w-screen-xl px-4 m-auto">
        <h1 className="font-bold text-xl">MangaHay</h1>
      </div>
      <div className="mx-4 text-center">
        <Divider className="mt-4 mb-2" />
        <div className="text-gray-400">Copyright © 2024 Akira Nguyen. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
