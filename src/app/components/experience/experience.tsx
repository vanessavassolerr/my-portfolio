import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"

export function Experience(){
    return(
        <div className='experience'>

        <h2>Experience</h2>
        <p>One year working as a Software Developer Intern in Itau Unibanco</p>
        <div className='experience-time'>
            <div>
            <Image
            src="/python-icon.svg"
            alt="Python logo"
            width={80}
            height={80}
            priority
            /><text>Python for Web development, using Django and Flask APIs frameworks.</text>
            </div>
            <div>
            <Image
            src="/js-icon.svg"
            alt="Js logo"
            width={60}
            height={60}
            priority
            />
            <text>Producing front-end applications and performing code analysis and overall improvement of style and usability.</text>
            </div>
            <div>
            <Image
            src="/awsprac.png"
            alt="AWS logo"
            width={60}
            height={60}
            priority
            /> <text>1X AWS Certified. Foundational understanding of AWS Cloud concepts, services, and terminology</text>
            </div>
        </div>
        </div>
    )
}

