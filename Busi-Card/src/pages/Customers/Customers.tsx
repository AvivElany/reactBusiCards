import './Customers.css'

import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button, Card, Spinner, ListGroup } from 'react-bootstrap';

import { ICard } from '../../interfaces/CardInterfaces';
import { doGetAllCards } from '../../services/CardsService';
import Likes from '../../components/Likes/Likes';
import Favorite from '../../components/Favorite/Favorite';
import Title from '../../components/Title/Title';
import { AuthContext } from '../../context/AuthContext';
/* import DeleteCard from '../../components/DeleteCard/DeleteCard'; */

export default function Customers() {

  const auth = useContext(AuthContext)

  const [cards, setCards] = useState<ICard[] | null>(null)
  const [error, setError] = useState<string | null>(null)


    const navigate = useNavigate()

    useEffect(() => {
      const getAllCards = async () => {
        const { error, result } = await doGetAllCards()
        if (error) {
          setError(error)
        } else {
          setCards(result)
        }
      }
      getAllCards();
    }, [])
  
    const goToCardDetails = (cardId: string) => {
      navigate(`/card-details/${cardId}`, { state: { cardId: cardId } })
    }

    return (
      <div className='Customers Page'>
        <Title title={'Our Customers'} />
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

                      {
                        (auth?.userDetails) ? <Favorite id={card._id} /> : ''
                      }

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
                            <ListGroup.Item>Email: <b>{card.email}</b></ListGroup.Item>
                            <ListGroup.Item>Address: <b>{(card.address.street) ? card.address.street + "," : ''} {card.address.city}</b></ListGroup.Item>
                          </ListGroup><br></br>
                          <Button href={card.web} target='_blank' variant="secondary">
                            Open {card.title} Website
                          </Button>
                        </Card.Text>
                        <Button variant="primary" size='sm' onClick={() => goToCardDetails(card._id)}>Go to card</Button>
                      </Card.Body>

                      <Likes likes={card.likes.length} id={card._id} />
                      {/* {
                      auth?.userDetails?.isAdmin ?
                        <Button variant="primary" size='sm' className='mx-3' onClick={()=> <DeleteCard id={card._id } /> }><CiEdit className='me-1' size={22} style={{marginTop:'-5px'}}/>Delete Card</Button>
                        : ''} */}
                      
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