import HomePage from './Home/HomePage'
import axios from 'axios'

export default function Home({bannerData, bannerImagesData, home2ndData,home4thData,home8thData,home10thData }) {
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
        home4thData={home4thData}
        home8thData={home8thData}
        home10thData={home10thData}
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
  const home4thData = await axios.get('http://localhost:3000/api/home4thapi')
  const home8thData = await axios.get('http://localhost:3000/api/home8thapi')
  const home10thData = await axios.get('http://localhost:3000/api/home10thapi')

  // const newData = await response.json()
  // console.log(response.data)
  // console.log(response)
  console.log(home4thData)

  return {
    props: {
     bannerData:response.data,
     bannerImagesData: bannerImages.data,
     home2ndData: home2ndData.data,
     home4thData: home4thData.data,
     home8thData: home8thData.data,
     home10thData: home10thData.data,
    }
  }

}
