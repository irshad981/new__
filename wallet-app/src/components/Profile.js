import { Link, Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; //library which send 




//component sucess
export function ProfileSuccss() {
    let { emailId } = useParams();  // extracts the emailId from thr path parameter

    let data = useLocation();
    let mainData = data.state;

    let [user , setUser] = useState(mainData);


    return (
        <div className="container row">
            <div className="col-4">
                <p> Name : {mainData.name}</p>
                <p>Birthday : {mainData.dob}</p>
                <p>Phone : {mainData.phone}</p>
            </div>


            <div className="col-6">
                <Link to='dashboard'>DashBoard</Link>
                <Link to='addContacts'>DashBoard</Link>
                <Link to='viewContacts'>View Contacts</Link>
                <Link to='wallet'>Wallet</Link>
            </div>

            <Routes>
                <Route path='' element={<div>Welciome , {emailId}</div>}></Route>
                <Route path='dashboard' element={<div>Welcome, {emailId}</div>} />
                <Route path='addContacts' element={<div>Welecome {emailId}, your can add Contacts</div>} />
                <Route path='viewContacts' element={<div>Welcome {emailId}, your can view conatcts</div>} />

                <Route path='wallet' element={<div> welcome , {emailId} this is your wallet</div>} />



            </Routes>

        </div>

    )
}


// component to register
export function ProfileRegister() {
    // profile needs name , email, passworfd  phone, dob

    let [emailId, setEmailId] = useState('');;
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [phone, setPhone] = useState('');
    let [dob, setdob] = useState('');

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        // once the dtaa goes t the backend you need to navigate to the login
        let profile = {
            "name": name,
            "email": emailId,
            "password": password,
            "dob": dob,
            "phone": phone
        }
         
        let url = "http://localhost:9095/api/saveProfile";
        axios.post(url , profile)
        .then(response => console.log(response))
        .catch(err => console.log(err));

         console.log(profile);
         navigate('/login')
    }

    return (<div className="container">
        <h3>Registration</h3> <hr />
        <form onSubmit={handleSubmit}>

            <div className="w-25">
                <label>Enter EmailId</label><br />
                <input type='email' onChange={e => setEmailId(e.target.value)} />
            </div>

            <div className="w-25">
                <label>Enter name</label><br />
                <input type='text' onChange={e => setName(e.target.value)} />
            </div>

            {/* <div className="w-25">
                <input type ='submit' value ='Reggister'></input>

            </div> */}
            <div >
                <label>Enter PASSWORD</label><br />
                <input type='password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="w-25">
                <label>Enter Mobile Number</label><br />
                <input type='phone' onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="w-25">
                <label>Enter Birthday</label><br />
                <input type='date' onChange={e => setdob(e.target.value)} />
            </div>

            <br />
            <div className="w-25">
                <input className="btn btn-primary" type='submit' value='Register'></input>
            </div>

        </form>


        <div>
            <Link to='/login'>Login</Link>
        </div>

        {/* <div className="w-25">
            <input type ='submit' value ='Register'></input>
         </div> */}

    </div>)
}


// compoenent to login
export function ProfileLogin() {

    let [emailId, setEmailId] = useState('');
    let [password, setPassword] = useState('');
    // to programmtically navigate
    let navigate = useNavigate();
    // authenticate the eamil and password
    const handleSubmit = async (e) =>{
        e.preventDefault();
    let profile = {
        "email": emailId,
        "password": password
      
    };
 
    let url = "http://localhost:9095/api/login";
   // http://localhost:9095/api/login

         try {
             const response = await axios.post(url , profile)
             navigate('/success/' + emailId , {state : response.data});
         }catch(err){
            console.log(err);
         }
        };
        
    // let handleSubmit = (e) => {
    //     e.preventDefault();
    //     let response;
    //     axios.post(url , profile)
    //          .then(res => response = res).then(navigate("/success/" + emailId , {state: response}))
    //          .catch(err => console.log(err));
     
    //           console.log(profile);
    //      // url: /success/dynamicId
    // };

    return (<div className="container">
        <h3>Form Login</h3> <hr />
        <form onSubmit={handleSubmit}>
            <div className="w-25">
                <input type="text" placeholder="Enter your emailid"
                    onChange={e => setEmailId(e.target.value)}></input>
            </div>

            <div className="w-25">
                <input type="password " placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}></input>

            </div>

            <br />

            <div>
                <input type='submit' className="btn btn-warning" value='Login'></input>
            </div>

        </form>

        <br />

        <div>
            {/* Create a button that navigates to the "/register" route when clicked */}
            <Link to="/register">
                <button>Create Profile</button>
            </Link>
        </div>
        {/* <div>
            <Link to='/register'> Create Profile</Link>
         </div> */}

    </div>)
}

// export function allcontacts(){

//     // let [emailId, setEmailId] = useState('');;
//     // let [name, setName] = useState('');
//     // let [password, setPassword] = useState('');
//     // let [phone, setPhone] = useState('');
//     // let [dob, setdob] = useState('');

//     // let navigate = useNavigate();

//     // let handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     // once the dtaa goes t the backend you need to navigate to the login
//     //     let profile = {
//     //         "name": name,
//     //         "email": emailId,
//     //         "password": password,
//     //         "dob": dob,
//     //         "phone": phone
//     //     }
         
//         let url = "http://localhost:9095/api/getAllContacts/8";
//         axios.post(url , profile)
//         .then(response => console.log(response))
//         .catch(err => console.log(err));

//          console.log(profile);
       
//         //  navigate('/login')
    


// }