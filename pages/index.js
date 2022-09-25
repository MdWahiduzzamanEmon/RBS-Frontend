import HomePage from './Home/HomePage'
import axios from 'axios'

export default function Home({bannerData, bannerImagesData, home2ndData,home3rdData,home5thData }) {
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
      home3rdData={home3rdData}
      home5thData={home5thData}
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
  const home3rdInfos= await axios.get('http://localhost:3000/api/home3rdapi')
  const home5thInfos= await axios.get('http://localhost:3000/api/home5thApi')

  // const newData = await response.json()
  // console.log(response.data)
  // console.log(response)

  return {
    props: {
     bannerData:response.data,
     bannerImagesData: bannerImages.data,
     home2ndData: home2ndData.data,
     home3rdData: home3rdInfos.data,
     home5thData: home5thInfos.data,
    }
  }

}
