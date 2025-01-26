import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import './pages/home-page';
import './pages/about-page';
import './pages/contact-page';

@customElement('my-app')
export class MyApp extends LitElement {
	static styles = css`
		:host {
			display: block;
			min-height: 100vh;
		}
		nav {
			background-color: #333;
			padding: 1rem;
		}
		nav a {
			color: white;
			text-decoration: none;
			padding: 0.5rem 1rem;
			margin: 0 0.5rem;
		}
		nav a:hover {
			background-color: #555;
		}
		main {
			padding: 2rem;
		}
	`;

	firstUpdated() {
		const router = new Router(this.shadowRoot?.querySelector('#outlet'));
		const baseUrl = document.querySelector('base')?.href || '/';
		
		router.setRoutes([
			{ path: '/', component: 'home-page' },
			{ path: '/about', component: 'about-page' },
			{ path: '/contact', component: 'contact-page' },
			{ path: '(.*)', redirect: '/' }  // Catch-all route for 404s
		]);
	}

	render() {
		return html`
			<nav>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Contact</a>
			</nav>
			<main id="outlet"></main>
		`;
	}
}