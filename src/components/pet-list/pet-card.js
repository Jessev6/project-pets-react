import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles({
  title: {
    fontSize: "1.2rem"
  }
})

const PetCard = (props) => {
  const classes = useStyles();
  const {pet} = props;

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          {pet.name}
        </Typography>

        <Typography>
          Animal: {pet.animal}<br/>
          Date of birth: {pet.birthday}<br/>
          Color: {pet.color}<br/>
        </Typography>
      </CardContent>
    </Card>
  )
}
export default PetCard;