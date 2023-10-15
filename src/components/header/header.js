import "./header.css";
import {Link} from "react-router-dom"
export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link className="home" to ="/movies/popular">IMBd</Link>
                </div>
                <div className="menu">
                    <Link className="link" to ="/movies/popular">Popular</Link>
                    <Link className="link" to ="/movies/top_rated">Top rated</Link>
                    <Link className="link" to ="/movies/upcoming">Upcoming</Link>
                </div>
            </div>
        </>
    )
}