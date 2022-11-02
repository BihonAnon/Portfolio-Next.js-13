import BlogPosts from "./blogposts"
import Heatmap from "./heatmap";
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Heading, InlineCode, Pre, Table, Text } from 'my-components'

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const components = {
  img: ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  pre: Pre,
  code: InlineCode,
}

export  function Post(props) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}
export default function Blog() {
    return (
    <>
        <div className=" w-full grid grid-cols-11 grid-rows-5">
            <div className="col-span-9 row-span-1 bg-gray-200 p-3 m-1 rounded-md">
                <h1 className="text-4xl text-center">A Blog Title</h1>
            </div>
            <div className="col-span-9 row-span-4 bg-gray-200 m-1">
                <Post />
            </div>
            <div className="PostHeatmap col-start-10 col-end-12 row-start-1 row-end-3 bg-slate-500 border-solid">
                <Heatmap />
            </div>
        </div>
    </>
    );
}