import logo from './logo.svg';
import './App.css';
import { EmployeeIem , EmployeeList } from './components/Employee';
import { UserForm } from './components/User';

// 
function App() {
  // let user1 = {firstname : "Sachin" , lastname: "Tendulkar" , age : 50};
  // let user2 = {firstname : "Virat" , lastname: "Tendulkar" , age : 35};

  let employee1={id:1 , name:"Virat Kohli" , salary:50000 , url:"https://www.livemint.com/lm-img/img/2023/10/04/600x338/Dhoni_new_haircut_1696407893379_1696407905084.jpg"};
  let  employee2={id:2 , name :"de kock", salary:10000, url: "https://th.bing.com/th?id=OIF.Y%2bA%2fb6epWOR%2fVfagxhMBFA&pid=ImgDet&rs=1"};
  let  employee3={id:3 , name :"saurav ganguly", salary:10000, url: "https://th.bing.com/th?id=OIF.Y%2bA%2fb6epWOR%2fVfagxhMBFA&pid=ImgDet&rs=1"};
  let  employee4={id:4 , name :"zaheer khan", salary:10000, url: "https://th.bing.com/th?id=OIF.Y%2bA%2fb6epWOR%2fVfagxhMBFA&pid=ImgDet&rs=1"};


  let employees = [employee1 , employee2 , employee3 , employee4]
  let employeeMap = employees
      .map((value , index) => <EmployeeIem key ={index} employee ={value}/>)

  return (
     <div className='gap'>
      <h2>My First React Application</h2>
      {/* <Hello user = {user1} />
      <Hello user = {user2}/> */}
     {/* <EmployeeIem employee = {employee1} />
     <EmployeeIem employee = {employee2} /> */}
   
     {/* {employeeMap} */}

     {/* <button className='btn btn-primary'> MyButton</button>
     <button className='btn btn-danger'> MyButton</button> */}

     <UserForm/>
     <EmployeeList  employees = {employees} />
     
     </div>
  );
}

function Hello(props){
  // let fn = props.user.firstname;
  // let ln = props.user.lastname;
  // let age = props.user.age;
  let user = props.user
  return (
    <div>
      {/* <h3> Helllo {fn} {ln}, Your age is {age}</h3> */}
      <h3> Helllo {user.firstname} {user.lastname}, Your age is {user.age}</h3>
    </div>
  )
}

function prog(){
  return (
    <div>
      <h4>this bhvfvnsj fbfdjnsfv fvdsbvj</h4>
    </div>
  )
}

export default App;
