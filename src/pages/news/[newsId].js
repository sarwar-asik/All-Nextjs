import { useRouter } from 'next/router';
import React from 'react';

const NewPageDynamic = () => {
    const router  =useRouter()
    return (
        <div>
            the news of {router.query.newsId}
        </div>
    );
};

export default NewPageDynamic;