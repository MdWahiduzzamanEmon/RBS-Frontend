import HomePage from './Home/HomePage'
import axios from 'axios'

export default function Home({bannerData, bannerImagesData, home2ndData }) {
  return (
    <div
      style={{
        color:"rgb(23, 52, 101)"
    }}
    >
      <HomePage 
      bannerData={bannerData}
      bannerImagesData={bannerImagesData}
      home2ndData={home2ndData}
      />
      <div>

      </div>
    </div>
  )
}

export async function getServerSideProps(){
  // await axios.get('../public/JSON/banner.json')
  const response = await axios.get('http://localhost:3000/api/banner')
  const bannerImages= await axios.get('http://localhost:3000/api/bannerImage')
  const home2ndData = await axios.get('http://localhost:3000/api/home2ndapi')

  // const newData = await response.json()
  // console.log(response.data)
  // console.log(response)

  return {
    props: {
     bannerData:response.data,
     bannerImagesData: bannerImages.data,
     home2ndData: home2ndData.data,
    }
  }

}
