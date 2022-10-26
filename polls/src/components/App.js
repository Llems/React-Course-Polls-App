import { useEffect } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import LogIn from './LogIn';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Question from './Question';


const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return(
    <div>
      {props.loading === true ?
      <LogIn/>
      :  <div>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Dashboard/>}/>
            <Route path="/add" exact element={<NewQuestion/>}/>
            <Route path="/leaderboard" exact element={<Leaderboard/>}/>
            <Route path="/question/:id" element={<Question />} />
          </Routes>
        </div>
        }
    
    </div>
  );
};

export const mapStateToProps = ({authedUser}) => (
  {
    loading: authedUser === null,
  }
)

export default connect(mapStateToProps)(App);
