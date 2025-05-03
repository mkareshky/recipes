import { useState } from "react";

const useFormInput = (initialValue: string) => {

    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const inputeProps = {
        value,
        onchange: handleChange
    }

    return inputeProps;
}

export default useFormInput;