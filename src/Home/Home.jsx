import burgerImg from '../assets/burger.png'
import homeSTyle from './Home.module.css'
import { Link } from 'react-router-dom';
export default function Home(){
    return <div className={homeSTyle.home}>
            <div></div>
            <img src={burgerImg} alt="burger"/>
            <div className={homeSTyle.left}>
                <h1>Crown Burger</h1>
                <p>Stablished in 2024,is One of the greatest burger spots in addis.It was established by four brilliant business minded shareholders.</p>
                <Link to="menu"><button className={homeSTyle.button}>Order Now</button></Link>
                </div>
        </div>;
}