/* import { useEffect } from "react"
import { getToken } from "../../services/UserService"
import { Button } from "react-bootstrap"
import { CiTrash } from "react-icons/ci"


interface IDeleteCardProps {
    id:string
}
export default function DeleteCard(props: IDeleteCardProps) {


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken()
                if (!token) return { error: 'No token found', result: undefined }
                const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${props.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token,
                    },
                });
                const data = await response.json()
                data
                fetchData()
            } catch (err) {
                const errMessage = (err as Error).message
                return { error: errMessage, result: undefined }
            }
        }
        fetchData();
    },[])
    return (
        <Button variant="danger" size='sm' className='mx-3'><CiTrash className='me-1' size={22} style={{marginTop:'-5px'}}/>Delete Card</Button>
    )
}

הקומפוננטה בהערה, היא עובדת, אבל חזק מדי!!
ומחקה את כל הכרטיסיות......
 */