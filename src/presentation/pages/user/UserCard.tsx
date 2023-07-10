import React from 'react';
import { User } from "../../../domain/models/user"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
  user: User
}

const styles = { 
  card: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    minWidth: 275,
    maxWidth: 500,
    height: 200
  },
  typography: {
    fontSize: 14,
    textAlign:'end'
  } 
}

const UserCard: React.FC<Props> = ({ user }) => {
  const { id, firstName, job, jobDescriptor } = user

  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography sx={styles.typography} color="text.secondary" gutterBottom>
          {id}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5" component="div">
          {firstName}
        </Typography>
        <Typography variant="body2">
          {job}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {jobDescriptor}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserCard