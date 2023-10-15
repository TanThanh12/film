import axios from "axios";
import { useState, useEffect } from "react";
import Card_1 from "../card/Card";
import { Container, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
export default function MovieList() {
    const [data, setData] = useState([]);
    const { type } = useParams();
    const getData = () => {
        const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        axios

            .get(url)
            .then(function (response) {
                setData(response.data.results)
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    useEffect(() => {
        getData();
    }, [type]);
    console.log(data);
    return (
        <div className="MovieList">
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col md="3" sm="2">
                            <Link to={`/movie/${item.id}`}>
                            <Card_1 movie={item} key={index} />
                            </Link>
                        </Col>
                    ))}

                </Row>
            </Container>
        </div>
    )
}