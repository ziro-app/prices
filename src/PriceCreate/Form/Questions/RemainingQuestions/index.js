import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage/index'
import { subtitle, input, container, radioSelected, radioNotSelected } from './styles'

export default class RemainingQuestions extends Component {
	handleChange = (id, { target: { value } }) => this.props.updateQuestion(id, value)
	render = () => {
		const { type, options, id, question, error_price } = this.props
		return (
			<Fragment>
				<div style={subtitle}>
					Qual o {type === 'min' ? <u style={{ fontWeight: '500'}}>MENOR</u> : <u style={{ fontWeight: '500'}}>MAIOR</u>} preço deste produto?
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
								onChange={this.props.uiState === 'submitting' ? null : this.handleChange.bind(null, id)}
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
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<ErrorMessage message={error_price} />
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