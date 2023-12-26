import { type Container, type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import styles from "@/styles/Particle.module.scss";

export default function Particle() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 100,
						duration: 1,
					},
				},
			},
			detectRetina: true,
			autoPlay: true,
			background: {
				color: {
					value: "transparent",
				},
			},
			fullScreen: {
				enable: false,
			},
			particles: {
				color: {
					value: ["#B721FF", "#227bff"],
				},
				collisions: {
					enable: true,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 0.13,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 100,
				},
				opacity: {
					value: 0.9,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 2, max: 3 },
				},
			},
		}),
		[]
	);

	if (init) {
		return (
			<Particles
				className={styles.container}
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}

	return <></>;
}
