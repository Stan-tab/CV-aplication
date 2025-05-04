import "../style/CV.css";

function General({
	name = "Your name",
	mail = "Your mail",
	phone = "Your phone",
}) {
	return (
		<div className="generalInfo">
			<h1>{name || "Your name"}</h1>
			<div>
				<p>
					<img src="/mail.svg" alt="" className="generalIcons" />{" "}
					{mail || "Your mail"}
				</p>
				<p>
					<img src="/phone.svg" alt="" className="generalIcons" />{" "}
					{phone || "Your  phone number"}
				</p>
			</div>
		</div>
	);
}

function Experience({ nameOf, tittleOf, dateOf, position, responsibilities }) {
	function UndefinedCheck({ prop }) {
		return prop != undefined || !!prop ? <p>{prop}</p> : null;
	}
	function GetDate({ date }) {
		if (date === undefined) return <p>Enter the year of univercity/work</p>;
		return (
			<p>
				{date[0] || "from"} - {date[1] || "Till now"}
			</p>
		);
	}

	return (
		<div className="edExp">
			<div className="card">
				<div className="dates">
					<GetDate date={dateOf} />
					<UndefinedCheck prop={position} />
				</div>
				<div className="about">
					<p>{nameOf || "Univercity/work name"}</p>
					<p>{tittleOf || "Your field/ position"}</p>
					<UndefinedCheck prop={responsibilities} />
				</div>
			</div>
		</div>
	);
}

export default function CV({ prop }) {
	const education = prop.edu;
	const workExp = prop.work;
	function getList(obj) {
		const list = [];
		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				const el = obj[key];
				list.push(<Experience key={key} dateOf={el.date} nameOf={el.name} tittleOf={el.field} position={el.position} responsibilities={el.res} />);
			}
		}
		return list;
	}

	return (
		<div className="cv">
			<General name={prop.name} mail={prop.mail} phone={prop.phone} />
			<div className="education">
				<h3>Educational</h3>
				{getList(education)}
			</div>
			<div className="practicalExp">
				<h3>Professional Experience</h3>
				{getList(workExp)}
			</div>
		</div>
	);
}
