import "../style/GetInfo.css"

function CreaetInput({ tittle, type, handler = () => console.log("Wait for handler"), id }) {
	return (
		<label className="inputInfo">
			{tittle}
			<input type={type} onChange={(e) => handler(e.target.value, id)} />
		</label>
	);
}

export default function GetInfo({setProp, prop}) {
	function inputHandler(value, type) {
		setProp({
			...prop,
			[type]: value
		})
	}

	return (
		<div className="inputing">
			<div className="generalInput">
				<h3>General</h3>
				<CreaetInput tittle={"Your name"} type={"text"} handler={inputHandler} id={"name"} />
				<CreaetInput tittle={"Your phone"} type={"number"} handler={inputHandler} id={"phone"} />
				<CreaetInput tittle={"Your mail"} type={"email"} handler={inputHandler} id={"mail"} />
			</div>
			<div className="eduExp">
				<h3>Educational</h3>
				<button>Add univercity</button>
			</div>
		</div>
	);
}
