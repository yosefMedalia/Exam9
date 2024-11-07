import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const router = createBrowserRouter([
  {
path: "/", element: (
      <Layout>
        <Reception />
      </Layout>
    ),
  },
  {path: "/floor/:floorIndex", element: (
      <Layout>
        <PrivateRoute component={<Floor />} />
      </Layout>
    ),
  },
  {path: "/forbidden", element: (
      <Layout>
        <Forbidden />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
