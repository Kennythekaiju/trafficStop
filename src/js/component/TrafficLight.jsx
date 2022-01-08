import React from "react";

const TrafficLight = () => {
	const [hColor, setHColor] = React.useState("yellow");
	return (
		<>
			<div className="bigDiv">
				<div className="pole"></div>
				<div className="lightBox">
					<div
						onClick={() => setHColor("red")}
						className="red-light"
						style={{
							border: hColor === "red" ? "5px solid purple" : " ",
						}}></div>
					<div
						onClick={() => setHColor("yellow")}
						className="yellow-light"
						style={{
							border:
								hColor === "yellow" ? "5px solid purple" : " ",
						}}></div>
					<div
						onClick={() => setHColor("green")}
						className="green-light"
						style={{
							border:
								hColor === "green" ? "5px solid purple" : " ",
						}}>
						{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;
