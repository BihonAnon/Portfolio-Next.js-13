import BlogPosts from "./blogposts"
import Heatmap from "./heatmap";
export default function Blog() {
    return (
    <>
        <div className=" w-full grid grid-cols-11 grid-rows-5">
            <div className="col-span-9 row-span-1 bg-gray-200 p-3 m-1 rounded-md">
                <h1 className="text-4xl text-center">A Blog Title</h1>
            </div>
            <div className="col-span-9 row-span-4 bg-gray-200 m-1">
                <BlogPosts />
            </div>
            <div className="PostHeatmap col-start-10 col-end-12 row-start-1 row-end-3 bg-slate-500 border-solid">
                <Heatmap />
            </div>
        </div>
    </>
    );
}