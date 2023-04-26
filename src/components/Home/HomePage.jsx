import React, { useEffect } from 'react'
import axios from '../../utils/axios-customize'
import { fetchData } from '../../services/api'
import { deleteUser, getListUser } from '../../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/modal/modalSlice'


const HomePage = () => {
    const listUser = useSelector(state => state.user.user)
    console.log('listUser',listUser)
    
    const dispatch = useDispatch()
    const fetchApi = async () =>{
        const res =  await fetchData ()
        if (res && res.data) {
            dispatch(getListUser(res.data.data))
          }
    }
    
    useEffect(()=>{
        fetchApi()
    },[])



  return (
    <div className="px-4 sm:px-6 lg:px-8 py-[60px]">
      <div className="sm:flex sm:items-center justify-end">
        <div className="mt-4 sm:ml-30 sm:mt-0 sm:flex-none ">
          <button
            type="button"
            className=" block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={()=>{
                dispatch(toggleModal({status:'addModal'}))
            }}
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    First Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {listUser.map((person) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-left">
                      {person.first_name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{person.last_name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{person.email}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex justify-center">
                        <span onClick={()=>{
                          dispatch(toggleModal({status:'editModal',userEdit:person}))
                        }} className='text-indigo-600 hover:text-indigo-900 px-5 cursor-pointer'>Edit</span>
                        <span onClick={()=>{
                          dispatch(deleteUser(person))
                        }} className='text-red-600 hover:text-indigo-900 px-5 cursor-pointer'>Delete</span>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HomePage