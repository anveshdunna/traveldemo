import './hotel-card.scss';
import Recommendation from './Recommendation';

export const HotelCard: React.FC = () => {
    return (
        <div className="hotel-card">
            <Recommendation />
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
        </div>
    );
};
