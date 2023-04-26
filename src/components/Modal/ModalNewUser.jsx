import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreateUser } from "../../services/api";
import { toggleModal } from "../../redux/modal/modalSlice";
import { createUser } from "../../redux/user/userSlice";


const ModalNewUser = () => {
    const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
    const onSubmit = async ()=>{
      let res = await postCreateUser(name, job);
    //   closeModal()
      dispatch(toggleModal())
      setName('')
      setJob('')
      console.log('res',res.data)
      dispatch(createUser(res.data))
    }
  return (
    <div>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            name
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
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="job"
          >
            job
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
            Add New User
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalNewUser