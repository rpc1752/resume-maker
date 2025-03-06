import React, { useState } from "react";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<i className="fas fa-file-alt text-2xl text-primary-300"></i>
					<h1 className="text-2xl font-heading font-bold">ResumeForge</h1>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:block">
					<ul className="flex space-x-6">
						<li>
							<a
								href="#"
								className="hover:text-primary-200 flex items-center space-x-1 font-medium"
							>
								<i className="fas fa-home"></i>
								<span>Home</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								className="hover:text-primary-200 flex items-center space-x-1 font-medium"
							>
								<i className="fas fa-question-circle"></i>
								<span>Help</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="bg-white text-primary-700 hover:bg-primary-50 py-2 px-4 rounded-md flex items-center space-x-1 font-medium transition-colors duration-200"
							>
								<i className="fas fa-save"></i>
								<span>Save</span>
							</a>
						</li>
					</ul>
				</nav>

				{/* Mobile menu button */}
				<button
					className="md:hidden text-white focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<i
						className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
					></i>
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden container mx-auto mt-3 pb-2 animate-fade">
					<nav className="bg-primary-800 rounded-md shadow-lg p-3">
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="hover:text-primary-200 flex items-center space-x-2 font-medium"
								>
									<i className="fas fa-home w-6"></i>
									<span>Home</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary-200 flex items-center space-x-2 font-medium"
								>
									<i className="fas fa-th-large w-6"></i>
									<span>Templates</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary-200 flex items-center space-x-2 font-medium"
								>
									<i className="fas fa-question-circle w-6"></i>
									<span>Help</span>
								</a>
							</li>
							<li className="pt-2 border-t border-primary-600">
								<a
									href="#"
									className="bg-white text-primary-700 hover:bg-primary-50 py-2 px-4 rounded-md flex items-center space-x-2 font-medium transition-colors duration-200 justify-center"
								>
									<i className="fas fa-save"></i>
									<span>Save Resume</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</header>
	);
}

export default Header;
