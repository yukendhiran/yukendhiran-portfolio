import SideBar from "./comp/SideBar/SideBar"
import Hero from "./comp/Hero/Hero"
export default function Home() {
  return (
    <>
    <div className=" bg-secondary flex flex-row  ">
      <SideBar/>
     <Hero />
      
    </div>
    
    </>
  )
}