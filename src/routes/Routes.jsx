import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../components/homePage/HomePage";
import TimeLine from "../pages/timeLinePage/TimeLine";
import StatsPage from "../pages/statsPage/StatsPage";
import FriendDetailsPage from "../pages/friendDetailsPage/FriendDetailsPage";


  export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index:true,
                Component: HomePage
            },
            {
                path: '/timeline',
                Component: TimeLine
            },
            {
                path: '/stats',
                Component: StatsPage
            },
            {
                path: '/details/:id',
               Component: FriendDetailsPage
            }
        ]
    }
])