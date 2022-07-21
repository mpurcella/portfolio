import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonSubmit from '../../components/button-submit/ButtonSubmit';
import Modal from '../../components/modal/Modal';
import './ContactForm.scss';

const ContactForm = () => {
	// Sets state to track whether message submission was successful
	const [isSuccessful, setIsSuccessful] = useState(false);

	// Sets state to open/close Modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	// React Hook Form to create/register/validate form
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors, isSubmitting }
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			emailAddress: '',
			messageText: ''
		}
	});

	// React Hook Form function for submitting form data
	const onSubmit = async (data) => {
		console.log(data);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (result.success) {
				setIsSuccessful(true);
			} else {
				setIsSuccessful(false);
			}
		} catch (err) {
			console.log(err);
			setIsSuccessful(false);
		}
		setIsModalOpen(true);
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful && isSuccessful) {
			reset();
		} else {
			return;
		}
	}, [formState, isSuccessful, reset]);

	return (
		<>
			<form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
				<input type='hidden' value='a17d3cc8-b9d7-4c89-a622-aec5c8c5171e' {...register('access_key')} />
				<div className='first-name'>
					<label className='contact-form-label' htmlFor='firstName'>
						First Name<span>&#10038;</span>
					</label>
					<input
						type='text'
						className='first-name-input'
						id='firstName'
						aria-required='true'
						autoCorrect='off'
						{...register('firstName', { required: 'A first name is required' })}
					/>
					{errors.firstName && <p className='form-input-error'>{errors.firstName.message}</p>}
				</div>
				<div className='last-name'>
					<label className='contact-form-label' htmlFor='lastName'>
						Last Name
					</label>
					<input
						type='text'
						className='last-name-input'
						id='lastName'
						autoCorrect='off'
						{...register('lastName')}
					/>
				</div>
				<div className='email-address'>
					<label className='contact-form-label' htmlFor='emailAddress'>
						Email Address<span>&#10038;</span>
					</label>
					<input
						type='email'
						className='email-address-input'
						id='emailAddress'
						aria-required='true'
						autoCorrect='off'
						{...register('emailAddress', {
							required: 'An email address is required',
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Invalid email address'
							}
						})}
					/>
					{errors.emailAddress && <p className='form-input-error'>{errors.emailAddress.message}</p>}
				</div>
				<div className='message'>
					<label className='contact-form-label' htmlFor='messageText'>
						Message<span>&#10038;</span>
					</label>
					<textarea
						className='message-text'
						id='messageText'
						rows='8'
						aria-required='true'
						autoCorrect='off'
						{...register('messageText', { required: 'A message is required' })}
					></textarea>
					{errors.messageText && <p className='form-input-error'>{errors.messageText.message}</p>}
				</div>
				<div className='contact-form-submit'>
					<ButtonSubmit
						buttonSubmitClassName={isSubmitting ? 'button-submit disabled' : 'button-submit'}
						isSubmitting={isSubmitting}
					/>
				</div>
			</form>
			<Modal isModalOpen={isModalOpen} handleModal={handleModal} isSuccessful={isSuccessful} />
		</>
	);
};

export default ContactForm;
