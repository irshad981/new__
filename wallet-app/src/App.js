import logo from './logo.svg';
import './App.css';
import { ProfileLogin ,ProfileRegister, ProfileSuccss} from './components/Profile';
import {Routes , Link , Route} from 'react-router-dom'


function App() {
  return (
      <div>
        <div className='container-fluid'>
          <div className='alert alert-secondary'>
          <h2 className='text-center'>Wallet Application</h2>
          
          </div>
            <Routes>
              <Route path='' element= {<ProfileLogin/>}></Route>
              <Route path='/login' element= {<ProfileLogin/>}></Route>
              {/* <Route path='/register' element= {<div>Register</div>}></Route> */}
              <Route path='/register' element= {<ProfileRegister/>}></Route>
              <Route path='/success/:emailId/*' element= {<ProfileSuccss/>}></Route>

            </Routes>

        </div>
    </div>
  );
}

export default App;
