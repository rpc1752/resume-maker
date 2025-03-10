import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ data, headingColor = "#2563eb" }, ref) => {
	return (
		<div className="bg-white shadow-md rounded">
			<div ref={ref} className="resume-page p-6">
				<header className="border-b border-gray-300 pb-3 mb-4">
					<h1
						className="text-2xl font-heading font-bold leading-tight"
						style={{ color: headingColor }}
					>
						{data.personalInfo.name || "Your Name"}
					</h1>
					<p className="text-base font-body text-gray-700 leading-snug">
						{data.personalInfo.title || "Your Job Title"}
					</p>

					<div className="mt-1 flex flex-wrap resume-details text-sm text-gray-600 leading-tight">
						{data.personalInfo.email && (
							<div className="mr-4 ">
								<span className="font-semibold">Email:</span>{" "}
								{data.personalInfo.email}
							</div>
						)}
						{data.personalInfo.phone && (
							<div className="mr-4 ">
								<span className="font-semibold">Phone:</span>{" "}
								{data.personalInfo.phone}
							</div>
						)}
						{data.personalInfo.website && (
							<div className="mr-4  mb-2">
								<span className="font-semibold">Website:</span>{" "}
								{data.personalInfo.website}
							</div>
						)}
						{data.personalInfo.address && (
							<div className="mb-2">
								<span className="font-semibold">Address:</span>{" "}
								{data.personalInfo.address}
							</div>
						)}
					</div>
				</header>

				{data.objective && (
					<section className="mb-4">
						<h2
							className="text-lg font-bold mb-1 leading-tight"
							style={{ color: headingColor }}
						>
							Career Objective
						</h2>
						<p className="text-sm text-gray-700 leading-snug">
							{data.objective}
						</p>
					</section>
				)}

				{data.education.length > 0 && (
					<section className="mb-2">
						<h2
							className="text-lg font-bold mb-1 leading-tight"
							style={{ color: headingColor }}
						>
							Education
						</h2>
						{data.education.map((edu, index) => (
							<div key={index} className="mb-2">
								<div className="flex flex-wrap justify-between">
									<h3 className="text-base font-semibold leading-tight">
										{edu.degree}
									</h3>
									<span className="text-sm text-gray-600">{edu.year}</span>
								</div>
								<p className="text-sm text-gray-700 leading-snug">
									{edu.school}
								</p>
								{edu.description && (
									<p className="text-sm text-gray-600 mt-0.5 leading-snug">
										{edu.description}
									</p>
								)}
							</div>
						))}
					</section>
				)}

				{data.experience.length > 0 && (
					<section className="mb-2">
						<h2
							className="text-lg font-bold mb-1 leading-tight"
							style={{ color: headingColor }}
						>
							Work Experience
						</h2>
						{data.experience.map((exp, index) => (
							<div key={index} className="mb-2">
								<div className="flex flex-wrap justify-between">
									<h3 className="text-base font-semibold leading-tight">
										{exp.position}
									</h3>
									<span className="text-sm text-gray-600">{exp.duration}</span>
								</div>
								<p className="text-sm text-gray-700 leading-snug">
									{exp.company}
								</p>
								{exp.description && (
									<p className="text-sm text-gray-600 mt-0.5 leading-snug">
										{exp.description}
									</p>
								)}
							</div>
						))}
					</section>
				)}

				{data.skills.length > 0 && (
					<section>
						<h2
							className="text-lg font-bold mb-1 leading-tight"
							style={{ color: headingColor }}
						>
							Skills
						</h2>
						<div className="flex flex-wrap gap-1">
							{data.skills.map((skill, index) => (
								<span
									key={index}
									className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full text-sm mb-1 mr-1"
								>
									{skill}
								</span>
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
});

ResumePreview.displayName = "ResumePreview";

const ModernTemplate = forwardRef(({ data, headingColor = "#2563eb" }, ref) => (
	<div ref={ref} className="modern-template resume-page p-6">
		<header className="border-b-2 border-blue-600 pb-3 mb-5">
			<h1 className="text-2xl font-bold" style={{ color: headingColor }}>
				{data.personalInfo.name || "Your Name"}
			</h1>
			<p className="text-base text-gray-700">
				{data.personalInfo.title || "Your Job Title"}
			</p>
			<div className="mt-2 flex flex-wrap text-xs text-gray-600">
				{data.personalInfo.email && (
					<div className="mr-4 mb-2">
						<span className="font-semibold">Email:</span>{" "}
						{data.personalInfo.email}
					</div>
				)}
				{data.personalInfo.phone && (
					<div className="mr-4 mb-2">
						<span className="font-semibold">Phone:</span>{" "}
						{data.personalInfo.phone}
					</div>
				)}
				{data.personalInfo.website && (
					<div className="mr-4 mb-2">
						<span className="font-semibold">Website:</span>{" "}
						{data.personalInfo.website}
					</div>
				)}
				{data.personalInfo.address && (
					<div className="mb-2">
						<span className="font-semibold">Address:</span>{" "}
						{data.personalInfo.address}
					</div>
				)}
			</div>
		</header>

		{data.objective && (
			<section className="mb-5">
				<h2 className="text-lg font-bold mb-1" style={{ color: headingColor }}>
					Career Objective
				</h2>
				<p className="text-sm text-gray-700">{data.objective}</p>
			</section>
		)}

		{data.education.length > 0 && (
			<section className="mb-4">
				<h2 className="text-lg font-bold mb-2" style={{ color: headingColor }}>
					Education
				</h2>
				{data.education.map((edu, index) => (
					<div key={index} className="mb-2">
						<div className="flex justify-between">
							<h3 className="text-base font-semibold">{edu.degree}</h3>
							<span className="text-xs text-gray-600">{edu.year}</span>
						</div>
						<p className="text-sm text-gray-700">{edu.school}</p>
						{edu.description && (
							<p className="text-xs text-gray-600 mt-0.5">{edu.description}</p>
						)}
					</div>
				))}
			</section>
		)}

		{data.experience.length > 0 && (
			<section className="mb-4">
				<h2 className="text-lg font-bold mb-2" style={{ color: headingColor }}>
					Work Experience
				</h2>
				{data.experience.map((exp, index) => (
					<div key={index} className="mb-2">
						<div className="flex justify-between">
							<h3 className="text-base font-semibold">{exp.position}</h3>
							<span className="text-xs text-gray-600">{exp.duration}</span>
						</div>
						<p className="text-sm text-gray-700">{exp.company}</p>
						{exp.description && (
							<p className="text-xs text-gray-600 mt-0.5">{exp.description}</p>
						)}
					</div>
				))}
			</section>
		)}

		{data.skills.length > 0 && (
			<section>
				<h2 className="text-lg font-bold mb-2" style={{ color: headingColor }}>
					Skills
				</h2>
				<div className="flex flex-wrap">
					{data.skills.map((skill, index) => (
						<span
							key={index}
							className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs mr-2 mb-2"
						>
							{skill}
						</span>
					))}
				</div>
			</section>
		)}
	</div>
));

ModernTemplate.displayName = "ModernTemplate";

const TwoColumnTemplate = forwardRef(
	({ data, headingColor = "#2563eb" }, ref) => (
		<div ref={ref} className="two-column-template resume-page p-6">
			<div className="grid grid-cols-3 gap-8">
				{/* Left Column */}
				<div className="col-span-1 bg-gray-50 p-5 rounded-lg">
					<div className="mb-6">
						<h1
							className="text-xl font-bold mb-1"
							style={{ color: headingColor }}
						>
							{data.personalInfo.name || "Your Name"}
						</h1>
						<p className="text-sm text-primary-600">
							{data.personalInfo.title || "Your Job Title"}
						</p>
					</div>

					<div className="mb-6 text-sm">
						{data.personalInfo.email && (
							<div className="mb-2 flex items-center">
								<i className="fas fa-envelope w-5 text-primary-600"></i>
								<span>{data.personalInfo.email}</span>
							</div>
						)}
						{data.personalInfo.phone && (
							<div className="mb-2 flex items-center">
								<i className="fas fa-phone w-5 text-primary-600"></i>
								<span>{data.personalInfo.phone}</span>
							</div>
						)}
						{data.personalInfo.website && (
							<div className="mb-2 flex items-center">
								<i className="fas fa-globe w-5 text-primary-600"></i>
								<span>{data.personalInfo.website}</span>
							</div>
						)}
						{data.personalInfo.address && (
							<div className="mb-2 flex items-center">
								<i className="fas fa-map-marker-alt w-5 text-primary-600"></i>
								<span>{data.personalInfo.address}</span>
							</div>
						)}
					</div>

					{data.skills.length > 0 && (
						<div className="mb-6">
							<h2
								className="text-lg font-semibold mb-3"
								style={{ color: headingColor }}
							>
								Skills
							</h2>
							<div className="flex flex-wrap gap-2">
								{data.skills.map((skill, index) => (
									<span
										key={index}
										className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Right Column */}
				<div className="col-span-2 px-2">
					{data.objective && (
						<section className="mb-6">
							<h2
								className="text-lg font-semibold mb-2"
								style={{ color: headingColor }}
							>
								Profile
							</h2>
							<p className="text-sm text-gray-600">{data.objective}</p>
						</section>
					)}

					{data.experience.length > 0 && (
						<section className="mb-6">
							<h2
								className="text-lg font-semibold mb-3"
								style={{ color: headingColor }}
							>
								Experience
							</h2>
							{data.experience.map((exp, index) => (
								<div key={index} className="mb-4">
									<div className="flex justify-between items-start">
										<div>
											<h3 className="font-semibold">{exp.position}</h3>
											<p className="text-sm text-gray-600">{exp.company}</p>
										</div>
										<span className="text-xs text-gray-500">
											{exp.duration}
										</span>
									</div>
									{exp.description && (
										<p className="text-sm text-gray-600 mt-1">
											{exp.description}
										</p>
									)}
								</div>
							))}
						</section>
					)}

					{data.education.length > 0 && (
						<section>
							<h2
								className="text-lg font-semibold mb-3"
								style={{ color: headingColor }}
							>
								Education
							</h2>
							{data.education.map((edu, index) => (
								<div key={index} className="mb-4">
									<div className="flex justify-between items-start">
										<div>
											<h3 className="font-semibold">{edu.degree}</h3>
											<p className="text-sm text-gray-600">{edu.school}</p>
										</div>
										<span className="text-xs text-gray-500">{edu.year}</span>
									</div>
									{edu.description && (
										<p className="text-sm text-gray-600 mt-1">
											{edu.description}
										</p>
									)}
								</div>
							))}
						</section>
					)}
				</div>
			</div>
		</div>
	)
);

const MinimalTemplate = forwardRef(
	({ data, headingColor = "#2563eb" }, ref) => (
		<div ref={ref} className="minimal-template resume-page p-8">
			<header className="text-center mb-10">
				<h1
					className="text-3xl font-light mb-2"
					style={{ color: headingColor }}
				>
					{data.personalInfo.name || "Your Name"}
				</h1>
				<p className="text-gray-600 mb-4">
					{data.personalInfo.title || "Your Job Title"}
				</p>
				<div className="flex justify-center gap-4 text-sm text-gray-500">
					{data.personalInfo.email && <span>{data.personalInfo.email}</span>}
					{data.personalInfo.phone && <span>•</span>}
					{data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
					{data.personalInfo.website && <span>•</span>}
					{data.personalInfo.website && (
						<span>{data.personalInfo.website}</span>
					)}
				</div>
			</header>

			{data.objective && (
				<section className="mb-10">
					<p className="text-center text-gray-600 max-w-2xl mx-auto">
						{data.objective}
					</p>
				</section>
			)}

			{data.experience.length > 0 && (
				<section className="mb-10">
					<h2
						className="text-xl font-light mb-4 text-center"
						style={{ color: headingColor }}
					>
						Experience
					</h2>
					{data.experience.map((exp, index) => (
						<div key={index} className="mb-6">
							<div className="text-center">
								<h3 className="font-medium text-gray-800">{exp.position}</h3>
								<p className="text-gray-600">
									{exp.company} • {exp.duration}
								</p>
							</div>
							{exp.description && (
								<p className="text-gray-600 text-sm mt-2 text-center max-w-2xl mx-auto">
									{exp.description}
								</p>
							)}
						</div>
					))}
				</section>
			)}

			{data.education.length > 0 && (
				<section className="mb-10">
					<h2
						className="text-xl font-light mb-4 text-center"
						style={{ color: headingColor }}
					>
						Education
					</h2>
					{data.education.map((edu, index) => (
						<div key={index} className="mb-4 text-center">
							<h3 className="font-medium text-gray-800">{edu.degree}</h3>
							<p className="text-gray-600">
								{edu.school} • {edu.year}
							</p>
							{edu.description && (
								<p className="text-gray-600 text-sm mt-1">{edu.description}</p>
							)}
						</div>
					))}
				</section>
			)}

			{data.skills.length > 0 && (
				<section>
					<h2
						className="text-xl font-light mb-4 text-center"
						style={{ color: headingColor }}
					>
						Skills
					</h2>
					<div className="flex flex-wrap justify-center gap-2">
						{data.skills.map((skill, index) => (
							<span
								key={index}
								className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
							>
								{skill}
							</span>
						))}
					</div>
				</section>
			)}
		</div>
	)
);

TwoColumnTemplate.displayName = "TwoColumnTemplate";
MinimalTemplate.displayName = "MinimalTemplate";

export {
	ResumePreview as ClassicTemplate,
	ModernTemplate,
	TwoColumnTemplate,
	MinimalTemplate,
};
export default ResumePreview;
