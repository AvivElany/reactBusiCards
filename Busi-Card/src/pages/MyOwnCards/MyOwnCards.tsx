import './MyOwnCards.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button, Card, Spinner, ListGroup } from 'react-bootstrap';

import { ICard } from '../../interfaces/CardInterfaces';
import { doGetMyCards } from '../../services/CardsService';
import { AiOutlineLike, AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai';
import Title from '../../components/Title/Title';

export default function MyOwnCards() {

  const [cards, setCards] = useState<ICard[] | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const navigate = useNavigate()

  useEffect(() => {
    const getMyCards = async () => {
      const { error, result } = await doGetMyCards()
      if (error) {
        setError(error)
      } else {
        setCards(result)
      }
    }
    getMyCards();
  }, [])

  const goToCardDetails = (cardId: string) => {
    navigate(`/card-details/${cardId}`, { state: { cardId: cardId } })
  }

  return (
    <div className='MyOwnCards Page'>
      <Title title={'My Cards'} />

      <div>
        {(error) && <p>Error getting cards 😞 <br></br> {error}</p>}
      </div>
      {
        (cards) ?
          <>
            <Row xs={1} md={2} lg={3} xl={4} className="g-5">
              {cards.map((card) => (
                <Col key={card._id}>
                  <Card className="text-center">
                    <Card.Header style={{ fontWeight: '500' }}>{card.title}</Card.Header>
                    <Card.Body>
                      <Card.Img variant="top" src={card.image.url} style={{ height: '200px', objectFit: 'cover' }} />
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
                            </ListGroup>
                            <Button href={card.web} target='_blank' variant="secondary">
                                Open {card.title} Website
                            </Button>
                      </Card.Text>
                      <Button variant="primary" size='sm' onClick={() => goToCardDetails(card._id)}>Go to card</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{card.likes.length} <AiOutlineLike size={18} style={{marginTop:'-5px'}}/></Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
            <h5>Total {cards?.length} card</h5>
          </>
        :
          (!error) &&
          <>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              variant='primary'
              aria-hidden="true"
              className='me-2'
            />
            <span>Loading cards, Please wait ...</span>
          </>
      }

    </div>
  )
}
