import { CardBody, CardText, CardTitle, ListGroup } from 'react-bootstrap'
import './Deals.css'
import { Link } from 'react-router-dom'
import { BiDollar } from 'react-icons/bi';
import Title from '../../components/Title/Title';
/* import IDeals from '../../data/packageContents'; */

/* interface IDealsProps {
    deals: IDeals
} */

const packageContents = [
    {
        header: "Basic",
        price: 5,
        features: [
            "Up to 5 ads included",
            "Manege ads every week",
            "Email support",
            "Help center access",
        ],
        buttonColor: "btn btn-outline-primary",
        link: "./home",
    },
    {
        header: "Standard",
        price: 10,
        features: [
            "Up to 10 ads included",
            "Manege ads every 3 days",
            "Priority email support",
            "Help center access",
            "Direct advertising on Google",
            "Can add location",
        ],
        buttonColor: "btn btn-outline-warning",
        link: "./home",
        recommended: true
    },
    {
        header: "Primium",
        price: 20,
        features: [
            "Up to 30 ads included",
            "Manege ads every day",
            "Phone and email support",
            "Direct advertising on Google",
            "Can add location",
            "Business Consulting",
            "Business banner design",
        ],
        buttonColor: "btn btn-outline-success",
        link: "./home",
    },
];

export default function Deals(/* props: IDealsProps */) {

    return (
        <div className="Deals Page">
            <Title title={'Our Deals'} />
            
        <div className="pricing Page">
            {packageContents.map((pack) =>
                <div className={ pack.recommended ? 'recommendedBorder' : 'priceCard'} style={{ width: '18rem' }}>
                    <CardBody>

                        {
                            pack.recommended ?
                                <CardTitle>
                                    <h5 className='recommended'>The Most Recommended</h5>
                                </CardTitle>
                                :
                                <CardTitle>
                                    <h5 className='notRecommended'>&nbsp</h5>
                                </CardTitle>
                        }
                        
                        <CardTitle><h2>{pack.header}</h2></CardTitle>
                        <CardText><span className='thePrice'>{pack.price}<BiDollar /></span> / Month</CardText>
                    </CardBody>
                    <ListGroup className="list-group-flush">
                        {
                            pack.features.map((feature) =>
                                <ListGroup.Item>{feature}</ListGroup.Item>
                            )
                        }
                    </ListGroup>
                    <CardBody className='buttons'>
                        <Link to={'/signup'} className={pack.buttonColor}> Click for {pack.header} package</Link>
                    </CardBody>
                </div>
            )}
        </div>
        </div>
    )
}
