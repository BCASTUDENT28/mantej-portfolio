import React, { FC } from "react";

// Types
export interface iCardItem {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
			<div
				className="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-2xl rounded-3xl overflow-hidden pr-3 pl-3 pt-3 pb-4 border border-white/10 backdrop-blur-md"
				style={{ backgroundColor: color }}
			>
				<span className="font-bold relative text-4xl md:text-6xl mt-5">
					<span
						className="relative z-10 font-bold tracking-tight"
						style={{ color: textColor }}
					>
						{title}
					</span>
				</span>
				<div
					className="text-base md:text-xl font-medium text-center mb-0 z-50 mt-2 tracking-wide"
					style={{ lineHeight: 1.4, color: textColor }}
				>
					{description}
				</div>
				<div className="absolute inset-0 z-0 opacity-40 hover:opacity-60 transition-opacity duration-300">
					<img
						className="w-full h-full object-cover"
						src={src}
						alt={title}
					/>
				</div>
			</div>
		</div>
	);
};

interface iCardSlideProps {
	items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
	return (
		<div className="min-h-screen">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export { CardsParallax };
