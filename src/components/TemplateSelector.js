import React from "react";

const templates = [
	{
		id: "modern",
		name: "Modern",
		thumbnail: "https://via.placeholder.com/150x200/4338ca/FFFFFF?text=Modern",
		description: "Clean and professional design with a modern touch",
	},
	{
		id: "classic",
		name: "Classic",
		thumbnail: "https://via.placeholder.com/150x200/1e3a8a/FFFFFF?text=Classic",
		description: "Traditional resume layout that works for all industries",
	},
	{
		id: "two-column",
		name: "Two Column",
		thumbnail:
			"https://via.placeholder.com/150x200/047857/FFFFFF?text=Two+Column",
		description: "Efficient space usage with a clear separation of sections",
	},
	{
		id: "minimal",
		name: "Minimal",
		thumbnail: "https://via.placeholder.com/150x200/0f172a/FFFFFF?text=Minimal",
		description: "Clean and centered design with elegant typography",
	},
	{
		id: "creative",
		name: "Creative",
		thumbnail:
			"https://via.placeholder.com/150x200/7e22ce/FFFFFF?text=Creative",
		description: "Stand out with this creative design for artistic fields",
	},
	{
		id: "professional",
		name: "Professional",
		thumbnail:
			"https://via.placeholder.com/150x200/0891b2/FFFFFF?text=Professional",
		description: "Executive style for senior positions",
	},
	{
		id: "tech",
		name: "Tech",
		thumbnail: "https://via.placeholder.com/150x200/0284c7/FFFFFF?text=Tech",
		description: "Perfect for IT and tech industry professionals",
	},
];

function TemplateSelector({ activeTemplate, onTemplateSelect }) {
	return (
		<div className="bg-white rounded-lg shadow-card p-6 animate-slideUp">
			<h2 className="text-2xl font-heading font-bold mb-6 text-secondary-800 border-b pb-3">
				Choose a Template
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{templates.map((template) => (
					<div
						key={template.id}
						className={`rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer hover:shadow-card-hover ${
							activeTemplate === template.id
								? "border-primary-600 shadow-lg scale-105 transform"
								: "border-secondary-200 hover:border-primary-400"
						}`}
						onClick={() => onTemplateSelect(template.id)}
					>
						<div className="relative pb-[133%]">
							<img
								src={template.thumbnail}
								alt={template.name}
								className="absolute inset-0 w-full h-full object-cover"
							/>
							{activeTemplate === template.id && (
								<div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
									<i className="fas fa-check"></i>
								</div>
							)}
						</div>
						<div className="p-3">
							<h3 className="font-heading font-semibold">{template.name}</h3>
							<p className="text-sm text-secondary-600 mt-1">
								{template.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TemplateSelector;
