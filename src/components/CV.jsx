import "../style/CV.css";

function General({
	name = "Your name",
	mail = "Your mail",
	phone = "Your phone",
}) {
	return (
		<div className="generalInfo">
			<h1>{name}</h1>
			<div>
				<p>
					<img src="/mail.svg" alt="" className="generalIcons" />{" "}
					{mail}
				</p>
				<p>
					<img src="/phone.svg" alt="" className="generalIcons" />{" "}
					{phone}
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

export default function CV(prop) {
	const education = prop.edu || [
		{
			date: ["Entered date", "Graduation year"],
			name: "Name of univercity",
			field: "Your field",
			position: "Ohayo",
		},
	];
	const workExp = prop.work || [
		{
			date: ["Entered date", "Leaving year"],
			name: "Name of the job",
			tittle: "Tittle of the job",
			position: "",
			res: "l",
		},
	];

	return (
		<div className="cv">
			<General name={prop.name} mail={prop.mail} phone={prop.phone} />
			<div className="education">
				<h3>Educational</h3>
				{education.map((experience) => (
					<Experience
						key={`${experience.name}${JSON.stringify(
							experience.date
						)}`}
						dateOf={experience.date}
						nameOf={experience.name}
						tittleOf={experience.field}
						position={experience.position}
					/>
				))}
			</div>
			<div className="practicalExp">
				<h3>Professional Experience</h3>
				{workExp.map((job) => {
					if (job.res === undefined || !job) return;
					return (
						<Experience
							key={`${job.name}${JSON.stringify(job.date)}`}
							dateOf={job.date}
							nameOf={job.name}
							tittleOf={job.tittle}
							position={job.position}
							responsibilities={job.res}
						/>
					);
				})}
			</div>
		</div>
	);
}
