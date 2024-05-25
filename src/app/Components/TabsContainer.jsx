import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs({ tabItems }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" indicatorColor='secondary' textColor="yellow">
            <Tab label="Education" className='text-white' value="1" />
            <Tab label="Experience"  className='text-white' value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {
            tabItems.education.map((e,index) => {
              return(
                <div key={index}>
                <h1 className='text-yellow-500 mb-2'>{e.duration}</h1>
                <p>{e.institution}</p>
                </div>
                
              )
            })
          }

        </TabPanel>
        <TabPanel value="2">
        <ul className=' list-disc list-outside'>
        {
         
            tabItems.experience.map((e,index) => {
             
              return(
                <div key={index}>
                <li className='py-3 '>{e.text}</li>
                </div>
            
                
              )
           
            })
            
          }
           </ul>
        </TabPanel>
      </TabContext>
    </Box>
  );
}