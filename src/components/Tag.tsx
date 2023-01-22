import './tag.scss';

type TagProps = {
    label: string;
};

const Tag: React.FC<TagProps> = ({ label }) => {
    return <div className="tag">{label}</div>;
};

export default Tag;
