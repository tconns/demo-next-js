import Layout from '@/components/layout'
import Detail from '@/mypages/detail'
import React from 'react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Detail.Background />
      <Layout.Main>{children}</Layout.Main>
    </div>
  )
}
