import { Avatar } from "@mui/material";
import {
  Box,
  ImageHolder,
  List,
  ListItem,
} from "./styles";

export const UserBox = ({ attributes, avatarLetter }) => {
  return (
    <Box>
      <ImageHolder>
        <Avatar sx={{ width: 80, height: 80, fontSize: 32}}>{avatarLetter}</Avatar>
      </ImageHolder>
      <List>
        {attributes.map(({ label, value }) => (
          <ListItem><b>{label}:</b> {value}</ListItem>
        ))}
      </List>
    </Box>
  );
}