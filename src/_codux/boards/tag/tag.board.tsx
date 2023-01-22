import { createBoard } from '@wixc3/react-board';
import Tag from '../../../components/Tag';

export default createBoard({
    name: 'Tag',
    Board: () => <Tag label="Label" />,
});
