'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import img from '@/app/whatbytes_logo.png';

function Navbar() {
    // const [name, setName] = useState("Rahil Siddiqui");
    const name = "Rahil Siddiqui";
  return (
    <div className="border-b py-1">
    <div className="flex h-16 items-center px-4">
      <Image src='/images/whatbytes_logo.png' alt="WhatBytes" width={100} height={100} />
      <h2 className="scroll-m-20 pl-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
       WhatBytes
      </h2>
      <div className="ml-auto flex items-center space-x-4">
        <Button
        variant="outline"
        role="combobox"
        aria-label="Select a team"
        className="justify-between"
      >
        <Avatar className="mr-2 h-5 w-5">
          <AvatarImage
            src={`https://github.com/shadcn.png`}
            alt={"Avatar"}
            className="grayscale"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        {name}
      </Button>
      </div>
    </div>
  </div>
  )
}

export default Navbar