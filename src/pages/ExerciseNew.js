import React from 'react'
import Card from '../components/Card'
import ExerciseForm from '../components/ExerciseForm'

const ExerciseNew = ({onChange, onSubmit, form}) => (
		<div className="ExerciseNew_Lateral_Spaces row">
				<div className="ExerciseNew_Card_Space col-sm">
					<Card {...form}/>
				</div>
				<div className="ExerciseNew_Form_Space col-sm">
					<ExerciseForm
					onChange={onChange}
					onSubmit={onSubmit}
					form={form}
					/>
				</div>
		</div>
	)

export default ExerciseNew
