import { createBoard } from '@wixc3/react-board';
import { HotelCard } from '../../../components/HotelCard';

export default createBoard({
    name: 'HotelCard',
    Board: () => <HotelCard />,
});
