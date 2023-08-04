import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='messageSender'>
<div className='messageSender__top'>
    <Avatar src='' />
    <form>
        <input 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        className='messageSender__input'
        placeholder='whats on your mind,username'
        />
        <input
        value = {imageUrl}
        onChange = { (e) => setImageUrl(e.target.value)}
        placeholder='image url(optional)'
        />
        <button onClick = {handleSubmit} type='submit'>Hidden submit</button>
    </form>
</div>
<div className = "messageSender__bottom">
                 <div className = "messageSender__options">
                    <VideocamIcon style = {{ color: "red"}}/>
                    <h3>Live video</h3>
                 </div>
                 <div className = "messageSender__options">
                    <PhotoLibraryIcon style = {{ color: "green"}} />
                    <h3>Photo/Video</h3>
                 </div>
                 <div className = "messageSender__options">
                    <InsertEmoticonIcon style = {{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                 </div>        
            </div>
    </div>
  )
}

export default MessageSender