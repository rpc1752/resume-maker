import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
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
				position: "Senior Full Stack Developer & Tech Lead",
				company: "TechInnovate Solutions",
				duration: "2020 - Present",
				description:
					"Led development of an AI-powered CRM platform that drove $5M in annual revenue. Scaled architecture to handle 2M+ daily users with 99.99% uptime. Pioneered implementation of GraphQL/Apollo federation reducing API response times by 85%. Mentored team of 12 developers across 3 continents, achieving 40% improvement in sprint velocity.",
			},
			{
				position: "Lead Frontend Developer",
				company: "DataViz Corp",
				duration: "2018 - 2020",
				description:
					"Architected real-time analytics dashboard processing 500K+ events/second. Built custom visualization library saving $200K in licensing costs. Reduced page load time from 5s to 200ms through advanced caching and code-splitting. Drove adoption of TypeScript and unit testing, reducing production bugs by 70%.",
			},
			{
				position: "Full Stack Innovation Intern",
				company: "StartUp Innovations",
				duration: "Summer 2017",
				description:
					"Developed AI-powered feature recommendations engine increasing user engagement by 45%. Implemented automated E2E testing reducing QA cycles by 60%. Created developer documentation portal praised by engineering team.",
			},
		],
		skills: [
			"Advanced JavaScript/TypeScript",
			"React/Next.js Expert",
			"Node.js/GraphQL",
			"Cloud Architecture (AWS/GCP)",
			"Microservices Design",
			"System Scalability",
			"CI/CD & DevOps",
			"Team Leadership",
			"Agile/Scrum Master",
			"Performance Optimization",
			"Security & Authentication",
			"Technical Mentorship",
		],
		projects: [
			{
				name: "ScaleStack Pro",
				description:
					"Open-source cloud infrastructure automation tool with 2K+ GitHub stars. Reduces AWS deployment time by 80% using custom IaC templates.",
				technologies: ["Terraform", "Go", "React", "AWS"],
				link: "github.com/alexj/scalestack",
			},
			{
				name: "DevMetrics Dashboard",
				description:
					"Real-time engineering productivity analytics platform used by 50+ dev teams. Featured in TechCrunch.",
				technologies: ["Next.js", "GraphQL", "MongoDB", "D3.js"],
				link: "devmetrics.io",
			},
			{
				name: "ML-Ops Pipeline",
				description:
					"Automated machine learning deployment pipeline reducing model deployment time from weeks to hours.",
				technologies: ["Python", "Kubernetes", "TensorFlow", "CI/CD"],
				link: "github.com/alexj/mlops",
			},
		],
		certifications: [
			{
				name: "AWS Solutions Architect Professional",
				issuer: "Amazon Web Services",
				date: "2023",
				credential: "AWS-PSA-2023",
			},
			{
				name: "Google Cloud Professional Architect",
				issuer: "Google Cloud",
				date: "2022",
				credential: "GCP-PA-2022",
			},
			{
				name: "Kubernetes Security Specialist",
				issuer: "Linux Foundation",
				date: "2021",
				credential: "CKS-2021",
			},
		],
		languages: [
			{
				language: "English",
				proficiency: "Native",
			},
			{
				language: "Spanish",
				proficiency: "Professional Working",
			},
			{
				language: "Mandarin",
				proficiency: "Conversational",
			},
		],
	});

	const [activeTemplate, setActiveTemplate] = useState("modern");
	const [headingColor, setHeadingColor] = useState("#2563eb");
	const [accentColor, setAccentColor] = useState("#60a5fa");
	const [isPreviewMode, setIsPreviewMode] = useState(false);
	const [isTwoColumn, setIsTwoColumn] = useState(true); // For layout of the editor
	const [previousTemplate, setPreviousTemplate] = useState(null); // Store previous template when switching to two-column

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
		// If switching to two-column template, store the previous one
		if (template === "two-column") {
			setPreviousTemplate(
				activeTemplate !== "two-column" ? activeTemplate : "modern"
			);
		}
		setActiveTemplate(template);
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

	// Toggle between two-column template and the previous template
	const toggleTwoColumnTemplate = () => {
		if (activeTemplate === "two-column") {
			// Switch back to the previous template
			setActiveTemplate(previousTemplate || "modern");
		} else {
			// Store current template and switch to two-column
			setPreviousTemplate(activeTemplate);
			setActiveTemplate("two-column");
		}
	};

	// This toggles the layout of the editor (form and preview side by side or stacked)
	const toggleEditorLayout = () => {
		setIsTwoColumn(!isTwoColumn);
	};

	return (
		<div className="bg-secondary-100 min-h-screen flex flex-col font-sans">
			<Header />

			<div className="container mx-auto px-4 py-6 flex-grow flex flex-col">
				{/* Action Buttons */}
				<div className="flex flex-wrap gap-3 mb-6">
					{!isPreviewMode && (
						<>
							<button
								className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
									isTwoColumn
										? "bg-primary-600 text-white shadow-md"
										: "bg-white text-secondary-800 hover:bg-secondary-100"
								}`}
								onClick={toggleEditorLayout}
							>
								<i
									className={`fas fa-${
										isTwoColumn ? "columns" : "align-justify"
									}`}
								></i>
								<span>
									{isTwoColumn ? "Single Column Editor" : "Two Column Editor"}
								</span>
							</button>
						</>
					)}

					<div className="flex-grow"></div>

					<button
						className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
							activeTemplate === "two-column"
								? "bg-primary-600 text-white shadow-md"
								: "bg-white text-secondary-800 hover:bg-secondary-100"
						}`}
						onClick={toggleTwoColumnTemplate}
					>
						<i className="fas fa-columns"></i>
						<span>
							{activeTemplate === "two-column"
								? "Standard Layout"
								: "Two Column Layout"}
						</span>
					</button>

					<button
						onClick={() => setIsPreviewMode(!isPreviewMode)}
						className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-md shadow transition-colors duration-200"
					>
						<i className={`fas fa-${isPreviewMode ? "edit" : "eye"}`}></i>
						<span>{isPreviewMode ? "Edit Mode" : "Preview"}</span>
					</button>

					<button
						onClick={handlePrint}
						className="flex items-center space-x-2 bg-success hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow transition-colors duration-200"
					>
						<i className="fas fa-file-pdf"></i>
						<span>Export as PDF</span>
					</button>
				</div>

				{/* Main Content */}
				<div
					className={`flex ${
						isTwoColumn && !isPreviewMode ? "flex-col md:flex-row" : "flex-col"
					} gap-8 flex-grow ${isPreviewMode ? "justify-center" : ""}`}
				>
					{/* Form Panel */}
					{!isPreviewMode && (
						<div
							className={`${
								isTwoColumn ? "w-full md:w-1/2" : "w-full"
							} animate-fade scroll-container`}
						>
							<ResumeForm data={resumeData} updateData={updateResumeData} />
						</div>
					)}

					{/* Preview Panel */}
					<div
						className={`${
							isPreviewMode
								? "w-full max-w-[21cm]"
								: isTwoColumn
								? "w-full md:w-1/2"
								: "w-full"
						} animate-fade`}
					>
						<div className={`${isPreviewMode ? "" : "sticky top-24"}`}>
							{!isPreviewMode && (
								<StyleControls
									headingColor={headingColor}
									onHeadingColorChange={setHeadingColor}
									onPresetSelect={handlePresetSelect}
								/>
							)}
							<div
								className={`scroll-container ${
									isPreviewMode ? "preview-mode" : ""
								}`}
							>
								{React.createElement(getTemplateComponent(activeTemplate), {
									data: resumeData,
									ref: resumeRef,
									headingColor: headingColor,
									accentColor: accentColor,
								})}
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
