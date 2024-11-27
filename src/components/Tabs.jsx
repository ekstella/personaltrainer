import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CustomerList from './CustomerList';

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
      
    </TabPanel>
  </Tabs>
);