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
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#e0e0e0", my: 3, border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt=""
              style={{ width: "400px", height: "full", borderRadius: "8px" }}
            />
            <Grid item xs={8} marginTop={2}>
              <Grid container spacing={1} alignContent="center">
                <Grid item>
                  <Typography
                    fontSize={10}
                    color="#e0e0e0"
                    aria-label="year of movie"
                  >
                    {movie.year}
                  </Typography>
                </Grid>
                <Grid item marginBottom={2}>
                  <Box
                    sx={{
                      width: "4px",
                      height: "4px",
                      background: "#bdbdbd",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={
                      movie.category === "Movies" ? moviesIcon : tvSeriesIcon
                    }
                    alt="movies"
                    width={16}
                    height={16}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    fontSize={10}
                    color="#e0e0e0"
                    aria-label="movie category"
                  >
                    {movie.category}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      width: "1rem",
                      height: "1rem",
                      bg: "#e0e0e0",
                      borderRadius: "full",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    fontSize={10}
                    color="#e0e0e0"
                    aria-label="movie rating"
                  >
                    {movie.rating}
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="#e0e0e0" padding={0} aria-label="movie title">
                {movie.title}
              </Typography>
              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                    borderRadius: "100%",
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                  onClick={() => handleToggleBookmark(movie.id)}
                >
                  {movie.isBookmarked ? (
                    <BookmarkIcon fill={"#e0e0e0"} />
                  ) : (
                    <BookmarkEmptyIcon />
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
