import React from 'react'

const icons = ({ setContent, content, theme }) => {
	const reactions = [
		'❤️', '😆', '😯', '😢', '😡', '👍', '👎', '😄',
		'😂', '😍', '😘', '😗', '😚', '😳', '😭', '😓',
		'😤', '🤤', '👻', '💀', '🤐', '😴', '😷', '😵'
	]
	return (
		<div className="btn-group dropup"
			style={{ opacity: 1, filter: theme ? 'invert(1)' : 'invert(0)' }}>

			<span className="nav-link position-relative px-1 " id="navbarDropdown" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<span style={{ opacity: 0.4 }}>😄</span>
			</span>

			<div className="dropdown-menu" >
				<div className="reactions">
					{
						reactions.map(icon => (
							<span key={icon} onClick={() => setContent(content + icon)}>
								{icon}
							</span>
						))
					}
				</div>
			</div>

		</div>
	)
}

export default icons
