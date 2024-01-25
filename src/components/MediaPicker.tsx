/* eslint-disable @next/next/no-img-element */
'use client'

import { ChangeEvent, useState } from "react"

export default function MediaPicker(){
  const [previw, setPreviw] = useState<string | null>(null)

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>){
    const { files } = event.target

    if(!files){
      return
    }

    const previwUrl = URL.createObjectURL(files[0])

    console.log(previwUrl)

    setPreviw(previwUrl)
  }

  return(
    <>
      <input 
      onChange={onMediaSelected}
      type="file" id="media"
      className="invisible h-0 w-0" 
      accept="image/*"
      />

      {previw && <img src={previw} alt="" className="aspect-video w-full rounded-lg object-cover"  />}
    </>
  )
}