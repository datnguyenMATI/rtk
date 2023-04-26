import { useState } from 'react'
// import './index.css'
// import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import NotFound from './components/NotFound';
import LayoutAdmin from './layout/LayoutAdmin';
import AdminPage from './components/admin/AdminPage';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/register/Register';
import DemoRedux from './pages/DemoRedux/DemoRedux';
import HomePage from './components/Home/HomePage';
import Modals from './components/Modal/Modals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from './redux/modal/modalSlice';
import ModalNewUser from './components/Modal/ModalNewUser';
import ModalEditUser from './components/Modal/ModalEditUser';

const Layout = () => {
  return (
    <div className='layout-app'>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

const openModalBox = localStorage.getItem("openmodal")
console.log('openModalBox',openModalBox)
function App() {
  const isOpenModal = useSelector(state => state.modal.modal)
  const statusModal = useSelector(state => state.modal.status)
  console.log('statusModal',statusModal)
  const dispatch = useDispatch()
  const closeModal = ()=>{
    dispatch(toggleModal())
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true, element:
              <HomePage />
        }
      ],
    },

    {
      path: "/admin",
      element: <LayoutAdmin />,
      errorElement: <NotFound />,
      children: [
        {
          index: true, element:
              <AdminPage />
        }
      ],
    },


    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/demoredux",
      element: <DemoRedux />,
    },
  ]);

  return (
    <div className='text-center'>
      <RouterProvider router={router} />
      <Modals openModal={isOpenModal} closeModal={closeModal} content={statusModal=='addModal'?<ModalNewUser />:statusModal=='editModal'?<ModalEditUser />:''}/>
    </div>
  );
}

export default App
