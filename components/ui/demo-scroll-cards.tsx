import React from "react";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const oneWorldCardItems: iCardItem[] = [
	{
		title: "One World Fest",
		description: "Celebrating 33 international delegations & global cultures at LPU Auditorium",
		tag: "CULTURE & GLOBAL",
		src: "images/lpu/lpu_campus_12.jpg",
		link: "#campus",
		color: "#0f172a",
		textColor: "#ffffff",
	},
	{
		title: "Yemen Pavilion",
		description: "Traditional Thobe exhibitions & Middle Eastern heritage showcase",
		tag: "MIDDLE EAST",
		src: "images/lpu/lpu_campus_15.jpg",
		link: "#campus",
		color: "#1e1b4b",
		textColor: "#ffffff",
	},
	{
		title: "Spectra Folk Arts",
		description: "Traditional folk music & dance performing arts fest with student squads",
		tag: "PERFORMING ARTS",
		src: "images/lpu/lpu_campus_14.jpg",
		link: "#campus",
		color: "#064e3b",
		textColor: "#ffffff",
	},
	{
		title: "Flag Esplanade",
		description: "International Nations Flag Court showcasing unity across 33+ countries",
		tag: "GLOBAL CAMPUS",
		src: "images/lpu/lpu_campus_07.jpg",
		link: "#campus",
		color: "#701a75",
		textColor: "#ffffff",
	},
];

const DemoOneWorldCards = () => {
	return <CardsParallax items={oneWorldCardItems} />;
};

export { DemoOneWorldCards };
