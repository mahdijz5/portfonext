import React, { useRef, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import CardTravelRoundedIcon from "@mui/icons-material/CardTravelRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Link from "next/link";

interface Link {
	id: string;
	text: string;
	icon: React.ElementType;
}

export default function Header() {
	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const scrollPosition = element.offsetTop - 100;

			document.body.scrollTo({
				top: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	const links: Link[] = [
		{ id: "summary", text: "Summary", icon: RouteOutlinedIcon },
		{ id: "skills", text: "Skills", icon: HandymanOutlinedIcon },
		{
			id: "workexperience",
			text: "Work Experience",
			icon: CardTravelRoundedIcon,
		},
		{ id: "projects", text: "Projects", icon: DataObjectRoundedIcon },
		{ id: "education", text: "Education", icon: LibraryBooksOutlinedIcon },
		{ id: "languages", text: "Languages", icon: PublicRoundedIcon },
	];

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current && window.innerWidth > 768) {
				const scrollYPosition = document.body.scrollTop;

				if (scrollYPosition >= 10) {
					containerRef.current.classList.add(styles.stick);
				} else {
					containerRef.current.classList.remove(styles.stick);
				}
			}
		};

		document.body.addEventListener("scroll", handleScroll);
		handleScroll(); // Handle initial scroll position

		return () => {
			document.body.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className={styles.header} ref={containerRef}>
				<div className={styles.fix}>
					<Link className={styles.logo} href="/">
						<div className={styles.image}></div>
					</Link>
					<div className={styles.navbar}>
						{links.map((link, i) => (
							<div className={styles.linkcontainer} key={i}>
								<link.icon className={`${styles.icon} ${styles.static}`} />
								<Button
									className={styles.link}
									onClick={() => handleClick(link.id)}
								>
									{link.text}
								</Button>
								<KeyboardArrowRightRoundedIcon className={styles.icon} />
								<div className={styles.bar}></div>
							</div>
						))}

						<Button
							className={styles.upbutton}
							onClick={() => handleClick("top")}
						>
							<KeyboardArrowUpRoundedIcon className={styles.iconfirst} />
							<KeyboardDoubleArrowUpRoundedIcon className={styles.iconsecond} />
						</Button>
					</div>
					<div className={styles.buttoncontainer}>
						<SendRoundedIcon className={`${styles.icon} ${styles.static}`} />
						<Button
							className={styles.button}
							onClick={() => handleClick("contact")}
						>
							Contact Me
						</Button>
						<KeyboardArrowRightRoundedIcon className={styles.icon} />
						<div className={styles.bar}></div>
					</div>
				</div>
			</div>
			<div id="top" className={styles.dummyheader}>
				<div className={styles.dummy}></div>
			</div>
		</>
	);
}
