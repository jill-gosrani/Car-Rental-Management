// src/components/AdminHomePage.js

import React from 'react';
import { Button, colors } from '@material-ui/core';

const AdminHomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
            <path fill="#9fa8da" d="M45,45V25.9c0-1.8-0.8-3.6-2.3-4.7L29.1,10.5c-0.4-0.3-0.9-0.3-1.2,0L14.3,21.2c-1.4,1.1-2.3,2.9-2.3,4.7V45	c0,0.6,0.4,1,1,1h31C44.6,46,45,45.6,45,45z"></path>
            <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.4,13.8l-3.6,2.9c-1.4,1.1-2.3,2.9-2.3,4.7v18.1c0,1.1,0.9,2,2,2h20"></path>
            <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M35,41.5h3.5c1.1,0,2-0.9,2-2V21.4c0-1.8-0.8-3.6-2.3-4.7L24.6,6c-0.4-0.3-0.9-0.3-1.2,0l-4.6,3.6"></path>
            <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M18.5,35.7v-8.2c0-0.6,0.4-1,1-1h8.9c0.6,0,1,0.4,1,1v14"></path>
          </svg>
        </div>
        <div style={styles.nav}>
          <div style={styles.auth}>
            <Button style={styles.authButton}>LOGIN</Button>
            <Button style={styles.authButton}>SIGNUP</Button>
          </div>
          <div style={styles.searchButton}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 128 128">
            <path d="M 56.599609 21.599609 C 34.099609 21.599609 15.800781 40.100781 15.800781 62.800781 C 15.800781 85.600781 34.099609 104 56.599609 104 C 66.899609 104 76.3 100.09922 83.5 93.699219 L 85.800781 96 L 83.699219 98.199219 C 82.499219 99.399219 82.499219 101.3 83.699219 102.5 L 101.69922 120.69922 C 102.29922 121.29922 103.00078 121.59961 103.80078 121.59961 C 104.60078 121.59961 105.40039 121.29922 105.90039 120.69922 L 113.90039 112.59961 C 115.00039 111.39961 115.00078 109.50039 113.80078 108.40039 L 95.800781 90.199219 C 95.200781 89.599219 94.499219 89.300781 93.699219 89.300781 C 92.899219 89.300781 92.099609 89.599219 91.599609 90.199219 L 89.5 92.400391 L 87.199219 90 C 93.499219 82.7 97.400391 73.200781 97.400391 62.800781 C 97.400391 40.100781 79.099609 21.599609 56.599609 21.599609 z M 56.599609 27.699219 C 75.799609 27.699219 91.400391 43.500391 91.400391 62.900391 C 91.400391 82.300391 75.799609 98 56.599609 98 C 37.399609 98 21.800781 82.300391 21.800781 62.900391 C 21.800781 43.500391 37.399609 27.699219 56.599609 27.699219 z M 56.699219 40.199219 C 47.199219 40.199219 38.7 46.300781 35.5 55.300781 C 35 56.600781 35.699609 58.199609 37.099609 58.599609 C 37.399609 58.699609 37.7 58.800781 38 58.800781 C 39.1 58.800781 40.1 58.1 40.5 57 C 42.9 50.1 49.499219 45.400391 56.699219 45.400391 C 58.099219 45.400391 59.300781 44.200781 59.300781 42.800781 C 59.300781 41.400781 58.099219 40.199219 56.699219 40.199219 z M 37.699219 64.900391 C 36.299219 64.900391 35.099609 66 35.099609 67.5 L 35.099609 67.900391 C 35.199609 69.300391 36.300781 70.5 37.800781 70.5 C 39.200781 70.5 40.400391 69.300391 40.400391 67.900391 L 40.400391 67.599609 C 40.400391 66.099609 39.300781 64.900391 37.800781 64.900391 L 37.699219 64.900391 z M 93.800781 96.599609 L 107.59961 110.59961 L 103.80078 114.40039 L 90 100.40039 L 93.800781 96.599609 z"></path>
        </svg>
          </div>
        </div>
      </header>
      <main style={styles.main}>
        <Button style={styles.mainButton}>REQUESTS</Button>
        <Button style={styles.mainButton}>CARS</Button>
        <Button style={styles.mainButton}>COMPLAINT</Button>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
  },
  header: {
    width: '100%',
    maxWidth: '1100px',
    backgroundColor: '#e6070C80036',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    marginBottom: '40px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  logo: {
    fontSize: '24px',
    margin: 0,
    color: 'white',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  auth: {
    display: 'flex',
    marginRight: '20px',
  },
  authButton: {
    margin: '0 5px',
    padding: '5px 10px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
  },
  searchButton: {
    fontSize: '20px',
    padding: '5px',
    minWidth: 'unset',
    color: 'white',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '800px',
  },
  mainButton: {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    flex: '1',
    margin: '0 10px',
  },
};

export default AdminHomePage;