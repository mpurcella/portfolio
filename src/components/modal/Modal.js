import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import ModalText from '../modal-text/ModalText';
import ButtonLink from '../button-link/ButtonLink';
import './Modal.scss';

const Modal = ({ isModalOpen, isSuccessful, handleModal }) => {
	// Disables scroll when modal is open
	useEffect(() => {
		const body = document.body;

		body.classList.toggle('scroll-disabled', isModalOpen);

		return () => {
			body.classList.remove('scroll-disabled', isModalOpen);
		};
	});

	if (isModalOpen === false) {
		return null;
	} else if (isModalOpen && isSuccessful) {
		return ReactDOM.createPortal(
			<motion.div
				className='modal-overlay'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2, ease: 'linear' }}
			>
				<motion.div
					className='modal'
					initial={{
						opacity: 0,
						scale: 0.5
					}}
					animate={{
						opacity: 1,
						scale: 1
					}}
					transition={{
						duration: 0.2,
						delay: 0.2,
						ease: 'linear'
					}}
					viewport={{
						once: true
					}}
				>
					<FocusLock>
						<button type='button' className='modal-close-button' onClick={handleModal} aria-label='Close'>
							<FaTimes />
						</button>
						<ModalText>
							<span className='modal-greeting'>Message Submitted!</span>
							<br />
							<br />
							<span className='modal-emoji'>&#128077;</span>
							<br />
							<br />
							Thanks for reaching out.
							<br />
							I'll be in touch shortly.
						</ModalText>
					</FocusLock>
				</motion.div>
			</motion.div>,
			document.querySelector('#portal')
		);
	} else if (isModalOpen && !isSuccessful) {
		return ReactDOM.createPortal(
			<motion.div
				className='modal-overlay'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2, ease: 'linear' }}
			>
				<motion.div
					className='modal'
					initial={{
						opacity: 0,
						scale: 0.5
					}}
					animate={{
						opacity: 1,
						scale: 1
					}}
					transition={{
						duration: 0.2,
						delay: 0.2,
						ease: 'linear'
					}}
					viewport={{
						once: true
					}}
				>
					<FocusLock>
						<button type='button' className='modal-close-button' onClick={handleModal} aria-label='Close'>
							<FaTimes />
						</button>
						<ModalText>
							<span className='modal-greeting'>Hmm...</span>
							<br />
							<br />
							Something went wrong.
							<br />
							<br />
							<span className='modal-emoji'>&#129300;</span>
							<br />
							<br />
							Please try submitting your message again. If the problem persists, please contact me
							directly by clicking{' '}
							<ButtonLink
								buttonLinkClassName='button-link tertiary'
								buttonLinkPath='mailto:mjpurcella@gmail.com'
								buttonLinkName='here'
								ariaLabel='Open email client'
							/>
							.
						</ModalText>
					</FocusLock>
				</motion.div>
			</motion.div>,
			document.querySelector('#portal')
		);
	}
};

export default Modal;
