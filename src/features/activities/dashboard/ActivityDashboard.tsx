import React from 'react';
import {Grid, List} from 'semantic-ui-react';
import {Activity} from '../../../models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './AvtivityList';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props) => {
  return (
    <Grid>
      <Grid.Column width='10'>
        <List>
          <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
        </List>
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedActivity && !editMode && (
          <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm} />
        )}
        {editMode && <ActivityForm createOrEdit={createOrEdit} closeForm={closeForm} activity={selectedActivity} submitting={submitting} />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
