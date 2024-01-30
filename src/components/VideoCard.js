import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle } = snippet;
    const {viewCount} = statistics
  return (
    <div className='shadow-xl p-2 m-3 w-64 h-80 rounded-lg '>
        <img className='rounded-lg' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold mb-3'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} - Views</li>
        </ul>
    </div>
  )
}

export default VideoCard