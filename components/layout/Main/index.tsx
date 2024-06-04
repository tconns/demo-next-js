import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Script from 'next/script'

type Props = {
  children: React.ReactNode
}
const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Script src="/jwplayer-8.9.3.js" />
      <Script src="/jwplayer.core.controls.js" />
      <Script src="/jwplayer.hlsjs.min.js" />
      <Script src="/hls.min.js" />
      <Script src="/provider.hlsjs.js" />
      <main className="max-w-screen-xl relative z-0 min-h-[120vh] px-4 m-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Main
