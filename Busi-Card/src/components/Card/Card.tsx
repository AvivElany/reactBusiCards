import { Col } from 'react-bootstrap'
import './Card.css'
import { ICard } from '../../interfaces/CardInterfaces'

interface ICardProps {
    
}
export default function Card(props: ICard) {
    return (
        <div className='Card'>
            <Col key={card._id}>
                  <Card className="text-center">
                    <Card.Header style={{ fontWeight: '500' }}>{card.title}</Card.Header>
                    <Card.Body>
                      {
                      (card.image.url) ?
                          <Card.Img variant="top" src={card.image.url} style={{ height: '200px', objectFit: 'cover' }} />
                          :
                          <Card.Img variant="top" src='/public/images/No_image.png' />
                      }
                      <Card.Title>{card.subtitle}</Card.Title>
                      <Card.Text>
                        {
                          (card.description) ?
                            <Card.Text className='Card-Text'>{card.description}</Card.Text>
                            : ''
                        }
                        <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Phone Number: <b>{card.phone}</b></ListGroup.Item>
                                    <ListGroup.Item>Email: <b>{card.email }</b></ListGroup.Item>
                                    <ListGroup.Item>Address: <b>{(card.address.street)? card.address.street + "," :''} {card.address.city}</b></ListGroup.Item>
                            </ListGroup><br></br>
                                <Button variant='danger' /* onClick={()=> setLike(like-1)} */><AiTwotoneDislike/> </Button>
                                <Button variant='light'>
                                    {card.likes.length}
                                </Button>
                                <Button /* onClick={()=> setLike(like+1)} */> <AiTwotoneLike /></Button><br></br><br></br>
                                <Button href={card.web} target='_blank' variant="secondary">
                                    Open {card.title} Website
                        </Button>
                      </Card.Text>
                      <Button variant="primary" size='sm' onClick={() => goToCardDetails(card._id)}>Go to card</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{card.likes.length} <AiOutlineLike size={18} style={{marginTop:'-5px'}}/></Card.Footer>
                  </Card>
                </Col>
        </div>
    )
}
