import HomePage from './Home/HomePage'
import axios from 'axios'
// const axios = require('axios')



export default function Home({bannerData, bannerImagesData}) {
  return (
    <div
      style={{
        color:"rgb(23, 52, 101)"
    }}
    >
      <HomePage 
      bannerData={bannerData}
      bannerImagesData={bannerImagesData}
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
  // const newData = await response.json()
  console.log(response.data)

  return {
    props: {
     bannerData:response.data,
     bannerImagesData: bannerImages.data,
    }
  }

}
