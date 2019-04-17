import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { subtitle, input, container, radioSelected, radioNotSelected } from './styles'

const RemaniningQuestions = ({ type, options, id, handleChange, question }) =>
	<Fragment>
		<div style={subtitle}>
			Qual o {type === 'min' ? 'MENOR' : 'MAIOR'} preço deste produto?
		</div>
		<input style={input} placeholder='Digite ou selecione abaixo' />
		<div style={container}>
			{options.map((option, index) =>
				<div key={`${id}-${index}`}>
					<input
						style={{ 'display': 'none' }}
						type='radio'
						id={`${id}-${option}`}
						name={id}
						value={option}
						onChange={handleChange.bind(null, id)}
						checked={question === option}
					/>
					<label
						style={question === option ? radioSelected : radioNotSelected}
						htmlFor={`${id}-${option}`}
					>
						{option}
					</label>
				</div>
			)}
		</div>
	</Fragment>

RemaniningQuestions.propTypes = {
	type: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	question: PropTypes.node.isRequired
}

export default RemaniningQuestions