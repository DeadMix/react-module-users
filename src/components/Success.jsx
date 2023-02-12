import React from 'react';

export const Success = ({ count }) => {
	return (
		<div className="success-block">
			<img src="/assets/success.svg" alt="Success" />
			<h3>Done!</h3>
			<p>Invitations sent to {count} {count > 1 ? 'users' : 'user'}</p>
			<button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
		</div>
	);
};
