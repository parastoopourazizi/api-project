import { Container , Row ,Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";

function Home(){
    return(
        <>
        <MyNavbar/>
        <Container>
            <h1 style={{marginTop: '20px'}}>لیست مقالات</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                <Col>
                <ArticleItem/>
                </Col>
                

            </Row>
        </Container>
       
        </>
    );
}

export default Home;