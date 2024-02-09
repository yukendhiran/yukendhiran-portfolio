import Image from "next/image"
import Link from "next/link"

const nav = [
  {
    name:"Contact.",
    link:"/",
  },
  {
    name:"Projects.",
    link:"/",
  },
  {
    name:"Experience.",
    link:"/",
  },
  {
    name:"About.",
    link:"/",
  },
  {
    name:"Home.",
    link:"/",
  },
]

const SideBar = () => {
  return (
    <div className=" h-screen w-14 bg-secondary text-primary border-r-2 border-primary fixed" >
      <Image
      src="/yuki-w.svg"
      width={40}
      height={40}
      alt="Picture of the author"
      className=" mx-auto mt-5  "
      
    />
    

     <div className="flex flex-row space-x-3 mt-[500px] -rotate-90 font-space">
     {
        nav.map( (item, i) => { 
            return <Link href={item.link} key={i} className="p-2 border-r-2 border-spacing-1 border-dotted ">{ item.name  }</Link>
         })
     }
     </div>
    </div>
  )
}

export default SideBar