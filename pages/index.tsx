import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const Index = () => {
	return (
		<MainLayout>
			<h1>Index</h1>
			<p>
				<Link href='/about'>About</Link>
			</p>
			<p>
				<Link href='/posts'>Posts</Link>
			</p>
			<p>
				<Link href='/about/author'>Author</Link>
			</p>
		</MainLayout>
	)
}

export default Index
