// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "@renderer/components/Home";
import RecentPatrons from "@renderer/components/recentPatrons";
import { CUproduction } from "@renderer/components/CU";
import ProductionDetails from "@renderer/components/productionDetails";
import Booking from "@renderer/components/booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/recent_patrons",
        element: <RecentPatrons />,
      },
      {
        path: "/CUproduction",
        element: <CUproduction/>
      },
      {
        path: "/productionDetails",
        element: <ProductionDetails/>
      },
      {
        path:"/book_a_seat",
        element: <Booking/>
      }      
    ],
  },
]);

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <div className="tw-h-screen tw-overflow-y-hidden tw-bg-zinc-900">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
