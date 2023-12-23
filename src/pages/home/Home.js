import { Container , Row ,Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(){
    const [articles , setArticle] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:5000/article")
        .then((response) => setArticle(response.data));

    } ,[]);
    return(
        <>
        <MyNavbar/>
        <Container>
            <h1 style={{marginTop: '20px'}}>لیست مقالات</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
               {articles.map(article => 
                (
                    <Col>
                    <ArticleItem {...article}/>
                    </Col>

                ) )}
                

            </Row>
        </Container>
       
        </>
    );
}

export default Home;