import Image from 'next/image'
import "./header.scss"



export function Header(){
    return(
        <div className='header'>
        <div>
          <h1>Hi, I'm Vanessa!</h1>
          <h2>Software Development | Telecommunications Networks | AWS </h2>
        </div>
        <Image
          src="/profile.png"
          alt="Vercel Logo"
          width={250}
          height={250}
          priority
        />
        </div>
    )

}