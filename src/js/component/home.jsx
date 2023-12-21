import React, {useEffect, useState} from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	
	const [color, setColor] = useState("");
	const [ciclo,setCiclo] = useState(false);

	useEffect(() => {
		if(ciclo){
			const interval = setInterval(()=>{
				if (color == ""){
					setColor("red")
				}
				else if (color === "red"){
					setColor("yellow")
				}else if (color === "yellow"){
					setColor("green")
				}else if (color === "green"){
					setColor("red")
				}
			}, 1000)
			return ()=> clearInterval(interval)
		}
	}, [ciclo, color])


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
			<div className="btn">
				<button onClick={() => setCiclo(!ciclo)} id="button">Cycle Lights</button>
			</div>
		</div>
	);
};

export default Home;
