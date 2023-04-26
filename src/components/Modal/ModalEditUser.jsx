import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {putUpdateUser } from "../../services/api";
import { toggleModal } from "../../redux/modal/modalSlice";
import { createUser, editUser } from "../../redux/user/userSlice";


const ModalEditUser = () => {
    const dispatch = useDispatch()
    const userEdit = useSelector(state => state.modal.userEdit)
  const [name, setName] = useState(userEdit.first_name || '');
  const [job, setJob] = useState(userEdit.last_name|| '');
    const onSubmit = async ()=>{
      let res = await putUpdateUser(userEdit.id,name, job);
      dispatch(toggleModal())
      setName('')
      setJob('')
      console.log('res',res)
      const editUserObject = {id:userEdit.id,...res.data}
      console.log('editUserObject',editUserObject)
      dispatch(editUser(editUserObject))
    }

  return (
    <div>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value = {name}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="job"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="job"
            type="text"
            placeholder="job"
            name="job"
            onChange={(event) => {
              setJob(event.target.value);
            }}
            value = {job}
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              onSubmit();
            }}
          >
            Edit User
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalEditUser