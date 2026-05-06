import { useEffect, useState } from "react"
import {Typography, List, ListItem, ListItemText} from '@mui/material';
import axios from 'axios';
function App() {
  const title = 'Welcome to Reactivities'
  const [activities, setActivities] = useState<Activity[]>([]);


  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  }, [])
  
  return (
    <>
      <Typography variant='h3' className="app" style={{color: 'red'}}>{title}</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
