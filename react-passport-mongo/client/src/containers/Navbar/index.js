import React from 'react';
import { Button } from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { user as userAPI } from '../../utils/API';
import style from "./style.module.css";

const Navbar = props => {
	const signout = () => {
		userAPI
			.signout()
			.then(() => props.setUser({}))
			.catch(e => {
				throw e;
			});
	};

	// get location from react router location hook
	let location = useLocation();

	console.group('navbar');
	console.info(`🌎 page rendered at path: '${location.pathname}'`, '\n');
	console.info('🤖 user', props.user);
	console.groupEnd();

	return (
		<div
			style={{ padding: 4, color: 'white', lineHeight: '20px' , textAlign: "center" }}
			className='bg-success'
		>
			<Link to='/'>
				<div style = {{fontSize: '50px'}} className={`${style.logo} btn`} >
				Picto-giphy
				</div>
			</Link>
			{ props.user._id 
				?  <Button theme='dark' onClick={signout}><i className='fa fa-sign-out fa-1x' aria-hidden='true'></i></Button>
				:  location.pathname === '/signup' 
					? 	<Link to='/login'><Button>login</Button></Link>
					:  <Link to='/signup'><Button theme='primary' style = {{left: '20px'}}>Signup</Button></Link>
			}
		</div>
	);
};
export default Navbar;
