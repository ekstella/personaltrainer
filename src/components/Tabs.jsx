import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CustomerList from './CustomerList';
import TrainingList from './TrainingList';

// component for displaying different views with tabs
export default () => (
  <Tabs>
    <TabList>
      <Tab>Customers</Tab>
      <Tab>Trainings</Tab>
    </TabList>

    <TabPanel>
      <CustomerList/>
    </TabPanel>
    <TabPanel>
      <TrainingList/>
    </TabPanel>
  </Tabs>
);