import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <div>
            <h3>Something Went Wrong</h3>
            <Link to='/CrownBurger'>Go back to home</Link>
        </div>
    );
}