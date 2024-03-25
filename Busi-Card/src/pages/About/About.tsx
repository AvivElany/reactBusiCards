import './About.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function About() {
    return (
        <div className='About Page'>
            <div className="para1 para">
                <h2>Welcome to Busi-Card,<br></br> the largest company in Israel for digital marketing</h2>
                <p>Our company offers help with marketing on all digital platforms such as social media, advertising consulting, business consulting, building landing pages and websites, as well as marketing on the bulletin board on our website and sponsored publications</p>
            </div>
            <div className="para2 para">
                After registration, a consultation will be arranged for you and your business in our office with our best business consultants and we will be able to build a complete business plan from end to end.<span className='coffee'>And also the coffee on us.</span> 
            </div>
            <div className="para3 para">
                <h3>So when do we start?</h3>
                <Button variant='outline-warning'><Link to={'/signup'}>Sigh Up Now!</Link></Button>
            </div>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <div className="excuses copyright">ראשית אני רוצה להודות למרצה אלרן עמרוסי שבזכותו יש לי תשתית מלאה לפרויקט
                ולו שמור 95% ויותר זכויות יוצרים עליו.</div>
            
            <div className="excuses technology">
                הפרויקט בנו כולו בעזרת ריאקט-בוטסטראפ, מחולק לקומפוננטות ועמודים בצורה מיטבית.<br></br>
                עם חלוקה ברורה ולא מפורקת מדי (משהו שבקלות אפשר לעשות בריאקט)<br></br><br></br>
                את הלוגו שיניתי והוצאתי אותו לקומפוננטה חיצונית כדי לשמור על אחידות
                ועיצבתי בעצמי לשם המקוריות ומכאן שמרתי על עיצוב בוטסטרפי בסיסי כי אני לא מעצב בנשמתי...<br></br>
                    
                <span className='hide'>אפילו אישתי בוחרת לי את הבגדים לפעמים</span>
            </div>
            
            <hr></hr>
            <div className="excuses personaNote">
                לי אישית הפרויקט היה סופר מורכב, את ריאקט התחלתי ללמוד מספר שיעורים אחרי כולם בגלל השלמת הפערים והכנת הפרויקט הקודם תוך כדי עקב המילואים הארוכים. מה שהשתלם לי מאוד מצד אחד ופגע בי בצורה אחרת. <br></br>
                אם היינו עובדים בג'אווה-סקריפט ולא בטייפ-סקריפט התוצאה הייתה שונה בהרבה! <span>את הפרויקט הכנתי הרסתי מחקתי ובניתי מחדש פעמיים בגלל טייפ-סקריפט</span>
            </div>
        </div>
    )
}
