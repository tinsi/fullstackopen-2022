import Part from './Part'

const Content = ({parts}) => {
    return parts.map((part) => <Part key={part.partId} part={part} />);
}

export default Content;