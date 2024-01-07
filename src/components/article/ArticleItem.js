import { TiArrowLeftThick } from "react-icons/ti";
import Card from 'react-bootstrap/Card';
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";
import './ArticleItem.css'

function ArticleItem(props){
    return(
        <Card >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="py-2">  {props.title}</Card.Title>
          <Card.Text>
          {props.desc}
          </Card.Text>
         <Link to={`/article/${props.id}`}>
         <span className="read-more">
            <span>ادامه مقاله</span>
            <TiArrowLeftThick size='25' />

         </span>

         </Link>
        </Card.Body>
       <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
        <span>نویسنده:{props.writter}</span>
        <span><BiTime />{props.readingTime} دقیقه</span>
       </Card.Footer>
      </Card>

    )
}

export default ArticleItem