# React + TypeScript + Vite Business Cards Project

## אז מה היה לנו עד עכשיו:
- עיצוב ברובו המוחלט שמור לזכויותיו של המרצה אלרן עמרוסי
- מבחינת העיצוב עוספתי לא מעט לכותרות וקומפוננטה חיצונית של הלוגו ואת שם הפרויקט ששיניתי בעצמי


## המשימות עצמן
- עיצוב ורספונסיביות, שימוש באייקונים של ריאקט בוטסטרפ, קבצי העיצוב מחולקים בין כל העמודים
- תפקיט ניווט נקי בעזרת ריאקט ראוטר דום
- דף כניסה מעוצב עם מלל חדש שהוספתי וכותרות אנימתיות
- דף תצוגת כרטיסים ודף פנימי גנרי לכל כרטיסייה בנפרד
- פוטר בוטסטרפי עם קישורים מעודכנים ולוגו אישי
- דף אודות המחולק לדף אודות של האתר ודף אודות אישי שלי לבוחן
- טפסים: קיים טופס הרשמה ליוזר חדש, עובד מעולה. קיים טופס ליצירת כרטיסייה חדשה שעובד מעולה. טופס עדכון כרטיסיות נוכח ולא עובד. 
- כפתור למחיקת עובד יותר מדי מעולה כי בטעות מחקתי את כל הכרטיסיות לכולם, סליחה אבל בחיאת שיעשו חדש עם מלל תקין!
- עמוד התחברות תקין ועמוד הרשמה תקין
- טוקן תקין שנשמר בלוקל סטורג
- דף הכרטיסים שלי עובד מעולה
- מועדפים עובד לפי המידע שקיים בדאטה בייס של כל משתמש, לא עשיתי כפתור שישמור מועדפים חדש, אבל אשלים לעצמי בהמשך.
- עמוד מועדפים קיים ועובד מעולה
- מערכת בקרת יוזרים קיימת ונראת רק למשתמשי אדמין ועובדת מעולה!


## עשה ואל תעשה
- לא ייצרתי קומפוננטות מחיקה ליוזרס, למרות שזה פשוט כי עשיתי לכרטיסיות וזה מחק את כל מאגר המידע. מפאת זהירות לא המשכתי בזה
- לא הצלחתי לגשת לכרטיסייה ולערוך אותה
- 


## דוגמא לקומפוננטה חיצונית של כפתור מחיקת כרטיס

```js
import { useEffect } from "react"
import { getToken } from "../../services/UserService"
import { Button } from "react-bootstrap"
/* import { MdDelete } from "react-icons/md" */
import { CiTrash } from "react-icons/ci"


interface IDeleteCardProps {
    id:string
}
export default function DeleteCard(props: IDeleteCardProps) {


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken()
                if (!token) return { error: 'No token found', result: undefined }
                const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${props.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token,
                    },
                });
                const data = await response.json()
                data
                fetchData()
            } catch (err) {
                const errMessage = (err as Error).message
                return { error: errMessage, result: undefined }
            }
        }
        fetchData();
    },[])
    return (
        <Button variant="danger" size='sm' className='mx-3'><CiTrash className='me-1' size={22} style={{marginTop:'-5px'}}/>Delete Card</Button>
    )
}

```