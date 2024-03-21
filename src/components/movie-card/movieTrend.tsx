import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Card, CardContent } from '@mui/material';

interface MovieTrendCardProps {
    movie : MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
    const {dispatch} = useContext(MovieContext);
    return (
      <Card
        key={movie.id}
        elevation={0}
        sx={{ backgroundColor: "transparent" }}
      >
        <CardContent
          sx={{
            padding: 0,
            position: "relative",
            // overflowX: "scroll",
            display: "flex",
          }}
        >
          <img src={movie.thumbnail.regular.large} alt="" style={{width:"300px",height:"100%",borderRadius:"8px"}} />
        </CardContent>
      </Card>
    );
};

export default MovieTrendCard;