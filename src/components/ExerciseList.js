import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
		<>
			{ exercises.map((exercise) => {
				return(
						<Card
						key={exercise.id}
						{...exercise}
						/>
					)
			})}

		</>
	)

export default ExerciseList