import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'


function AddArticle(){
    return(
       <>
       <MyNavbar/>
       <div  className="formcontainer">
       <Form>
      <Form.Group className="mb-3">
        <Form.Label> عنوان مقاله</Form.Label>
        <Form.Control type="text" placeholder="عنوان مقاله را وارد کنید" />
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

     
      <Button variant="primary" type="button">
        ساخت مقاله
      </Button>
    </Form>
       </div>
       </>
    );

}
export default AddArticle;