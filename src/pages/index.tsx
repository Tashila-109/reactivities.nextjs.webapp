import {useState, useEffect, Fragment} from 'react';
import Head from 'next/head';
import {Container} from 'semantic-ui-react';
import axios from 'axios';

import {Activity} from '../models/activity';
import NavBar from '../Components/NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    });
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  return (
    <Fragment>
      <Head>
        <title>Reactivities</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7rem'}}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
        />
      </Container>
    </Fragment>
  );
};

export default Home;
