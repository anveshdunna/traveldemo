import './selection.scss'

export const Selection: React.FC = () => {
    return (
        <div className="selection-card">
            <div>
                <div>Locations</div>
                <div>Dates</div>
            </div>
            <div className="itinerary">
                <div className="time-info">
                    <div>Dep time</div>
                    <div>Dep code</div>
                    <div>Dep date</div></div>
                <div className="divider" />
                <div className="time-info arrival">
                    <div>Dep time</div>
                    <div>Dep code</div>
                    <div>Dep date</div></div>
            </div>
            <div>Cabin class</div>
            <div>
                <div>
                    <span>Rs500</span>
                    <span>X</span>
                    <span>4 travelers</span></div>
                <div>Rs2000</div></div></div>
    )
};

