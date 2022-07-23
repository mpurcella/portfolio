import React from 'react';
import './ButtonSubmit.scss';

const ButtonSubmit = ({ buttonSubmitClassName, isSubmitting }) => {
	return (
		<button type='submit' className={buttonSubmitClassName} disabled={isSubmitting} aria-disabled={isSubmitting}>
			{isSubmitting && <span className='loader' aria-live='assertive'></span>}
			Submit
		</button>
	);
};

export default ButtonSubmit;
