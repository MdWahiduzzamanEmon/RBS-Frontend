import HomePage from './Home/HomePage'
import axios from 'axios'
// const axios = require('axios')



export default function Home({ bannerData, home2ndData }) {
  return (
    <div
      style={{
        color:"rgb(23, 52, 101)"
    }}
    >
      <HomePage
        bannerData={bannerData}
        home2ndData={home2ndData}
      
      />
      <div> </div>
    </div>
  )
}

export async function getServerSideProps(){
  // await axios.get('../public/JSON/banner.json')
  const response = await axios.get('http://localhost:3000/api/banner')
  const home2ndData = await axios.get('http://localhost:3000/api/home2ndapi')

  // const newData = await response.json()
  // console.log(response.data)
  // console.log(response)

  return {
    props: {
      bannerData: response.data,
      home2ndData: home2ndData.data,
    }
  }

}
