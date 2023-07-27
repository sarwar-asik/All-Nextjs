##### Create route

 Every route should create under app with folder>page.js
  
  src>app>blog>page.js


### dynamic Route

   src>app>blog>[id]>page.js  ::

        "use client"

            const BlogDetails = ({ params,searchParams}) => {
                console.log(params,"and",searchParams);
                return (
                    <div>
                         <h3>Blog dynamic detail pages ::: {params.id} </h3>
                    </div>
                );
            };

        export default BlogDetails

                    