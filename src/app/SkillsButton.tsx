interface SkillsButtonProps {
    skill: string
}

export default function SkillsButton(props: SkillsButtonProps) {
    return (
        <div className="py-1 px-3 bg-skillsButtonFillColor rounded-2xl">
            <span className="text-skillsButtonTextColor font-mono font-semibold text-sm tracking-tight">
                {props.skill}
            </span>
        </div>
    )
}