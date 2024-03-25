import { useContext, useEffect, useState } from 'react'
import './CardDetails.css'
import { useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { CiEdit } from 'react-icons/ci'
import Favorite from '../../components/Favorite/Favorite'
import Logo from '../../components/Logo/Logo'
import { AuthContext } from '../../context/AuthContext'
/* import DeleteCard from '../../components/DeleteCard/DeleteCard' */

interface ICard {
  _id: string
  title: string
  subTitle: string
  description: string
  image: { url: string, alt: string }
  bizNumber: number
  user_id: string
  web: string
  address: {street:string, houseNumber:number, city:string }
}

export default function CardDetails() {

  const auth = useContext(AuthContext)

  const { cardId } = useParams()

  const [card, setCard] = useState<ICard|null>(null)
  const [error, setError] = useState<string|null>(null)

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json()
        if (!response.ok) throw new Error(data)
        setCard(data)
      } catch (err) {
        const errMessage = (err as Error).message
        setError(errMessage)
      }
    };
    fetchCard();
  },[cardId])

  return (
    <div className='CardDetails Page'>
      <h3>Card Details</h3>
      <br></br>

      <div>
        {
          (error) &&
            <>
              <h5>Error getting card '{cardId}' :</h5>
              <p style={{color:'red'}}>{error}</p>
            </>
        }
      </div>
      {
        (card) ?
        <Container>
          
          <Row className="g-5">
              <Col>
                <Card className="text-center">
                  {
                        (auth?.userDetails) ? <Favorite id={card._id} /> : ''
                      }
                  <Card.Header style={{fontWeight:'500'}}>{card.title}</Card.Header>
                  <Card.Body>
                    <Card.Img variant="top"
                      src={(card.image.url) ? card.image.url : '/public/images/No_image.png'} alt={(card.image.url) ? card.image.alt : 'No Image Avalible'}
                      style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Title>{card.subTitle}</Card.Title>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <Button variant="primary" size='sm' className='mx-3'><CiEdit className='me-1' size={22} style={{marginTop:'-5px'}}/>Edit Card</Button>
                    {/* {
                      auth?.userDetails?.isAdmin ?
                        <Button variant="primary" size='sm' className='mx-3' onClick={()=> <DeleteCard id={card._id } /> }><CiEdit className='me-1' size={22} style={{marginTop:'-5px'}}/>Delete Card</Button>
                        : ''} */}
                  </Card.Footer>
                </Card>
              </Col>
              <Col className='border rounded'>
                <div className='py-3'>
                  {card.description}
                </div>
                <div className='py-5'>
                  Address: <b>{(card.address.street) ? card.address.street + ' ' + card.address.houseNumber + "," : ''} {card.address.city}</b>
                </div>
                <div className=" py-5 website">
                  <Button href={card.web} target='_blank' variant="secondary">
                    Open {card.title} Website
                  </Button>
                </div>
                <Logo />
              </Col>

          </Row>
        </Container>
          :
          null
      }

    </div>
  )
}
