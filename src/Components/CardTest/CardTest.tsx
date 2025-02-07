import "./CardTestStyle.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

type CardTestPropsType = {
  name: string;
  image: string;
  to: string;
  test: string;
};

export default function CardTest({ image, name, test, to }: CardTestPropsType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={to} target="blank_">
        <CardMedia
          className="img"
          component="img"
          height="196"
          image={image}
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="body2">
          {test} <br />
        </Typography>
        <span className="quote-name">—{name}</span>
        <span className="coma comaR">
          <Quote />
        </span>
      </CardContent>
    </Card>
  );
}
