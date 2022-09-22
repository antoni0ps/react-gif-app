import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState("");

/**
 * Función que establece en el estado del input el valor introducido
 */

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }



    /**
     * Función que comprueba que el input no esté vacío y agrega una categoría al
     * estado de las categorías existentes
     */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categories => [ inputValue, ...categories ]);
            setInputValue('');
        }
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory