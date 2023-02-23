import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useScrollbarWidth } from '../hooks/useScrollbarWidth'
import profilePhoto1 from "../assets/images/24.jpg";
import profilePhoto2 from "../assets/images/01.jpg";
import profilePhoto3 from "../assets/images/02.jpg";
import profilePhoto4 from "../assets/images/03.jpg";
import profilePhoto5 from "../assets/images/04.jpg";
import profilePhoto6 from "../assets/images/07.jpg";
import profilePhoto7 from "../assets/images/15.jpg";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    }
];

const Rightbar = ({isScrollVisible, ...props}) => {
    const scrollbarWidth = useScrollbarWidth();
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', md: 'block' } }} >
            <Box position='fixed' mr={isScrollVisible ? '10px' : 10+scrollbarWidth+'px'}>
                <Typography variant='h6' >Online Friends</Typography>
                <AvatarGroup max={6} sx={{ mb: 2, justifyContent: 'left' }}>
                    <Avatar alt="Travis Howard" src={profilePhoto1} />
                    <Avatar alt="Remy Sharp" src={profilePhoto2} />
                    <Avatar alt="Travis Howard" src={profilePhoto3} />
                    <Avatar alt="Cindy Baker" src={profilePhoto4} />
                    <Avatar alt="Agnes Walker" src={profilePhoto5} />
                    <Avatar alt="Trevor Henderson" src={profilePhoto6} />
                    <Avatar alt="Remy Sharp" src={profilePhoto7} />
                </AvatarGroup>
                <Typography variant='h6' >Gallery</Typography>
                <ImageList cols={3} rowHeight={120} sx={{ ['overflow-y']: 'hidden', mt: 0, mb: 2 }} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant='h6' >Latest Conversation</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 0 }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={profilePhoto7} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src={profilePhoto6} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src={profilePhoto5}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;