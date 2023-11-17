import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SocialIcons() {
    return <div>
        <ul className="flex flex-row gap-5">
            <li className="hover:text-highlight-color">
                <a
                    href="https://github.com/jwmdykes"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                        aria-hidden="true"
                    />
                </a>
            </li>
            <li className="hover:text-highlight-color">
                <a
                    href="https://medium.com/@98johndykes"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                >
                    <FontAwesomeIcon
                        icon={faMedium}
                        size="xl"
                        aria-hidden="true"
                    />
                </a>
            </li>

            <li className="hover:text-highlight-color">
                <a
                    href="https://www.linkedin.com/in/john-dykes-136a9385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="xl"
                        aria-hidden="true"
                    />
                </a>
            </li>
            <li className="hover:text-highlight-color">
                <a href="mailto:98johndykes@gmail.com" aria-label="Email">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="xl"
                        aria-hidden="true"
                    />
                </a>
            </li>
        </ul>
    </div>;
}
