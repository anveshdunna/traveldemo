import { createBoard } from '@wixc3/react-board';
import { Selection } from '../../../components/Selection';

export default createBoard({
    name: 'Selection',
    Board: () => <Selection />,
});
