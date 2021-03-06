import {useState, useEffect, Fragment} from 'react';
import Head from 'next/head';
import {Container} from 'semantic-ui-react';
import axios from 'axios';

import {Activity} from '../models/activity';
import NavBar from '../Components/NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';

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
    <Fragment>
      <Head>
        <title>Reactivities</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Container style={{marginTop: '7rem'}}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
};

export default Home;
