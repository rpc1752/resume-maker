import React from "react";

const presetStyles = [
	{
		name: "Professional Blue",
		headingColor: "#2563eb",
		accentColor: "#60a5fa",
	},
	{
		name: "Modern Green",
		headingColor: "#059669",
		accentColor: "#34d399",
	},
	{
		name: "Classic Maroon",
		headingColor: "#9f1239",
		accentColor: "#fb7185",
	},
	{
		name: "Tech Purple",
		headingColor: "#7c3aed",
		accentColor: "#a78bfa",
	},
	{
		name: "Executive Gray",
		headingColor: "#1f2937",
		accentColor: "#4b5563",
	},
];

function StyleControls({ headingColor, onHeadingColorChange, onPresetSelect }) {
	return (
		<div className="flex items-center justify-between p-4 bg-white rounded-md shadow-card mb-4">
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<label
						htmlFor="headingColor"
						className="text-sm font-medium text-gray-600"
					>
						Custom Color:
					</label>
					<div className="relative">
						<input
							type="color"
							id="headingColor"
							value={headingColor}
							onChange={(e) => onHeadingColorChange(e.target.value)}
							className="w-8 h-8 p-0 border-0 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="h-6 border-l border-gray-300"></div>
				<div className="flex items-center gap-2">
					<span className="text-sm font-medium text-gray-600">Presets:</span>
					<div className="flex gap-2">
						{presetStyles.map((style) => (
							<button
								key={style.name}
								onClick={() => onPresetSelect(style)}
								className="w-6 h-6 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform"
								style={{ backgroundColor: style.headingColor }}
								title={style.name}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<i className="fas fa-paint-brush text-primary-600 mr-2"></i>
				<span className="text-sm font-medium text-gray-600">
					Style Controls
				</span>
			</div>
		</div>
	);
}

export default StyleControls;
