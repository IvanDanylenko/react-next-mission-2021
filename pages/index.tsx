import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { KeyboardArrowRight } from '@material-ui/icons';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Reservation process
          </Typography>
          <Grid item md={9}>
            <Typography variant="body1" align="center">
              Welcome to React Mission: task about making reservation with datetime and place
              selection.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Please follow these steps to see what we are talking about!
            </Typography>
          </Grid>
          <Link href="/step/1">
            <Button endIcon={<KeyboardArrowRight />} variant="contained">
              Start
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Layout>
  );
};

export default Home;
