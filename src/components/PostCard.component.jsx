import ReactMarkdown from 'react-markdown';

export default function PostCard({post:{title, date, body}}) {
    return (
    <div className="div-size mt-3 mx-auto">
        <div className="flex justify-between mb-4 items-center mt-1">
        <h3>{title}</h3>
        <ReactMarkdown>
            {date}
        </ReactMarkdown>
        </div>
        <ReactMarkdown>
            {body}
        </ReactMarkdown>
    </div>);
  }