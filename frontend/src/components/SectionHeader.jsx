
import "./SectionHeader.css"

export const SectionHeader = ({sectionTitle}) => {

    return (
        <>
            <div className="section-box">
                <h1 className="section-title">{sectionTitle}</h1>
            </div>
        </>
    )

}