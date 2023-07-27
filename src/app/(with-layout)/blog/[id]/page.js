"use client"

const BlogDetails = ({ params,searchParams}) => {
    console.log(params,"and",searchParams);
  return (
    <div>
      <h3>Blog dynamic detail pages ::: {params.id} </h3>
    </div>
  );
};

export default BlogDetails;
