import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import TemplateSelector from "./components/TemplateSelector";
import { useReactToPrint } from "react-to-print";
import {
	ClassicTemplate,
	ModernTemplate,
	TwoColumnTemplate,
	MinimalTemplate,
} from "./components/ResumePreview";
import StyleControls from "./components/StyleControls";

function App() {
	const [resumeData, setResumeData] = useState({
		personalInfo: {
			name: "Alex Johnson",
			title: "Senior Full Stack Developer & Tech Lead",
			email: "alex.johnson@example.com",
			phone: "(555) 123-4567",
			website: "alexjohnson.dev",
			address: "San Francisco Bay Area",
		},
		objective:
			"Results-driven Full Stack Developer with a proven track record of architecting high-performance web applications. Skilled in leading agile teams and delivering innovative solutions that drive business growth. Known for optimizing development workflows and mentoring junior developers while staying at the forefront of emerging technologies.",
		education: [
			{
				degree: "Master of Science in Computer Science",
				school: "Stanford University",
				year: "2018 - 2020",
				description:
					"Focused on Advanced Software Architecture and AI Systems. Led research project on scalable microservices architecture. Published paper on distributed systems optimization. GPA: 3.9/4.0",
			},
			{
				degree: "Bachelor of Science in Computer Engineering",
				school: "University of California, Berkeley",
				year: "2014 - 2018",
				description:
					"Graduated with Honors (Top 5%). Founded and led the Web Innovation Lab with 50+ active members. Received Outstanding Technical Achievement Award for senior project on real-time data processing systems.",
			},
		],
		experience: [
			{
				position: "Senior Full Stack Developer & Team Lead",
				company: "TechInnovate Solutions",
				duration: "2020 - Present",
				description:
					"Spearheaded the development of a revolutionary CRM platform serving 100+ enterprise clients. Architected microservices infrastructure that handles 1M+ daily transactions. Reduced system downtime by 99% through implementing advanced monitoring and auto-scaling solutions. Mentored 8 junior developers, with 3 receiving promotions within their first year.",
			},
			{
				position: "Full Stack Developer",
				company: "DataViz Corp",
				duration: "2018 - 2020",
				description:
					"Revolutionized the company's data visualization platform using React and D3.js, resulting in a 200% increase in user engagement. Implemented advanced caching strategies that reduced average page load time from 3s to 300ms. Created a component library that reduced development time for new features by 60%. Successfully migrated legacy system to modern tech stack while maintaining 100% uptime.",
			},
			{
				position: "Web Development Intern",
				company: "StartUp Innovations",
				duration: "Summer 2017",
				description:
					"Developed key features for the company's flagship product using React and Node.js. Created an automated testing framework that reduced QA time by 40%. Contributed to the successful launch of 3 major product features that increased user retention by 25%.",
			},
		],
		skills: [
			"JavaScript/TypeScript",
			"React/Next.js",
			"Node.js/Express",
			"System Architecture",
			"AWS/Cloud Infrastructure",
			"MongoDB/PostgreSQL",
			"Docker/Kubernetes",
			"CI/CD Pipeline Design",
			"Team Leadership",
			"Performance Optimization",
			"Microservices",
			"Security Best Practices",
		],
		projects: [],
		certifications: [],
		languages: [],
	});

	const [activeTemplate, setActiveTemplate] = useState("modern");
	const [showTemplateSelector, setShowTemplateSelector] = useState(false);
	const [activeSidebar, setActiveSidebar] = useState("form"); // "form" or "templates"
	const [headingColor, setHeadingColor] = useState("#2563eb");
	const [accentColor, setAccentColor] = useState("#60a5fa");

	const resumeRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => resumeRef.current,
		documentTitle: `${resumeData.personalInfo.name || "Resume"}_CV`,
		pageStyle: `
			@page {
				size: A4;
				margin: 0.5cm;
			}
			html, body {
				width: 210mm;
				height: 297mm;
			}
		`,
		onBeforeGetContent: () => {
			const element = resumeRef.current;
			if (element) {
				element.style.transform = "none";
				element.style.height = "auto";
			}
		},
		onAfterPrint: () => {
			const element = resumeRef.current;
			if (element) {
				element.style.transform = "";
				element.style.height = "";
			}
		},
	});

	const updateResumeData = (newData) => {
		setResumeData(newData);
	};

	const handleTemplateChange = (template) => {
		setActiveTemplate(template);
		setShowTemplateSelector(false);
	};

	const handlePresetSelect = (preset) => {
		setHeadingColor(preset.headingColor);
		setAccentColor(preset.accentColor);
	};

	const getTemplateComponent = (template) => {
		switch (template) {
			case "modern":
				return ModernTemplate;
			case "two-column":
				return TwoColumnTemplate;
			case "minimal":
				return MinimalTemplate;
			default:
				return ClassicTemplate;
		}
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
					<div className="w-full md:w-1/2 animate-fade scroll-container">
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
							<StyleControls
								headingColor={headingColor}
								onHeadingColorChange={setHeadingColor}
								onPresetSelect={handlePresetSelect}
							/>
							<div className="scroll-container">
								<ResumePreview
									data={resumeData}
									ref={resumeRef}
									template={activeTemplate}
									TemplateComponent={getTemplateComponent(activeTemplate)}
									headingColor={headingColor}
									accentColor={accentColor}
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
