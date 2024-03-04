import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { client } from '../../../app/lib/sanity'
import { urlForImage } from '@/app/lib/image';
import {  useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Wrapper from "../Hoc/Wrap"

interface Certification {
  cert: {
    asset: {
      _ref: string;
      _type: 'image';
    };
  };
  site: string;
}

function Cert() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const [cert, setCert] = useState<Certification[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "cert"]`
    
    client.fetch(query).then((data: Certification[]) => {
      setCert(data)
      setLoading(false)
    })
  }, [])

  

  if (isLoading) return <p>Loading...</p>
  if (!cert) return <p>No  data</p>
 
  return (
    <div className="sm:text-xs lg:text-sml mt-10">
    <div >Certifications.</div>
    
    <Carousel
      plugins={[plugin.current]}
      className="place-items-center mx-auto sm:w-full lg:w-3/4 h-auto text-primary mt-2  mb-10 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
     <CarouselContent>
          {cert.map((item, index) => (
            <CarouselItem key={index}>
              <a href={item.site}><img src={urlForImage(item.cert)} alt="certification!" className=" place-items-center  w-full  " /></a>
            </CarouselItem>
          ))}
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default Wrapper(Cert);