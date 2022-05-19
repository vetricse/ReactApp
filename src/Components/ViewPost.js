import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ViewPost() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            VP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vetri Palanivel"
        subheader="Mar, 22 2022"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://pps.whatsapp.net/v/t61.24694-24/240131794_458451552485726_7378661301118804130_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVzIQiVlL3yIs-5PRRju0GpDD2rltedCz3_e9IVwf9Gpuw&oe=62964D27"
        alt="VETRI PIC"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
        to demonstrate the visual form of a document or a typeface without 
        relying on meaningful content.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <input type="text" placeholder="Comment" />
        
        </CardActions>
     
    </Card>
  );
}