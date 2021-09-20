import React, { useState } from 'react';
import PropTypes from 'prop-types';


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};



function TodoForm(props) {

    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        // console.log(e.target.value);
        setValue(e.target.value);
    }

    //ngăn reload lại page khi nhấn enter
    function handleSubmit(e) {
        // prevent reloading browser
        e.preventDefault();

        if (!onSubmit) return;
        const formValues = {
            title: value,
        };

        // gửi formValues qua App. chỗ này là mấu chốt
        onSubmit(formValues);

        //reset form 
        setValue('');

    }
    return (
        //onSubmit này là trong form. không phải props
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;