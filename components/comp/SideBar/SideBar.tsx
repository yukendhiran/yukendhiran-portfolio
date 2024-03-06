import Image from "next/image"
import Link from "next/link"

const navLap = [
  {
    name:"Contact.",
    link:"#contact",
  },
  {
    name:"Projects.",
    link:"#projects",
  },
  {
    name:"Experience.",
    link:"#experience",
  },
  {
    name:"About.",
    link:"#about",
  },
  {
    name:"Home.",
    link:"/",
  },
]

const navMob = [
  {
    name:"Contact.",
    link:"#contact",
  },
  {
    name:"Projects.",
    link:"#projects",
  },
  {
    name:"Experience.",
    link:"#experience",
  },
]
const SideBar = () => {
  return (
    <>
    <div className=" h-screen w-14 bg-secondary text-primary border-r-2 border-primary fixed sm:hidden lg:block" >
      <Image
      src="/yuki-w.svg"
      width={30}
      height={30}
      alt="Picture of the author"
      priority={true}
      className=" mx-auto mt-5 w-auto h-auto p-1  "
      
    />
    

     <div className="flex flex-row space-x-3 mt-[500px] -rotate-90   ">
     {
        navLap.map( (item, i) => { 
            return <Link href={item.link} key={i} className="p-2 border-r-2 border-spacing-1 border-primary border-dotted ">{ item.name  }</Link>
         })
     }
     </div>
    </div>

    {/*below is for mobile*/}
    
    
      <div className="lg:hidden sm:block bg-secondary text-primary fixed bottom-0 left-0 w-full flex items-center  p-4 mx-auto overflow-x-auto border-t-2 border-primary ">
     
  

  <div className="flex space-x-2 justify-center">
 
    {navMob.map((item, i) => (
      <Link
        href={item.link}
        key={i}
        className="p-2 bg-primary text-secondary text-xxs rounded-lg"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
    
    </>
  )
}

export default SideBar