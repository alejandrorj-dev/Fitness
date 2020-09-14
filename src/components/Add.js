import React from 'react'
import './styles/Add.css'
import AddImg from '../images/add.png'
import { Link } from 'react-router-dom'

const Add = () => (
		<Link to="/exercise/new">
			<img src={AddImg} className="Fitness-Add" alt="" />
		</Link>
	)

export default Add