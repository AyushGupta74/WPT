import { Link, Outlet } from "react-router-dom";

export default function Home()
{
    return(
        <>
        <div>
           <p> <Link to={"/parent"}>Parent</Link></p>
           <p><Link to={"/ajax"}>Ajax</Link></p>
        </div>
        <Outlet></Outlet>
        </>
    )
}