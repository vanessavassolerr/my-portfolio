import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className='infos'>
        <SectionTitle text="Languages"/>
      <div className="languages-info">
        <span>EN - Advanced</span>
        <span>PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education"/>
      <div className='educational-info'>
        <span></span>
        <span>One year working as a Software Engineer Intern in Itau Unibanco</span>
        </div>
        </div>
    )
}