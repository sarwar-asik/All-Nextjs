#### fetching data by next js route


#####  system -1 ::::



        const HomePage = async () => {
            const res = await fetch(`http://localhost:5000/watches`, {
                cache: "force-cache",
            });
            const data = await res.json();
            console.log(data);

        }




#####  system -2 ::::
 
        export const getData=async () =>{
        const res = await fetch(`http://localhost:5000/watches`, {
            <!-- cache: "force-cache", -->
            cache: "no-store",
        });
        const data = await res.json();
        return data 

        }
        const HomePage = async () => {
        
            const data = await getData()

                return(
                    <div>
                    </div>
                )

        }

        

 ##### ** can use 
next:{ revalidate:5
    } 
. here cache is optional  কারন automatic catch  হয়**

 ##### **  can be use
  cache:"no-store" . now dont need 
        next:{
            revalidate:5
        }
  

#### for fetch with ISR (use next property) :::

    const res = await fetch(`http://localhost:5000/watches`, {
        cache: "force-cache",
        next:{
        revalidate:5
        }
    });