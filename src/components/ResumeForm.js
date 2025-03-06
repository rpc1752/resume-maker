import React from "react";

function ResumeForm({ data, updateData }) {
	const handlePersonalInfoChange = (e) => {
		const { name, value } = e.target;
		updateData({
			...data,
			personalInfo: {
				...data.personalInfo,
				[name]: value,
			},
		});
	};

	const handleObjectiveChange = (e) => {
		updateData({
			...data,
			objective: e.target.value,
		});
	};

	const addEducation = () => {
		updateData({
			...data,
			education: [
				...data.education,
				{ degree: "", school: "", year: "", description: "" },
			],
		});
	};

	const updateEducation = (index, field, value) => {
		const updatedEducation = [...data.education];
		updatedEducation[index] = {
			...updatedEducation[index],
			[field]: value,
		};
		updateData({
			...data,
			education: updatedEducation,
		});
	};

	const removeEducation = (index) => {
		const updatedEducation = data.education.filter((_, i) => i !== index);
		updateData({
			...data,
			education: updatedEducation,
		});
	};

	const addExperience = () => {
		updateData({
			...data,
			experience: [
				...data.experience,
				{ position: "", company: "", duration: "", description: "" },
			],
		});
	};

	const updateExperience = (index, field, value) => {
		const updatedExperience = [...data.experience];
		updatedExperience[index] = {
			...updatedExperience[index],
			[field]: value,
		};
		updateData({
			...data,
			experience: updatedExperience,
		});
	};

	const removeExperience = (index) => {
		const updatedExperience = data.experience.filter((_, i) => i !== index);
		updateData({
			...data,
			experience: updatedExperience,
		});
	};

	const addSkill = () => {
		updateData({
			...data,
			skills: [...data.skills, ""],
		});
	};

	const updateSkill = (index, value) => {
		const updatedSkills = [...data.skills];
		updatedSkills[index] = value;
		updateData({
			...data,
			skills: updatedSkills,
		});
	};

	const removeSkill = (index) => {
		const updatedSkills = data.skills.filter((_, i) => i !== index);
		updateData({
			...data,
			skills: updatedSkills,
		});
	};

	return (
		<div className="bg-white p-6 rounded shadow-md">
			<h2 className="text-2xl font-bold mb-6">Resume Information</h2>

			<section className="mb-6">
				<h3 className="text-lg font-semibold mb-3">Personal Information</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block text-gray-700 mb-2">Full Name</label>
						<input
							type="text"
							name="name"
							value={data.personalInfo.name}
							onChange={handlePersonalInfoChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div>
						<label className="block text-gray-700 mb-2">Job Title</label>
						<input
							type="text"
							name="title"
							value={data.personalInfo.title}
							onChange={handlePersonalInfoChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div>
						<label className="block text-gray-700 mb-2">Email</label>
						<input
							type="email"
							name="email"
							value={data.personalInfo.email}
							onChange={handlePersonalInfoChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div>
						<label className="block text-gray-700 mb-2">Phone</label>
						<input
							type="tel"
							name="phone"
							value={data.personalInfo.phone}
							onChange={handlePersonalInfoChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div>
						<label className="block text-gray-700 mb-2">Website</label>
						<input
							type="url"
							name="website"
							value={data.personalInfo.website}
							onChange={handlePersonalInfoChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
					<div>
						<label className="block text-gray-700 mb-2">Address</label>
						<input
							type="text"
							name="address"
							value={data.personalInfo.address}
							onChange={handlePersonalInfoChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
				</div>
			</section>

			<section className="mb-6">
				<h3 className="text-lg font-semibold mb-3">Career Objective</h3>
				<textarea
					value={data.objective}
					onChange={handleObjectiveChange}
					className="w-full p-2 border border-gray-300 rounded h-24"
				></textarea>
			</section>

			<section className="mb-6">
				<h3 className="text-lg font-semibold mb-3">Education</h3>
				{data.education.map((edu, index) => (
					<div key={index} className="p-4 border border-gray-200 rounded mb-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
							<div>
								<label className="block text-gray-700 mb-2">
									Degree/Certificate
								</label>
								<input
									type="text"
									value={edu.degree}
									onChange={(e) =>
										updateEducation(index, "degree", e.target.value)
									}
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>
							<div>
								<label className="block text-gray-700 mb-2">
									School/University
								</label>
								<input
									type="text"
									value={edu.school}
									onChange={(e) =>
										updateEducation(index, "school", e.target.value)
									}
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>
							<div>
								<label className="block text-gray-700 mb-2">Year</label>
								<input
									type="text"
									value={edu.year}
									onChange={(e) =>
										updateEducation(index, "year", e.target.value)
									}
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>
						</div>
						<div className="mb-3">
							<label className="block text-gray-700 mb-2">Description</label>
							<textarea
								value={edu.description}
								onChange={(e) =>
									updateEducation(index, "description", e.target.value)
								}
								className="w-full p-2 border border-gray-300 rounded"
							></textarea>
						</div>
						<button
							onClick={() => removeEducation(index)}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
						>
							Remove
						</button>
					</div>
				))}
				<button
					onClick={addEducation}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					+ Add Education
				</button>
			</section>

			<section className="mb-6">
				<h3 className="text-lg font-semibold mb-3">Work Experience</h3>
				{data.experience.map((exp, index) => (
					<div key={index} className="p-4 border border-gray-200 rounded mb-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
							<div>
								<label className="block text-gray-700 mb-2">Position</label>
								<input
									type="text"
									value={exp.position}
									onChange={(e) =>
										updateExperience(index, "position", e.target.value)
									}
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>
							<div>
								<label className="block text-gray-700 mb-2">Company</label>
								<input
									type="text"
									value={exp.company}
									onChange={(e) =>
										updateExperience(index, "company", e.target.value)
									}
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>
							<div>
								<label className="block text-gray-700 mb-2">Duration</label>
								<input
									type="text"
									value={exp.duration}
									onChange={(e) =>
										updateExperience(index, "duration", e.target.value)
									}
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>
						</div>
						<div className="mb-3">
							<label className="block text-gray-700 mb-2">Description</label>
							<textarea
								value={exp.description}
								onChange={(e) =>
									updateExperience(index, "description", e.target.value)
								}
								className="w-full p-2 border border-gray-300 rounded"
							></textarea>
						</div>
						<button
							onClick={() => removeExperience(index)}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
						>
							Remove
						</button>
					</div>
				))}
				<button
					onClick={addExperience}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					+ Add Experience
				</button>
			</section>

			<section className="mb-6">
				<h3 className="text-lg font-semibold mb-3">Skills</h3>
				{data.skills.map((skill, index) => (
					<div key={index} className="flex items-center mb-2">
						<input
							type="text"
							value={skill}
							onChange={(e) => updateSkill(index, e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mr-2"
						/>
						<button
							onClick={() => removeSkill(index)}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
						>
							X
						</button>
					</div>
				))}
				<button
					onClick={addSkill}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					+ Add Skill
				</button>
			</section>
		</div>
	);
}

export default ResumeForm;
