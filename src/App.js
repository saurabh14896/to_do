import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Assignment from './assignment';

function App() {
  return (
    <div>
      <Grid spacing={1} container justify="center">
        <Grid item md={5} xs={12}>
          <Assignment/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
