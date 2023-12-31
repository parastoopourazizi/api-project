import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


function AddArticle(){
  
  const [formData , setFormData]= useState({})
  const resetFormData = ()=> {
    setFormData({
      title: '',
      desc: '',
      wrriter:'',
      category:'',
      image:'',
      readingTime:''

    })

    
  }

  const addArticleHandler = ()=>{
    axios.post('http://localhost:5000/article' , formData)
  
    .then(response => {
      if(response.status === 201) {
        Swal.fire({
          title:'مقاله جدید با موفقیت ثبت شد',
          timer:1500,
          timerProgressBar:true,
          showConfirmButton:false
    
    
        })

      }
    })
    .catch(error => {
      Swal.fire({
        title:'مقاله  ثبت نشد',
        timer:1500,
        timerProgressBar:true,
        showConfirmButton:false
  
  
      })

    })
    resetFormData()


    

  }
  
  const formHandler = ( e , propertyName)=> {
    setFormData( {...formData , [e.target.name] : e.target.value})
    
    
  }
    
    return(
       <>
       <MyNavbar/>
       <div  className="formcontainer">
       <Form>
      <Form.Group className="mb-3">
        <Form.Label> عنوان مقاله</Form.Label>
        <Form.Control
        value={formData.title}
        name="title"
         onChange={ formHandler} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>  توضیح کوتاه</Form.Label>
        <Form.Control
        value={formData.desc}
        name="desc"
         onChange={ formHandler} type="text" placeholder="یک توضیح کوتاه در مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   نویسنده مقاله</Form.Label>
        <Form.Control
        value={formData.wrriter}
        name="wrriter"
         onChange={ formHandler} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   موضوع مقاله</Form.Label>
        <Form.Control
        value={formData.category}
        name="category"
        onChange={ formHandler} type="text" placeholder="موضوع مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   عکس مقاله</Form.Label>
        <Form.Control
        value={formData.image}
        name="image"
        onChange={ formHandler} type="text" placeholder=" آدرس عکس مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>   مدت زمان خواندن مقاله</Form.Label>
        <Form.Control
        value={formData.readingTime}
        name="readingTime"
         onChange={ formHandler} type="number" placeholder="" />
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