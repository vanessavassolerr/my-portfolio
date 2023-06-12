import { GitIcon } from "../icons/github-icon"
import { LinkdeinIcon } from "../icons/linkedin-icon"
import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
        <a href="https://github.com/vanessavassolerr">
            <GitIcon/>
        </a>
        <a href="https://www.linkedin.com/in/vanessa-vassoler-9513a21a6/">
            <LinkdeinIcon/>
        </a>
        </div>
    )
}