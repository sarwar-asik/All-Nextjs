# Redux with Next js

#### installation >>>

     npm install @reduxjs/toolkit react-redux

#### create src>redux>store.js

        import { configureStore } from "@reduxjs/toolkit";
        import { apiSlice } from "./api/api";

        export default configureStore({
        reducer: {
            [apiSlice.reducerPath]:apiSlice.reducer
        },
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
        });

#### src>src>\_app.js ::

    import store from '@/redux/store';
    import '@/styles/globals.css'
    import { Provider } from 'react-redux';

        export default function App({ Component, pageProps }) {

        const getLayout = Component.getLayout || ((page) => page);

            return <Provider store={store}>
            { getLayout(<Component {...pageProps} />)}
            </Provider>
        }

### pages>redux>api>api.js :::

        import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

        export const apiSlice = createApi({
        reducerPath: "api",

        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),

        endpoints: (builder) => ({
            getNews: builder.query({
            query: () => "/news",
            }),
        }),
        });


        export const { useGetNewsQuery } = apiSlice;

### use for fetchData >>>>

    const {data} = useGetNewsQuery()
    console.log(data)
