import React from 'react';
import './ButtonSubmit.scss';

const ButtonSubmit = ({ buttonSubmitClassName, isSubmitting }) => {
	return (
		<button type='submit' className={buttonSubmitClassName} disabled={isSubmitting}>
			{isSubmitting && <span className='loader'></span>}
			Submit
		</button>
	);
};

export default ButtonSubmit;
