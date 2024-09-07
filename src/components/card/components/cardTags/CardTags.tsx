import './CardTags.css'

interface IProps {
    tags: Array<string>
}
export function CardTags({tags}: IProps) {
    return (
        <div className="tags-container">
            {
                tags.filter((t, idx) => idx < 2).map((t, idx) => (
                    <span className="tag" key={idx}>{t}</span>
                ))
            }
            {
                tags.length > 2
                    ? <span className="tags-counter">+{tags.length - 2}</span>
                    : null
            }
        </div>
    );
}