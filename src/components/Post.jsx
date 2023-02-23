import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, ThemeProvider, Typography, useTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { useContext } from "react";

const Post = () => {
    const theme = useTheme();
    return (
        <Card sx={{mb: 2}} >
            <CardHeader 
                avatar={
                    <Avatar  aria-label="recipe" sx={{backgroundColor: theme.palette.primary.main}}>
                        SK
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Serhii Khotsyk"
                subheader="March 01, 2023"
            />
            <CardMedia
                component="img"
                height="40%"
                image="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[700] }} />} />
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;