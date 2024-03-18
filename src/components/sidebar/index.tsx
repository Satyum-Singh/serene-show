import React from 'react'
import { Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import HomeIcon from '../icons/home-icon'
import MovieIcon from '../icons/movie-icon'
import TvSeriesIcon from '../icons/series-icon'
import BookmarkIcon from '../icons/bookmark-icon'

const navLinks=[{
    name:'Home',
    icon:HomeIcon,
    link:"/",
    },{
    name:'Movies',
    icon: MovieIcon,
    link:"/movies",
    },{
    name:'TV Series',
    icon:TvSeriesIcon,
    linl:"/tv-series"
    },{
    name:'Bookmarks',
    icon:BookmarkIcon,
    link:"/bookmarks"
}]

function Sidebar() {
    const {pathname} = useLocation();
  return (
    <Box sx={{
        backgrundColor:'#161d2f',
        padding:2,
        borderRadius:2,
        display:"flex",
        flexDirection:{
            xs:'row',
            lg:'column',    
        },
        alignItems:'center',
        justifyContent:'space-between',
        width:{
            sm:'100%',
            lg:20,
        }
    }}>

    </Box>
  )
}

export default Sidebar