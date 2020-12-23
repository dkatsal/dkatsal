import React from 'react';


export const Form = ({onAddComment}) => {
    const [body, setBody] = React.useState('');

    const handleInputChange = (event) => {
        const value = event.currentTarget.value;
        setBody(value);
    };

    const addComment = () => {
        if (body.length >= 3) {
            onAddComment(body);
            setBody('');
        }
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) { 
            event.preventDefault();
            addComment(); 
        }
    }

    return (
        <div className="input_box">
            <form className="add cf">
                <input
                value={body}
                onChange={handleInputChange}
                type="text" 
                className="reviews_add_text"
                onKeyDown={handleKeyDown}
                />
                <button type="button" onClick={addComment} className="reviews_add_button">Написать консультанту</button>
            </form>
        </div>
    )
}

export default Form
