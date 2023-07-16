import Navbar from "./Navbar";
import '../style/home.css'
import Areachart from "../charts/Areachart";
import Barchart from "../charts/Barchart";
import Piechart from "../charts/Piechart";
import Linechart from "../charts/Linechart";
import Scatterchart from "../charts/Scatterchart";
import Linechart2 from "../charts/Linechart2";


function Home(){
    return(
        <>
        <div className="charts">
            <div className="areaChart">
                <Areachart />
                <Barchart />
            </div>
            <div className="lineChart">
                <Linechart />
                <Scatterchart />    
            </div>
            <div className="pieChart">
                <div className="x">
                <Piechart />
                </div>
                <div>
                <Linechart2 />
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Home;