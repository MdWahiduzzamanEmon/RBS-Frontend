import HomePage from './Home/HomePage'
import axios from 'axios'
// const axios = require('axios')



export default function Home({bannerData}) {
  return (
    <div
      style={{
        color:"rgb(23, 52, 101)"
    }}
    >
      <HomePage bannerData={bannerData}/>
      <div>
     
      

      </div>
    </div>
  )
}

export async function getServerSideProps(){
  // await axios.get('../public/JSON/banner.json')
  const response = await axios.get('http://localhost:3000/api/banner')
  // const newData = await response.json()
  console.log(response.data)

  return {
    props: {
     bannerData:response.data
    }
  }

}
