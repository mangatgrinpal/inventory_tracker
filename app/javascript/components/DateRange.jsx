import React, { Fragment } from 'react';

import Moment from 'react-moment';



const DateRange = ({weeks}) => {

	const startOfWeek = date => {
		let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

		return new Date(date.setDate(diff));
	}


	const endOfWeek = date => {
		let lastDay = date.getDate() - (date.getDay()-1) + 6;
		return new Date(date.setDate(lastDay))
	}

	return (
		<Fragment>
			<Moment subtract={{weeks:weeks}} date={startOfWeek(new Date())} format='MM/DD'/>
				-
			<Moment subtract={{weeks:weeks}} date={endOfWeek(new Date())} format='MM/DD'/>
		</Fragment>
	)
}

export default DateRange