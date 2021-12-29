import {useState} from "react";

const useForms = (initialState) => {
    const [form, setForms] = useState(initialState)
    
    const onChange = (e) => {
            const {value, name} = e.target
            setForms({...form, [name]: value})
    };

    return {onChange, form};
};

export default useForms;