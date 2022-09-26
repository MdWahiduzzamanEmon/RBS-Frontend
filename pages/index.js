import HomePage from './Home/HomePage'
import axios from 'axios'

export default function Home({
  bannerData, 
  bannerImagesData, 
  home2ndData,
  home3rdData,
  home4thData,
  home5thData,
  home6thData,
  home7thData,
  home8thData,
  home9thData,
  home10thData,
purchaseCardData,
// footerData
}) {
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
      home4thData={home4thData}
      home5thData={home5thData}
      home6thData={home6thData}
      home7thData={home7thData}
      home8thData={home8thData}
      home9thData={home9thData}
      home10thData={home10thData}
      purchaseCardData={purchaseCardData}
      // home11thData={home11thData}
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
  const home5thInfos= await axios.get('http://localhost:3000/api/home5thapi')
  const home7thInfos= await axios.get('http://localhost:3000/api/home7thapi')
  const home4thData = await axios.get('http://localhost:3000/api/home4thapi')
  const home6thData = await axios.get('http://localhost:3000/api/home6thapi')
  const home8thData = await axios.get('http://localhost:3000/api/home8thapi')
  const home9thData = await axios.get('http://localhost:3000/api/home9thapi')
  const home10thData = await axios.get('http://localhost:3000/api/home10thapi')
  const purchaseCardInfos = await axios.get('http://localhost:3000/api/purchaseCard')
  // const footerInfos= await axios.get('http://localhost:3000/api/footerapi')
  // const home11thData = await axios.get('http://localhost:3000/api/home11thapi')

  // const newData = await response.json()
  // console.log(response.data)
  // console.log(response)
  console.log(home4thData)

  return {
    props: {
     bannerData:response.data,
     bannerImagesData: bannerImages.data,
     home2ndData: home2ndData.data,
     home3rdData: home3rdInfos.data,
     home5thData: home5thInfos.data,
     home7thData: home7thInfos.data,
     home4thData: home4thData.data,
     home8thData: home8thData.data,
     home9thData: home9thData.data,
     home6thData: home6thData.data,
     home10thData: home10thData.data,
     purchaseCardData: purchaseCardInfos.data,
    //  footerData: footerInfos.data
    }
  }

}
