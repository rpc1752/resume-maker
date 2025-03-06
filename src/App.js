import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import TemplateSelector from "./components/TemplateSelector";
import { useReactToPrint } from "react-to-print";

function App() {
	const [resumeData, setResumeData] = useState({
		personalInfo: {
			name: "Alex Johnson",
			title: "Full Stack Developer",
			email: "alex.johnson@example.com",
			phone: "(555) 123-4567",
			website: "alexjohnson.dev",
			address: "San Francisco, CA",
		},
		objective:
			"Experienced full stack developer with over 5 years of experience building scalable web applications. Passionate about clean code, user experience, and solving complex problems with efficient solutions.",
		education: [
			{
				degree: "Master of Science in Computer Science",
				school: "Stanford University",
				year: "2018 - 2020",
				description:
					"Specialized in Artificial Intelligence and Machine Learning. GPA: 3.9/4.0",
			},
			{
				degree: "Bachelor of Science in Computer Engineering",
				school: "University of California, Berkeley",
				year: "2014 - 2018",
				description:
					"Dean's List for all semesters. Founded the Web Development Club.",
			},
		],
		experience: [
			{
				position: "Senior Full Stack Developer",
				company: "TechInnovate Solutions",
				duration: "2020 - Present",
				description:
					"Lead a team of 5 developers in building a customer relationship management platform. Implemented CI/CD pipelines reducing deployment time by 40%. Designed RESTful APIs serving over 10,000 requests daily.",
			},
			{
				position: "Full Stack Developer",
				company: "DataViz Corp",
				duration: "2018 - 2020",
				description:
					"Developed and maintained data visualization dashboards using React and D3.js. Optimized database queries resulting in 60% faster load times. Collaborated with UX team to improve user interface based on customer feedback.",
			},
			{
				position: "Web Development Intern",
				company: "StartUp Innovations",
				duration: "Summer 2017",
				description:
					"Assisted in developing responsive web applications using HTML, CSS, and JavaScript. Participated in daily stand-ups and sprint planning sessions.",
			},
		],
		skills: [
			"JavaScript",
			"React.js",
			"Node.js",
			"TypeScript",
			"MongoDB",
			"PostgreSQL",
			"Docker",
			"AWS",
			"GraphQL",
			"CI/CD",
			"Git",
			"Agile Methodologies",
		],
		projects: [],
		certifications: [],
		languages: [],
	});

	const [activeTemplate, setActiveTemplate] = useState("modern");
	const [showTemplateSelector, setShowTemplateSelector] = useState(false);
	const [activeSidebar, setActiveSidebar] = useState("form"); // "form" or "templates"

	const resumeRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => resumeRef.current,
		documentTitle: `${resumeData.personalInfo.name || "Resume"}_CV`,
	});

	const updateResumeData = (newData) => {
		setResumeData(newData);
	};

	const handleTemplateChange = (template) => {
		setActiveTemplate(template);
		setShowTemplateSelector(false);
	};

	return (
		<div className="bg-secondary-100 min-h-screen flex flex-col font-sans">
			<Header />

			<div className="container mx-auto px-4 py-6 flex-grow flex flex-col">
				{/* Action Buttons */}
				<div className="flex flex-wrap gap-3 mb-6">
					<button
						className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
							activeSidebar === "form"
								? "bg-primary-600 text-white shadow-md"
								: "bg-white text-secondary-800 hover:bg-secondary-100"
						}`}
						onClick={() => setActiveSidebar("form")}
					>
						<i className="fas fa-edit"></i>
						<span>Edit Resume</span>
					</button>

					<button
						className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
							activeSidebar === "templates"
								? "bg-primary-600 text-white shadow-md"
								: "bg-white text-secondary-800 hover:bg-secondary-100"
						}`}
						onClick={() => setActiveSidebar("templates")}
					>
						<i className="fas fa-th-large"></i>
						<span>Templates</span>
					</button>

					<div className="flex-grow"></div>

					<button
						onClick={handlePrint}
						className="flex items-center space-x-2 bg-success hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow transition-colors duration-200"
					>
						<i className="fas fa-file-pdf"></i>
						<span>Export as PDF</span>
					</button>
				</div>

				{/* Main Content */}
				<div className="flex flex-col md:flex-row gap-8 flex-grow">
					{/* Left Panel (Form or Templates) */}
					<div className="w-full md:w-1/2 animate-fade">
						{activeSidebar === "form" ? (
							<ResumeForm data={resumeData} updateData={updateResumeData} />
						) : (
							<TemplateSelector
								activeTemplate={activeTemplate}
								onTemplateSelect={handleTemplateChange}
							/>
						)}
					</div>

					{/* Right Panel (Preview) */}
					<div className="w-full md:w-1/2 animate-fade">
						<div className="sticky top-24">
							<div className="bg-white rounded-md p-4 shadow-card mb-4">
								<h2 className="text-lg font-semibold text-secondary-800 flex items-center">
									<i className="fas fa-eye mr-2 text-primary-600"></i>
									Resume Preview
								</h2>
							</div>
							<div className="overflow-auto max-w-full">
								<ResumePreview
									data={resumeData}
									ref={resumeRef}
									template={activeTemplate}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-secondary-800 text-secondary-200 py-4 mt-10">
				<div className="container mx-auto px-4 text-center">
					<p>© 2023 ResumeForge. Build your professional resume in minutes.</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
