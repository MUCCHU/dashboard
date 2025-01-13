import React, { useEffect } from 'react'
import { Card } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
  import Image from 'next/image';
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
  import { Copy } from "lucide-react"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from 'lucide-react';
  
function InputGroup(props:any){
    const {label, srno, val, setVal} = props
    return (          
    <div className="grid grid-cols-7 flex-1 gap-2">
        <Label htmlFor="link" className="col-span-5 flex items-center gap-2 text-lg">
            <div className='rounded-full w-6 text-white font-black h-6 bg-blue-900 flex items-center justify-center'>{srno}</div>
          {label}
        </Label>
        <Input
          className="col-span-2"
          id="link"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>)
}
function Details(props:any) {
    const {rank, score, percentile, setRank, setScore, setPercentile} = props
    const [_rank, _setRank] = React.useState(0)
    const [_score, _setScore] = React.useState(0)
    const [_percentile, _setPercentile] = React.useState(0)

    useEffect(() => {
        _setRank(rank)
        _setScore(score)
        _setPercentile(percentile)
    },[])
    const onSave = () => {
        setRank(_rank);
        setScore(_score);
        setPercentile(_percentile);
    }
  return (
    <Card className="flex flex-col sm:flex-row py-6 px-3 items-center gap-1.5">
                <Image
                  src="/images/HTML5_logo.png"
                  alt="HTML 5 logo"
                  width={75}
                  height={75}
                />
                <div className="grow">
                  <h2 className="text-center sm:text-left font-black pb-1">
                    Hyper Text Markup Language
                  </h2>
                  <p>
                    Questions: 15 | Duration: 12 mins | Submitted on 5 June 2021
                  </p>
                </div>
                <Dialog >
                <DialogTrigger asChild>
        <Button variant="default">Update</Button>
      </DialogTrigger>
                <DialogContent className="w-max max-w-none">
        <DialogHeader>
          <DialogTitle className='text-2xl font-black p-3'>Update Scores</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
            <InputGroup srno={1} label="Update your Rank" val={_rank} setVal={_setRank} />
            <InputGroup srno={2} label="Update your Percentile" val={_percentile} setVal={_setPercentile} />
            <InputGroup srno={3} label="Update your Current Score (out of 15)" val={_score} setVal={_setScore} />
        </div>
        <DialogFooter className="justify-end gap-4">
          <DialogClose asChild>
            <Button type="button" variant="outline" className='text-primary border-primary font-extrabold'>
              Cancel
            </Button>
          </DialogClose>
        <DialogClose asChild>
            <Button type="button" onClick={onSave}>Save <ArrowRight/> </Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
                </Dialog>

                
              </Card>
  )
}

export default Details