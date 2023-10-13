import {useState,useEffect} from 'react';
function Table()
{
    const[showPosts,setshowPosts]=useState([]);
    const apiUrl='https://dummyjson.com/users';/*'https://jsonplaceholder.typicode.com/todos/'*/
    let displayData
    /*function pullJson()
    {
        fetch(apiUrl)
        .then(response=>response.json())
        .then(responseData=>{
            displayData=responseData.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.id}</td>
                    </tr>
                ));
            setshowPosts(displayData)
        });
    } */
    function pullJson() {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                if (Array.isArray(responseData.users)) {
                    const displayData = responseData.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><img src={user.image} style={{height:"30px",width:"30px"}}/></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.domain}</td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    ));
                    setshowPosts(displayData);
                } else {
                    console.error('The "users" property is not an array:', responseData);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
    
    
       
    useEffect(()=>{
        pullJson();
    },[]);
    return(
        <div>
            <center>
            <h1>Dummy Data</h1>
            <table cellspacing="4" border-color="white">
            <tr class="Header">
                <th>SNo.</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            {showPosts} 
            </table>
            </center>
        </div>
        
    )

}
export default Table;