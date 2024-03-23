import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };
  return (
    <Card variant="outlined" sx={{bgcolor: "transparent",color:"#e0e0e0",my:3,border:"none"}}>
       <CardContent sx={{p:0,position:"relative"}}>
        <Grid container spacing={1}>
            <Grid item>
                <img src={movie.thumbnail.regular.large} alt="" style={{width:"400px",height:"180px",borderRadius:"8px"}} />
                <Grid item xs={8}>
                    <Grid container spacing={1} alignContent="center">
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </CardContent> 
    </Card>
  );
};

export default MovieCard;
