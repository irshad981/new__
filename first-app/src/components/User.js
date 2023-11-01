import { useState } from "react";

export function UserForm(){
    let[name , setName] = useState('');
    let[phone , setPhone] = useState('')

   // prevents the dafualt 
    let handleClick = (e) => {e.preventDefault();
        setName('');
        setPhone('');
    };

    // return (<div>
    //     <h3>Hello {name}</h3>
    //     <button onClick = {handleClick} className="btn btn-primary">Update</button>
    // </div>)

    return (<div className="w-25">
        <h3>{name} Phone ={phone}</h3>

        <form onSubmit={handleClick}>
            <div>
            <input type="text" onChange={e=>setName(e.target.value)} value={name}
             className="form-control" placeholder="Enter name"></input>
            </div>
            
            <div>
            <input type="number" onChange={e=>setPhone(e.target.value)} value ={phone}
             className="form-control" placeholder="Enter Phone number"></input>
            </div>

            <div>
                <input type="submit" value ="Register" className="btn btn-primary"></input>
            </div>

        </form>
        <button onClick = {handleClick} className="btn btn-primary">Update</button>
    </div>);
}