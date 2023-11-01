
export function EmployeeIem(props){
    // employee will have id , name , salry , url
    let employee = props.employee

    return (<>
        <Picture url = {employee.url}/>
        <p> id = {employee.id} , Name = {employee.name} , Salary = {employee.salary} </p>

        {/* <td>
            <Picture url ={employee.url} />
         </td>
         <td>{employee.id}</td>
         <td>{employee.name}</td>
         <td>{employee.salary}</td> */}
    </>)
}

 function Picture(props){
    let imageUrl = props.url;

    return ( < >
       <img className="roundImage" src={imageUrl} width="100" height = "100"/>
    </>)
}

export function EmployeeList(props){
    let employees = props.employees;
    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th> Image</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((value , index)=> <tr key ={index}>
                    {/* <EmployeeIem employee = {value} /> */}
                        <td>
                            <Picture url = {value.url} />
                        </td>
                             
                        <td>
                            {value.id}
                        </td>
                            {value.name}
                        <td>
                             {value.salary}
                        </td>
                    </tr>)}
            </tbody>
        </table>
    </div>
}