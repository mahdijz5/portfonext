import * as React from "react";
import styles from "@/styles/landing/Education.module.scss";
import azad from "@/public/image/svg/education/azad.svg";
import beheshti from "@/public/image/svg/education/beheshti.svg";
import sampad from "@/public/image/svg/education/sampad.svg";

import { Education } from "@/components/landing/Education";

export const educations: Education[] = [
	{
		name: React.createElement(
			React.Fragment,
			null,
			React.createElement("span", { className: styles.bold }, "Software engineering"),
			" (Bachelor's degree)",
			React.createElement("br"),
			"Islamic azad university - 2022 to present"
		),
		logo: azad,
		alt: "azad",
		color: "aqua",
	},
	{
		name: React.createElement(
			React.Fragment,
			null,
			React.createElement("span", { className: styles.bold }, "Biomedical engineering"),
			" (Associate's degree)",
			React.createElement("br"),
			"Shahid beheshti university - 2019 to 2022"
		),
		logo: beheshti,
		alt: "beheshti",
		color: "blue",
	},
	{
		name: React.createElement(
			React.Fragment,
			null,
			React.createElement("span", { className: styles.bold }, "Mathematics"),
			" (High school) - 2016 to 2019",
			React.createElement("br"),
			"Shahid soltani 4 school for gifted students(Sampad)"
		),
		logo: sampad,
		alt: "sampad",
		color: "white",
	},
	{
		name: React.createElement(
			React.Fragment,
			null,
			React.createElement("span", { className: styles.bold }, "Mathematics"),
			" (Middle school) - 2013 to 2016",
			React.createElement("br"),
			"Shahid bahonar 4 school for gifted students(Sampad)"
		),
		logo: sampad,
		alt: "sampad",
		color: "white",
	},
];
