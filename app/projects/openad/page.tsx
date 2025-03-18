'use client'

import { useEffect } from 'react'

export default function OpenADRedirect() {
	useEffect(() => {
		window.location.href = 'https://openad.accelerate.science'
	}, [])

	return <p>Redirecting...</p>
}
