import MCard from '@/components/common/MCard'
import Layout from '@/components/layout'
import { getExample } from '@/utils/services'
import Home from '@/mypages/home'
import Spotlight from '@/mypages/home/Spotlight'
import Animation from '@/components/animation'
export default async function Page() {
  const data = await getExample()
  console.log('🚀 ~ Home ~ data:', data)
  return (
    <Layout.Main>
      <Animation.Container>
        <Home.Spotlight />
      </Animation.Container>
      <div className="flex mt-4 gap-4 justify-center">
        {/* <div className="basis-2/3"> */}
        <Home.Main />
        {/* </div>
        <div>
          <Home.Ranking />
        </div> */}
      </div>
    </Layout.Main>
  )
}
