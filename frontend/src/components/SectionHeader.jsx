
import "./SectionHeader.css"

export const SectionHeader = ({sectionTitle}) => {

    return (
        <>
            <div className="section-box">
                <p className="section-title">{sectionTitle}</p>
            </div>
        </>
    )

}