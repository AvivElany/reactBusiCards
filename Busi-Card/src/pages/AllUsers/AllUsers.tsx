import './AllUsers.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { apiBase } from '../../config';
import { getToken } from '../../services/UserService';
import { IUserDetails } from '../../interfaces/UserInterfaces';
import Title from '../../components/Title/Title';




export default function AllUsers() {

    const [allUsers, setAllUsers] = useState<IUserDetails[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken()
                if (!token) return { error: 'No token found', result: undefined }
                const response = await fetch(`${apiBase}/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token,
                    },
                });
                const data = await response.json()
                console.log(data[572]);
                
                setAllUsers(data);

                if (!response.ok) return { error: data, result: undefined }
                return { error: undefined, result: data }
            } catch (err) {
                const errMessage = (err as Error).message
                return { error: errMessage, result: undefined }
            }
        }
        fetchData();
    },[])

    const auth = useContext(AuthContext)

    return (
        <div className='AllUsers'>
            <Title title={'All Users'} />
            {
                (auth?.userDetails?.isAdmin) ?
                    <>
                    <table>
                        <thead>
                            <th className='tableHeader'><b>ID</b></th>
                            <th className='tableHeader'><b>First Name</b></th>
                            <th className='tableHeader'><b>Last Name</b></th>
                            <th className='tableHeader'><b>Phone</b></th>
                            <th className='tableHeader'><b>Email</b></th>
                            <th className='tableHeader'><b>password</b></th>
                            <th className='tableHeader'><b>Is Admin?</b></th>
                            <th className='tableHeader'><b>Is Business</b></th>
                        </thead>
                        {
                        allUsers?.map((user)=>(
                            <tr key={user._id}>
                                <th>{user._id}</th>
                                <th>{user.name.first}</th>
                                <th>{user.name.last}</th>
                                <th>{user.phone}</th>
                                <th>{user.email}</th>
                                <th>{user.password}</th>
                                <th>{user.isAdmin? 'Yes':'No'}</th>
                                <th>{user.isBusiness? 'Yes':'No'}</th>
                            </tr>
                        ))
                        }
                        </table>
                        </>
                    :
                    <h3 className='noPermission'>Sorry, you don't have permission</h3>
            }
        </div>
    )
}