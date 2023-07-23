## Lazy Loading for loading before show pages .

    const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
        loading: () => <h2>Loading Banner...</h2>,
        ssr:false
    })


     import React from 'react';

        const index = () => {
        return (
            <div>
                 <DynamicBanner></DynamicBanner>

            </div>
        );
        };

        export default index;
