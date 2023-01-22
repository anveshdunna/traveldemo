import { createBoard } from '@wixc3/react-board';
import Recommendation from '../../../components/Recommendation';

export default createBoard({
    name: 'Recommendation',
    Board: () => <Recommendation />
});
