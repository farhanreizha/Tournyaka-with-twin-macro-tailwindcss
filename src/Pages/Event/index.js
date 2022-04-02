/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { ImageOne, ImageTwo, ImageThree } from '../../assets'
import Cards from '../../components/Cards'

const CardItem = [
  {
    title: 'Pangandaran',
    image: ImageOne,
    content:
      'Pasti kali wisata satu ini semua orang udah pada tau yah, pantai Pangandaran yang menjadi salah satu ikon Pangandaran mungkin bisa jadi destinasi yang cocok untuk di kunjungi',
  },
  {
    title: 'Batu Karas',
    image: ImageTwo,
    content:
      'Pantai yang mempunyai julukan little Bali in Java ini bisa jadi salah satu pilihan destinasi kamu waktu liburan di Pangandaran',
  },
  {
    title: 'Green Canyon',
    image: ImageThree,
    content:
      'Siapa sih yang gatau tempat wisata satu ini> Green Canyon bisa jadi pilihan terbaik kamu selagi di Pangandaran sambil menikmati hujan abadi',
  },
]

const StyledContainer = [tw`flex flex-col justify-center mx-[165px]`]
const Title = [tw`text-[48px] line-height[64px] font-extrabold w-[600px]`]
const SubTitle = [tw`text-[18px] line-height[32px] w-[600px]`]

const Event = () => {
  return (
    <div id='Events' tw='pt-[170px] pb-[145px]'>
      <div css={StyledContainer}>
        <div tw='flex flex-col gap-y-[8px] pb-[22px]'>
          <p css={Title}>Destinasi Terbaik</p>
          <p css={SubTitle}>
            Di Pangandaran banyak loh destinasi yang bisa bikin kamu nyaman dan ngeluapin masalah
            yang lagi kamu hadapin.
          </p>
        </div>
        <div tw='flex justify-center gap-10'>
          {CardItem.map((items, idx) => (
            <Cards key={idx} image={items.image} title={items.title}>
              {items.content}
            </Cards>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Event
