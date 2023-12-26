import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";


function AddArticle(){
  const [titleState , setTitleState] = useState('')
    const AddArticleHandler = () =>{
      axios.post('http://localhost:5000/article',{
        title:'عنوان مقاله دهم',
        desc:'متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم ',
        writter:'میلاد',
        category:'وب',
        image:"https://dl.next1code.ir/images/react/article6.webp",
        readingtime: '5'       
      })
    }
    const titleInputHandler = (e) =>{
      setTitleState(e.target.value)

    }
    return(
       <>
       <MyNavbar/>
       <div  className="formcontainer">
       <Form>
      <Form.Group className="mb-3">
        <Form.Label> عنوان مقاله</Form.Label>
        <Form.Control onChange={titleInputHandler} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>  توضیح کوتاه</Form.Label>
        <Form.Control type="text" placeholder="یک توضیح کوتاه در مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   نویسنده مقاله</Form.Label>
        <Form.Control type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   موضوع مقاله</Form.Label>
        <Form.Control type="text" placeholder="موضوع مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   عکس مقاله</Form.Label>
        <Form.Control type="text" placeholder=" آدرس عکس مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   مدت زمان خواندن مقاله</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>

     
      <Button onClick={AddArticleHandler} variant="primary" type="button">
        ساخت مقاله
      </Button>
    </Form>
       </div>
       </>
    );

}
export default AddArticle;