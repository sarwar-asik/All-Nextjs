import SIdeBar from "@/components/shared/SIdeBar";

export const metadata = {
    title: " Next Router SashBoard ",
    description: "Generated by  next app Router",
  };
  
const DashBoardLayout = ({children}) => {
    return (
        <div className="flex items-center">
            <SIdeBar/>
            <div className="">
                {children}
            </div>
        </div>
    );
};

export default DashBoardLayout;