import ReactMarkdown from 'react-markdown';

export default function PostCard({post}) {
    return (
    <div className="div-size mt-3 mx-auto">
        <div className="flex justify-between mb-4 items-center mt-1">
        <h3>{post.title}</h3>
        <ReactMarkdown>
            {post.date}
        </ReactMarkdown>
        </div>
        <ReactMarkdown>
            {post.body}
        </ReactMarkdown>
    </div>);
  }