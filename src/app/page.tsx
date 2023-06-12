import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <div className='experience'>
        <h3>Experience</h3>
        <p>One year working as a Software Engineer Intern in Itau Unibanco</p>
        <div className='experience-time'>

        </div>

        <div className='infos'>
          <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Advanced</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span> </span>
          <span>Telecommunications Engineering - State University of Campinas</span>
        </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
        </div>
    </main>
  )
}
