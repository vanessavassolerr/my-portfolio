import { Header } from './components/header/header/header'
import { Experience } from './components/experience/experience'
import { Info } from './components/information/information'

import "./styles/home.scss"
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Info/>
        <div className="buttons">
          <div className="social">

          </div>
          <button className="btn-primary">Contact me
            <Image
            src="/email-icon.png"
            alt="Email Icon"
            width={24}
            height={24}
            priority
          />
          </button>
        </div>
    </main>
  )
}
