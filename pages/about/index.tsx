import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

const About = () => {
	const linkClickHandler = () => {
		Router.push('/')
	}
	return (
		<MainLayout>
			<h1>About page</h1>

			<button onClick={linkClickHandler}>Go back to home</button>
		</MainLayout>
	)
}

export default About
