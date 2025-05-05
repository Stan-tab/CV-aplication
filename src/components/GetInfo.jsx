import { useState } from "react";
import "../style/GetInfo.css";

function CreaetInput({
	tittle,
	type,
	handler = () => console.log("Wait for handler"),
	id,
}) {
	return (
		<label className="inputInfo">
			{tittle}
			<input type={type} onChange={(e) => handler(e.target.value, id)} />
		</label>
	);
}

function CreateInputs({ obj, handler, from, remover }) {
	const newInputs = [];

	for (const key in obj) {
		if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
		// const element = obj[key];
		const inputs = (
			<div key={key} className="inputFields">
				<button
					className="deleteButton"
					aria-description="Delete company"
					onClick={remover(from, key)}
				>
					X
				</button>
				<CreaetInput
					tittle={"Company name"}
					type={"text"}
					handler={handler}
					id={[from, key, "name"]}
				/>
				<CreaetInput
					tittle={"Your field"}
					type={"text"}
					handler={handler}
					id={[from, key, "field"]}
				/>
				<CreaetInput
					tittle={"Your position"}
					type={"text"}
					handler={handler}
					id={[from, key, "position"]}
				/>
				<CreaetInput
					tittle={"Your responcibilities"}
					type={"text"}
					handler={handler}
					id={[from, key, "responcibilities"]}
				/>
				<div className="time">
					Dates
					<CreaetInput
						tittle={"Entered date"}
						type={"date"}
						handler={handler}
						id={[from, key, "date0"]}
					/>
					<CreaetInput
						tittle={"Leaved date"}
						type={"date"}
						handler={handler}
						id={[from, key, "date1"]}
					/>
				</div>
			</div>
		);
		newInputs.push(inputs);
	}
	return newInputs;
}

export default function GetInfo({ setProp, prop }) {
	const [count, setCount] = useState(2);
	function inputHandler(value, type) {
		if (Array.isArray(type)) {
			if (type[2].includes("date")) {
				prop[type[0]][type[1]].date[type[2].at(-1)] = value
					.split("-")
					.join("/");
				setProp({ ...prop });
				return;
			}
			const newProp = {
				...prop,
				[type[0]]: {
					...prop[type[0]],
					[type[1]]: {
						...prop[type[0]][type[1]],
						[type[2]]: value,
					},
				},
			};
			setProp(newProp);
			return;
		}
		setProp({
			...prop,
			[type]: value,
		});
	}

	function buttonHandler(type) {
		setCount(count + 1);
		setProp({
			...prop,
			[type]: {
				...prop[type],
				[`id${count}`]: {
					name: "Best univercity/work",
					field: "CS",
					position: "Ohayo",
					date: [],
					responcibilities: "",
				},
			},
		});
	}

	function removeElement(from, id) {
		return function () {
			const obj = prop[from];
			delete obj[id];
			const newObj = {
				...prop,
				[from]: { ...obj },
			};
			setProp(newObj);
		};
	}

	return (
		<div className="inputing">
			<div className="generalInput">
				<h3>General</h3>
				<CreaetInput
					tittle={"Your name"}
					type={"text"}
					handler={inputHandler}
					id={"name"}
				/>
				<CreaetInput
					tittle={"Your phone"}
					type={"number"}
					handler={inputHandler}
					id={"phone"}
				/>
				<CreaetInput
					tittle={"Your mail"}
					type={"email"}
					handler={inputHandler}
					id={"mail"}
				/>
			</div>
			<div className="eduExp">
				<h3>Educational</h3>
				<CreateInputs
					obj={prop.edu}
					handler={inputHandler}
					from={"edu"}
					remover={removeElement}
				/>
				<button onClick={() => buttonHandler("edu")}>
					Add univercity
				</button>
			</div>
			<div className="workExp">
				<h3>Work experience</h3>
				<CreateInputs
					obj={prop.work}
					handler={inputHandler}
					from={"work"}
					remover={removeElement}
				/>
				<button onClick={() => buttonHandler("work")}>
					Add univercity
				</button>
			</div>
		</div>
	);
}
