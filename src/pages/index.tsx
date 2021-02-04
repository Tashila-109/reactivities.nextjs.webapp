import {useState, useEffect} from 'react';
import Head from 'next/head';
import {Header, Icon, List} from 'semantic-ui-react';
import axios from 'axios';

import {IActivity} from '../models/activity';

const Home = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
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
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
        <List>
          {activities.map(activity => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Header>
    </div>
  );
};

export default Home;
