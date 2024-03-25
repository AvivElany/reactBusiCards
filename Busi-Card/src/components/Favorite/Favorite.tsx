import { useEffect } from 'react'
import './Favorite.css'
import { Button, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'

interface IFavoriteProps {
    id: string
}

export default function Favorite(props: IFavoriteProps) {

    useEffect(() => {
        if (!localStorage.getItem("favorites")) {
            let favoritesArr: string[] = new Array()
            localStorage.setItem('favorites', JSON.stringify(favoritesArr))
        }
    }, [])

    
    return (
        <Card.Header className='favorite' style={{ fontWeight: '500' }}>
            <Button variant='clear' id={props.id} onClick={() => handleFavorite(props.id)}>
                <FaStar fill='#FFC107' />
            </Button>
            </Card.Header>
    )
}
