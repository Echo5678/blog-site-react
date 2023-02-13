import PostCardPreview from "../components/PostCardPreview.component";

export default function PostPreviewList({posts}) {
    return (
        <>{
            posts.map((post, key) => {
                return <PostCardPreview post={post} key={key} />;
        })}
        </>
    );
}