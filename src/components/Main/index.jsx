import './Main.scss'
import { Button } from "@mui/material";

const MainSection = () => {
    return (  
        <div className='main-section'>
            <div className="main__text">
                <h1>Welcome</h1>
                <Button className='main__btn'>Make a reservation</Button>
            </div>
            <div className="main__img">
            </div>
        </div>
    );
}
 
export default MainSection;