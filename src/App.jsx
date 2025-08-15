import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomeLayout from './layout/HomeLayout';
import AllListings from './pages/AllListings';
import EditPage from './pages/EditPage';

// Loader untuk ambil data todo berdasarkan ID
const editPageLoader = async ({ params }) => {
  const res = await fetch(`/api/todos/${params.id}`);
  if (!res.ok) throw new Error("Gagal ambil data");
  return res.json();
};

function App() {
  // Fungsi untuk update data ke server
  const editList = async (editNewList) => {
    await fetch(`/api/todos/${editNewList.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editNewList)
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/edit/:id"
          element={<EditPage editListSubmit={editList} />}
          loader={editPageLoader}
        />
        <Route path="/all-listings" element={<AllListings />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
