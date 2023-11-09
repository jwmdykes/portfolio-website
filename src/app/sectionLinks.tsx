import React, {useEffect, useRef, useState} from "react";
import NavigationElement from "@/app/NavigationElement";

export function SectionLinks(props: { refs: React.RefObject<HTMLDivElement>[] }) {
    const [aboutRef, experienceRef, projectsRef] = props.refs;

    const [activeSection, setActiveSection] = useState('about');
    const activeSectionUpdatedRef = useRef(activeSection);
    activeSectionUpdatedRef.current = activeSection;
    const disconnecting = useRef(false);

    const handleNavClick = (section: string) => {
        // Set the active section immediately.
        setActiveSection(section);

        // Temporarily disable processing in the observer's callback.
        disconnecting.current = true;

        // Reset the flag after a delay.
        setTimeout(() => {
            disconnecting.current = false;
        }, 300); // Adjust this delay as needed.
    };

    function sectionPositionInViewport(
        element: HTMLElement | null
    ): 'above' | 'below' | 'in' | 'invalid' {
        if (!element) return 'invalid';

        const rect = element.getBoundingClientRect();
        const elementMidpoint = rect.top + rect.height / 2;

        if (elementMidpoint < window.innerHeight / 2) return 'above';
        if (elementMidpoint > window.innerHeight / 2) return 'below';

        return 'in';
    }

    useEffect(() => {
        const sections = {
            about: aboutRef,
            experience: experienceRef,
            projects: projectsRef,
        };
        const sectionOrder = ['about', 'experience', 'projects'];

        const getPreviousSection = (currentSection: string): string | null => {
            const index = sectionOrder.indexOf(currentSection);
            if (index > 0) {
                return sectionOrder[index - 1];
            }
            return null; // if there's no previous section
        };

        const getNextSection = (currentSection: string): string | null => {
            const index = sectionOrder.indexOf(currentSection);
            if (index < sectionOrder.length - 1) {
                return sectionOrder[index + 1];
            }
            return null; // if there's no next section
        };

        const options = {
            root: null,
            threshold: 0,
            rootMargin: "0px 0px -80% 0px",
        };

        const callbackFunction = (entries: any) => {
            if (disconnecting.current) return;

            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                } else if (entry.target.id === activeSectionUpdatedRef.current) {
                    // Using type assertion here:
                    if (
                        sectionPositionInViewport(
                            sections[entry.target.id as keyof typeof sections].current
                        ) === 'above'
                    ) {
                        const nextSection = getNextSection(activeSectionUpdatedRef.current);
                        if (nextSection) {
                            setActiveSection(nextSection);
                        }
                    } else {
                        const previousSection = getPreviousSection(
                            activeSectionUpdatedRef.current
                        );
                        if (previousSection) {
                            setActiveSection(previousSection);
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callbackFunction, options);

        Object.values(sections).forEach(
            (sectionRef: React.RefObject<HTMLDivElement>) => {
                console.log(sectionRef.current)
                if (sectionRef.current) observer.observe(sectionRef.current);
            }
        );

        return () => {
            Object.values(sections).forEach(
                (sectionRef: React.RefObject<HTMLDivElement>) => {
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            );
        };
    }, [aboutRef, experienceRef, projectsRef]);


    return <div className="hidden md:block">
        <ul className="flex flex-col gap-4">
            <NavigationElement
                focused={activeSection === "about"}
                href="#about"
                text="About"
                onClick={handleNavClick}
            ></NavigationElement>
            <NavigationElement
                focused={activeSection === "experience"}
                href="#experience"
                text="Experience"
                onClick={handleNavClick}
            ></NavigationElement>
            <NavigationElement
                focused={activeSection === "projects"}
                href="#projects"
                text="Projects"
                onClick={handleNavClick}
            ></NavigationElement>
        </ul>
    </div>;
}