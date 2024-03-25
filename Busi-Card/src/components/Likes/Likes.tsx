import './Likes.css'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { AiOutlineLike } from 'react-icons/ai'

interface ILikesProps {
    likes: number
    id: string
}

export default function Likes(props: ILikesProps) {

    const [addLike, setAddLike] = useState(props.likes)
    
    const addOneLike = (like:number) => {
        if (like > like + 1) {
            return like
        } else {
            setAddLike(like + 1)
        }
    }

    return (
        <Card.Footer className="text-muted">
            {addLike} 
            <Button variant='clear' onClick={() => addOneLike(props.likes)}>
                {
                    (props.likes === addLike) ?
                    <AiOutlineLike size={18} style={{ marginTop: '-5px', marginLeft: '-5px' }} />
                    :
                    <AiOutlineLike size={18} fill='#ffc107' style={{ marginTop: '-5px', marginLeft: '-5px' }} />
                }
            </Button>
            </Card.Footer>
    )
}
