import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";

export default function PostCardPreview({post:{id, attributes: {title, date}}}) {
    return (
    <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mt-3">
        <Link to={`/post/${id}`}>
            <div className="flex justify-between mb-4 items-center mt-1">
                <h3 className="overflow-hidden max-w-sm md:max-w-md max-h-8 mr-4">{title}</h3>
                <ReactMarkdown>
                    {date}
                </ReactMarkdown>
            </div>
            <hr className="h-0.5 bg-black dark:bg-white w-3/4 mx-auto" />
        </Link>
    </div>);
}