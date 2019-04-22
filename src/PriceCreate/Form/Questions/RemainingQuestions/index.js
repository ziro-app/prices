import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { subtitle, input, container, radioSelected, radioNotSelected } from './styles'

export default class RemainingQuestions extends Component {
	state = { openField: '' }
	handleChange = (id, { target: { value } }) => {
		this.setState({ openField: value })
		this.props.updateQuestion(id, value)
	}
	render = () => {
		const { type, options, id, question } = this.props
		const openField = this.state.openField
		return (
			<Fragment>
				<div style={subtitle}>
					Qual o {type === 'min' ? 'MENOR' : 'MAIOR'} preço deste produto?
				</div>
				<input
					style={input}
					type='text'
					placeholder='Digite ou selecione abaixo'
					value={question}
					onChange={this.handleChange.bind(null, id)}
				/>
				<div style={container}>
					{options.map((option, index) =>
						<div key={`${id}-${index}`}>
							<input
								style={{ 'display': 'none' }}
								type='radio'
								id={`${id}-${option}`}
								name={id}
								value={option}
								onChange={this.handleChange.bind(null, id)}
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
		)
	}
}

RemainingQuestions.propTypes = {
	type: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	question: PropTypes.node.isRequired
}