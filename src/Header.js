import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { Avatar, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';



function Header() {
  
    return (
        <div className = "header">
            <div className = "header__left">
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt = "FB-Logo"
                />
                <div className = "header__input">
                    <SearchIcon />
                    <input type = "text" placeholder = "search facebook" className = "header__input__text" />
                </div>
            </div>
            <div className = "header__middle">
                <div className = "header__options header__options--active">
                    <HomeIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <FlagIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SubscriptionsOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <StorefrontOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div>
            </div>
            <div className = "header__right">
                <div className = "header__info">
                    <Avatar 
                        
                    />
                    <h4>Username</h4>
                </div>
                    <IconButton>
                        <AddIcon fontSize = "large" />
                    </IconButton>
                    <IconButton>
                        <ForumIcon fontSize = "large"/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon  fontSize = "large"/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownOutlinedIcon  fontSize = "large"/>
                    </IconButton>
            </div>
        </div>
    )
}

export default Header