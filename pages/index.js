import Head from 'next/head'
import Image from 'next/image'
import Banner from './Banner/Banner'
import SpeedUp from './SpeedUp/SpeedUp'


export default function Home() {
  return (
    <div
      style={{
        color:"rgb(23, 52, 101)"
    }}
    >
      <Banner />
      <SpeedUp/>
    </div>
  )
}
