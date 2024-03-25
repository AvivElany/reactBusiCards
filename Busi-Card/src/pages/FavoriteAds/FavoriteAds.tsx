import "./FavoriteAds.css";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { jwtDecode } from "jwt-decode";
import { IUserCustomJwtPayload } from "../../interfaces/IUserDetails";
import { ICard } from "../../interfaces/CardInterfaces";
import { Button, CardBody, CardImg, CardText, CardTitle, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import Favorite from "../../components/Favorite/Favorite";
import Likes from "../../components/Likes/Likes";

export default function FavoriteAds() {

  const auth = useContext(AuthContext);
  const [favoriteAds, setFavoriteAds] = useState<ICard[]>([]);
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    const fetchAllMyCards = async () => {
      const token: string | null = localStorage.getItem('userToken');
      if (!token) return;

      const decoded: IUserCustomJwtPayload = jwtDecode<IUserCustomJwtPayload>(token);

      try {
        const response = await fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error('Failed to fetch cards');

        const data = await response.json();

        const userfavoriteAds = data.filter((card: ICard) => card.likes.includes(decoded._id));

        setFavoriteAds(userfavoriteAds);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchAllMyCards();
  }, []);

  return (
    <div className="FavoriteAds">
      <div className="title">
        <h1>My Favorites Cards</h1>
      </div>

      <div>
          {(error) && <p>Error getting cards 😞 <br></br> {error}</p>}
        </div>
        {
          (favoriteAds) ?
            <>
              <Row xs={1} md={2} lg={3} xl={4} className="g-5">
                {favoriteAds.map((favorite) => (
                  <Col key={favorite._id}>
                    <CardBody className="text-center">

                      <Favorite id={favorite._id} />

                      <CardBody>
                        {
                          (favorite.image.url) ?
                            <CardImg variant="top" src={favorite.image.url} style={{ height: '200px', objectFit: 'cover' }} />
                            :
                            <CardImg variant="top" src='/public/images/No_image.png' />
                        }
                        <CardTitle>{favorite.subtitle}</CardTitle>
                        <CardText>
                          {
                            (favorite.description) ?
                              <CardText className='Card-Text'>{favorite.description}</CardText>
                              : ''
                          }
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>Phone Number: <b>{favorite.phone}</b></ListGroup.Item>
                            <ListGroup.Item>Email: <b>{favorite.email}</b></ListGroup.Item>
                            <ListGroup.Item>Address: <b>{(favorite.address.street) ? favorite.address.street + "," : ''} {favorite.address.city}</b></ListGroup.Item>
                          </ListGroup><br></br>
                          <Button href={favorite.web} target='_blank' variant="secondary">
                            Open {favorite.title} Website
                          </Button>
                        </CardText>
                        {/* <Button variant="primary" size='sm' onClick={() => goToCardDetails(favorite._id)}>Go to card</Button> */}
                      </CardBody>

                      <Likes likes={favorite.likes.length} id={favorite._id} />
                      
                    </CardBody>
                  </Col>
                ))}
              </Row>
              <h5>Total {favoriteAds?.length} card</h5>
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
  );
}


