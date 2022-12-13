import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

type MainLayoutProps = { children: React.ReactNode; title?: string }

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	title = 'Next app'
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content='index,next,react,tutorial' />
				<meta name='description' content='My new next page' />
				<meta charSet='utf-8' />
			</Head>
			<nav>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/posts'>Posts</Link>
			</nav>
			<main>{children}</main>
		</>
	)
}

export default MainLayout
