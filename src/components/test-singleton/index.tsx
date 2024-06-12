import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppStore } from '../../patterns/singleton';

export const TestSingleton = () => {
  const [name, setName] = useState('');
  const { updateStore } = useAppStore('TestSingleton');
  const handleUpdateStore = () => {
    updateStore({ name });
  };

  return (
    <Grid container alignItems="center" justifyContent="flex-start">
      <Grid item xs={12}>
        <h1>Counter Singleton Store</h1>
        <Grid container direction="column" style={{ width: 600 }} rowGap={3}>
          <TextField
            id="name-text-field"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
          />
          <Button variant="contained" onClick={handleUpdateStore}>
            Update Store
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <DisplayNameComponent />
      </Grid>
    </Grid>
  );
};

const DisplayNameComponent = () => {
  const {
    store: { name },
  } = useAppStore('DisplayNameComponent');
  return (
    <>
      <h2>
        Name: <u>{name}</u>
      </h2>
    </>
  );
};
