import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";


function AddArticle(){
  
  const [formData , setFormData]= useState({})

  const addArticleHandler = ()=>{
    axios.post('http://localhost:5000/article' , formData)

  }
  
  const formHandler = ( e , propertyName)=> {
    setFormData( {...formData , [propertyName] : e.target.value})
    
  }
       
    
    
  
    return(
       <>
       <MyNavbar/>
       <div  className="formcontainer">
       <Form>
      <Form.Group className="mb-3">
        <Form.Label> عنوان مقاله</Form.Label>
        <Form.Control onChange={(e) => formHandler(e , 'title')} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>  توضیح کوتاه</Form.Label>
        <Form.Control onChange={(e) => formHandler(e , 'desc')} type="text" placeholder="یک توضیح کوتاه در مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   نویسنده مقاله</Form.Label>
        <Form.Control onChange={(e) => formHandler(e , 'wrriter')} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   موضوع مقاله</Form.Label>
        <Form.Control onChange={(e) => formHandler(e , 'category')} type="text" placeholder="موضوع مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   عکس مقاله</Form.Label>
        <Form.Control onChange={(e) => formHandler(e , 'image')} type="text" placeholder=" آدرس عکس مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   مدت زمان خواندن مقاله</Form.Label>
        <Form.Control onChange={(e) => formHandler(e , 'readingTime')} type="number" placeholder="" />
      </Form.Group>

     
      <Button onClick={addArticleHandler} variant="primary" type="button">
        ساخت مقاله
      </Button>
    </Form>
       </div>
       </>
    );

}
export default AddArticle;