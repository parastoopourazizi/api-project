import { TiArrowLeftThick } from "react-icons/ti";
import Card from 'react-bootstrap/Card';
import { BiTime } from "react-icons/bi";
import './ArticleItem.css'

function ArticleItem(){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://dl.next1code.ir/images/react/article1.webp" />
        <Card.Body>
          <Card.Title className="py-2">عنوان مقاله اول</Card.Title>
          <Card.Text>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </Card.Text>
         <span className="read-more">
            <span>ادامه مقاله</span>
            <TiArrowLeftThick size='25' />

         </span>
        </Card.Body>
       <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
        <span>نویسنده:پرستو</span>
        <span><BiTime />۵ دقیقه</span>
       </Card.Footer>
      </Card>

    )
}

export default ArticleItem