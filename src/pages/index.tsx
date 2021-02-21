import {useState, useEffect} from 'react';
import Head from 'next/head';
import {List} from 'semantic-ui-react';
import axios from 'axios';

import {Activity} from '../models/activity';
import NavBar from '../Components/NavBar';

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Reactivities</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default Home;
