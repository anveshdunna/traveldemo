import './hotel-card.scss';
import Recommendation from './Recommendation';
import Tag from './Tag';

export const HotelCard: React.FC = () => {
    return (
        <div className="hotel-card">
            <Recommendation />
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className="hotel-card__img"
                alt=""
            />
            <div className="hotel-card__body">
                <div className="hotel-card__info">
                    <div className="hotel-card__quality">
                        <span className="hotel-card__rating">4.5/5</span>
                        <span className="hotel-card__quality-type">Good</span>
                        <span className="hotel-card__reviews">(4000 reviews)</span>
                    </div>
                    <div className="hotel-card__title">The Ritz Carlton Los Angeles</div>
                    <div className="hotel-card__location">
                        <span className="hotel-card__star">5-star hotel</span>
                        <span className="hotel-card__dot">·</span>
                        <span className="hotel-card__address">
                            900 W Olympic Blvd. Los Angeles, CA, 90015
                        </span>
                        <span className="hotel-card__dot">·</span>
                        <span className="hotel-card__distance">3.8km</span>
                    </div>
                </div>
                <div className="tags">
                    <Tag label="Instant book " />
                    <Tag label="GST assured" />
                </div>
            </div>
        </div>
    );
};
