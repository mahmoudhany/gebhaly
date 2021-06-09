import React from 'react'
import Image from 'next/image'
import LoadingGif from '../../assets/loading.gif'

export default function Loading() {
  return (
    <div className="loading-img">
      <Image src={LoadingGif}
        width='200' height='200'
        className='loading-img'
      />
    </div>
  )
}
