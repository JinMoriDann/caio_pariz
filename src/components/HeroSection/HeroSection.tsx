import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";
import "./HeroSection.css";

type BlockItem = {
    id: number;
    size: number;
    x: number;
    y: number;
    depth: number;
    delay: number;
    duration: number;
    rotate: number;
};

const blocksData: BlockItem[] = [
    { id: 1, size: 220, x: 6, y: 12, depth: 0.2, delay: 0.1, duration: 10, rotate: -12 },
    { id: 2, size: 140, x: 18, y: 62, depth: 0.5, delay: 0.4, duration: 8, rotate: 14 },
    { id: 3, size: 300, x: 67, y: 8, depth: 0.3, delay: 0.2, duration: 14, rotate: -8 },
    { id: 4, size: 180, x: 78, y: 58, depth: 0.6, delay: 0.8, duration: 9, rotate: 18 },
    { id: 5, size: 110, x: 54, y: 24, depth: 0.8, delay: 0.6, duration: 7, rotate: -20 },
    { id: 6, size: 200, x: 38, y: 70, depth: 0.4, delay: 0.3, duration: 11, rotate: 10 },
    { id: 7, size: 90, x: 82, y: 24, depth: 1, delay: 1.0, duration: 6.5, rotate: -10 },
    { id: 8, size: 260, x: 30, y: 4, depth: 0.15, delay: 0.5, duration: 13, rotate: 6 },
];

export default function HeroSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 45, damping: 18, mass: 0.7 });
    const smoothY = useSpring(mouseY, { stiffness: 45, damping: 18, mass: 0.7 });

    const heroX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
    const heroY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

    const glowX = useTransform(smoothX, [-0.5, 0.5], ["30%", "70%"]);
    const glowY = useTransform(smoothY, [-0.5, 0.5], ["35%", "65%"]);

    const particles = useMemo(
        () =>
            Array.from({ length: 22 }).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 2 + Math.random() * 5,
                duration: 6 + Math.random() * 8,
                delay: Math.random() * 4,
            })),
        []
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - bounds.left) / bounds.width - 0.5;
        const y = (e.clientY - bounds.top) / bounds.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            className="hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="hero__dynamicGlow"
                style={{
                    left: glowX,
                    top: glowY,
                }}
            />

            <div className="hero__noise" />
            <div className="hero__grid" />
            <div className="hero__vignette" />

            <motion.div
                className="hero__background"
                style={{
                    x: heroX,
                    y: heroY,
                }}
            >
                <div className="hero__beam hero__beam--1" />
                <div className="hero__beam hero__beam--2" />
                <div className="hero__beam hero__beam--3" />

                {blocksData.map((block) => (
                    <motion.div
                        key={block.id}
                        className={`floating-block ${block.id === 3 ? "highlight" : ""}`}
                        style={{
                            width: block.size,
                            height: block.size,
                            left: `${block.x}%`,
                            top: `${block.y}%`,
                            transform: `translate(-50%, -50%) rotate(${block.rotate}deg)`,
                            zIndex: Math.round(block.depth * 10),
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                            y: 120,
                            filter: "blur(10px)"
                        }}
                        animate={{
                            opacity: [0, 0.5, 0.3],
                            scale: [0.6, 1.05, 1],
                            y: [120, -20, 0],
                            filter: ["blur(10px)", "blur(0px)"],
                            rotate: [
                                block.rotate - 20,
                                block.rotate + 6,
                                block.rotate
                            ]
                        }}
                        transition={{
                            duration: 1.6 + block.depth,
                            delay: block.delay,
                            ease: "easeOut"
                        }}
                    >
                        <div className="floating-block__face floating-block__face--front" />
                        <div className="floating-block__face floating-block__face--side" />
                        <div className="floating-block__face floating-block__face--top" />
                        <div className="floating-block__innerGlow" />
                    </motion.div>
                ))}

                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        className="hero__particle"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.15, 0.8, 0.15],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>

            <motion.div
                className="hero__content"
                style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [-8, 8]),
                    y: useTransform(smoothY, [-0.5, 0.5], [-10, 10]),
                }}
            >
                <motion.div
                    className="hero__eyebrow"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    SOFTWARE · ESTRUTURA · IMPACTO
                </motion.div>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.95, delay: 0.15 }}
                >
                    Caio Pariz
                </motion.h1>

                <motion.div
                    className="hero__titleShadow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ duration: 1.4, delay: 0.35 }}
                >
                    Caio Pariz
                </motion.div>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35 }}
                >
                    Sistemas, automações e experiências digitais construídos como
                    arquitetura: sólidos, elegantes e impossíveis de ignorar.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.55 }}
                >
                    <a href="#projetos" className="hero__button hero__button--primary">
                        Ver projetos
                    </a>
                    <a href="#contato" className="hero__button hero__button--ghost">
                        Falar com o Caio Pariz
                    </a>
                </motion.div>

                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <div className="hero__statCard">
                        <span className="hero__statValue">01</span>
                        <span className="hero__statLabel">Visão brutalista</span>
                    </div>
                    <div className="hero__statCard">
                        <span className="hero__statValue">∞</span>
                        <span className="hero__statLabel">Possibilidades modulares</span>
                    </div>
                    <div className="hero__statCard">
                        <span className="hero__statValue">100%</span>
                        <span className="hero__statLabel">Software sob medida</span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
            >
                <span>SCROLL</span>
                <motion.div
                    className="hero__scrollLine"
                    animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}