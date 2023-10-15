import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "./Card.css"
export default function Card_1({ movie }) {
    return (
        <>
            <Card className="thumb">
                <img className="card_img" alt="" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                <div className="content">
                    <CardBody>
                        <CardTitle tag="h5">{movie ? movie.original_title : ""}</CardTitle>
                        <CardSubtitle className= " mb-2 text-muted" tag="h6" style={{color:"white"}}>{movie ? movie.release_date : ""} <span className="vote"><i class="fa-solid fa-star"></i> {movie ? movie.vote_average : ""} </span></CardSubtitle>
                        <CardText className="text">
                            {movie ? movie.overview.slice(0, 118) + "..." : ""}
                        </CardText>
                    </CardBody>
                </div>
            </Card>
        </>
    )
}