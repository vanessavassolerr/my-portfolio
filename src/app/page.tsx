import { Header } from './components/header/header/header'
import { Experience } from './components/experience/experience'
import { Info } from './components/information/information'
import { SocialBtns } from './components/social-btns/social-btns'
import "./styles/home.scss"
import Image from 'next/image'
import { EmailIcon } from './components/icons/email-icon'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href='mailto:vvassoler10@gmail.com'>Contact me
          <EmailIcon/>
          </a>
        </div>
    </main>
  )
}
