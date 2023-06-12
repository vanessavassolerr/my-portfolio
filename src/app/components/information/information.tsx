import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
      <div className='infos'>
      <h2>Languages</h2>
      <div className="languages-info">
        <text>English - Advanced</text>
        <text>Portuguese - Native Speaker</text>
      
      </div>
      <h2>Education</h2>
      <div className='educational-info'>
        <text>📡 Telecomunications Engineer - Universidade Estadual de Campinas (UNICAMP)</text>
        <text>📡 5G Technologies Training - Universidade Federal de Minas Gerais (UFMG) </text>
      </div>
        </div>
    )
}