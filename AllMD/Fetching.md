## Fetch Data in Next js

#### Use json server for create backend >>>

     install json-server >>>

     npm i json-server

     use in  package.json >>>

     "json-server": "json-server --watch db.json --port 5000",

     start server >>>
     npm run json-server

#### fetch full data

    export const getStaticProps = async () => {
        const res = await fetch("http://localhost:5000/news");
        const data = await res.json();
        console.log("🚀 ~ file: index.js:32 ~ getStaticProps ~ data:", data);

    return {
            props: {
            allNews: data,
            },
            revalidate: 30,
        };
    };

    use it as params like >>>
    const HomePage = ({ allNews }) => {
        const {id,name} = allNews
    }

### Fetch Dynamic data in pages>news>[newsId].js >>>
     
    export const getStaticPaths = async () => {
        const res = await fetch(`http://localhost:5000/news`);
        const newses = await res.json();
            const paths = newses?.map((news) => ({
                params: { newsId: news?.id },
            }));
        return { paths, fallback: false };
    };

    export const getStaticProps = async (context) => {
        const { params } = context;

        const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
        const data = await res.json();
        
        return {
            props: {
            news: data,
            },
        };
    };

