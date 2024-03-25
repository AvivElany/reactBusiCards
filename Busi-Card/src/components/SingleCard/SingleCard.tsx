import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col, ListGroup } from 'react-bootstrap'
import './SingleCard.css'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa6'
import { AiOutlineLike } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


interface ICard {
    id: string
    title: string
    subtitle: string
    description: string
    phone: number
    email: string
    web: string
    imageURL: string
    imageAlt: string
    city: string
    street: string
    likes: number
    user_id: string
}


export default function SingleCard(props: ICard) {
    
    const navigate = useNavigate()

    const goToCardDetails = (cardId: string) => {
        navigate(`/CardDetails/${cardId}`, { state: { cardId: cardId } })
    }
    
            return (
                <div className='SingleCard'>
                    <Col key={props.id}>
                        <Card className="text-center">
                            <CardHeader className='favorite' style={{ fontWeight: '500' }}>
                                <Button id={props.id} /* onClick={() => handleFavorite(props.id)} */>
                                    {
                                        (localStorage.getItem("favorites") === props.id) ?
                                            <CiStar fill='#00f' />
                                            :
                                            <FaStar fill='#FFC107' />
                                    }
                                </Button>
                            </CardHeader>
                            
                            <CardBody>
                                {
                            
                                    (props.imageURL) ?
                                        <CardImg variant="top" src={props.imageURL} style={{ height: '200px', objectFit: 'cover' }} />
                                        :
                                        <CardImg variant="top" src='/public/images/No_image.png' />
                                }
                                <CardTitle>{props.subtitle}</CardTitle>
                                <CardText>
                                    {
                                        (props.description) ?
                                            <CardText className='Card-Text'>{props.description}</CardText>
                                            : ''
                                    }
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Phone Number: <b>{props.phone}</b></ListGroup.Item>
                                        <ListGroup.Item>Email: <b>{props.email}</b></ListGroup.Item>
                                        <ListGroup.Item>Address: <b>{(props.street) ? props.street + "," : ''} {props.city}</b></ListGroup.Item>
                                    </ListGroup>
                                    <br></br>
                                    <Button href={props.web} target='_blank' variant="secondary">
                                        Open {props.title} Website
                                    </Button>
                                </CardText>
                                <Button variant="primary" size='sm' onClick={() => goToCardDetails(props.id)}>Go to card</Button>
                            </CardBody>
                            <br></br>
                            <CardFooter className="text-muted">{props.likes} <AiOutlineLike size={18} style={{ marginTop: '-5px' }} /></CardFooter>
                        </Card>
                    </Col>
                </div>
            )
        }