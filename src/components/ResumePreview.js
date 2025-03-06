import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ data }, ref) => {
	return (
		<div className="bg-white shadow-md rounded">
			<div ref={ref} className="resume-page p-8">
				<header className="border-b-2 border-gray-300 pb-4 mb-6">
					<h1 className="text-3xl font-bold text-blue-600">
						{data.personalInfo.name || "Your Name"}
					</h1>
					<p className="text-lg text-gray-700">
						{data.personalInfo.title || "Your Job Title"}
					</p>

					<div className="mt-3 flex flex-wrap text-sm text-gray-600">
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
					<section className="mb-6">
						<h2 className="text-xl font-bold text-blue-600 mb-3">
							Career Objective
						</h2>
						<p className="text-gray-700">{data.objective}</p>
					</section>
				)}

				{data.education.length > 0 && (
					<section className="mb-6">
						<h2 className="text-xl font-bold text-blue-600 mb-3">Education</h2>
						{data.education.map((edu, index) => (
							<div key={index} className="mb-4">
								<div className="flex flex-wrap justify-between">
									<h3 className="text-lg font-semibold">{edu.degree}</h3>
									<span className="text-gray-600">{edu.year}</span>
								</div>
								<p className="text-gray-700">{edu.school}</p>
								{edu.description && (
									<p className="text-gray-600 mt-1">{edu.description}</p>
								)}
							</div>
						))}
					</section>
				)}

				{data.experience.length > 0 && (
					<section className="mb-6">
						<h2 className="text-xl font-bold text-blue-600 mb-3">
							Work Experience
						</h2>
						{data.experience.map((exp, index) => (
							<div key={index} className="mb-4">
								<div className="flex flex-wrap justify-between">
									<h3 className="text-lg font-semibold">{exp.position}</h3>
									<span className="text-gray-600">{exp.duration}</span>
								</div>
								<p className="text-gray-700">{exp.company}</p>
								{exp.description && (
									<p className="text-gray-600 mt-1">{exp.description}</p>
								)}
							</div>
						))}
					</section>
				)}

				{data.skills.length > 0 && (
					<section>
						<h2 className="text-xl font-bold text-blue-600 mb-3">Skills</h2>
						<div className="flex flex-wrap">
							{data.skills.map((skill, index) => (
								<span
									key={index}
									className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
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

const ModernTemplate = forwardRef(({ data }, ref) => (
	<div ref={ref} className="modern-template">
		<header className="border-b-2 border-blue-600 pb-2 mb-4">
			<h1 className="text-2xl font-bold text-blue-600">
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
			<section className="mb-4">
				<h2 className="text-lg font-bold text-blue-600 mb-1">
					Career Objective
				</h2>
				<p className="text-sm text-gray-700">{data.objective}</p>
			</section>
		)}

		{data.education.length > 0 && (
			<section className="mb-4">
				<h2 className="text-lg font-bold text-blue-600 mb-2">Education</h2>
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
				<h2 className="text-lg font-bold text-blue-600 mb-2">
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
				<h2 className="text-lg font-bold text-blue-600 mb-2">Skills</h2>
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

export { ResumePreview as ClassicTemplate, ModernTemplate };
export default ResumePreview;
