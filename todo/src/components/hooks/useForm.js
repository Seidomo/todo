import {useState} from 'react';

const useForm = (callback) => {
    const [values, setValue] = useState({});

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setValue({ ...values, [name]: value });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        callback(values);
      }


      return [
        values,
        handleInputChange,
        handleSubmit
      ]

}

export default useForm;