import HomePage from './Home/HomePage'
// import axios from 'axios'




export default function Home() {
  return (
    <div
      style={{
        color:"rgb(23, 52, 101)"
    }}
    >
      <HomePage/>
    </div>
  )
}

// export async function getServerSideProps(){
//   const bannerData= await axios.get('../public/JSON/banner.json')
  
// }
