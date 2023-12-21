import React, {useState} from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	
	const [color, setColor] = useState("");

	return (
		<div className="trafficlight">
			<div className="lighttop"></div>
			<div className="container">
        		<div className={`light ${color === "red" ? "red active" : "red"}`}
				onClick={() => setColor("red")}></div>
        		<div className={`light ${color === "yellow" ? "yellow active" : "yellow"}`}
				onClick={() => setColor("yellow")}></div>
       		 	<div className={`light ${color === "green" ? "green active" : "green"}`}
				onClick={() => setColor("green")}></div>
    		</div>
		</div>
	);
};

export default Home;
