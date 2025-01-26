import fs from 'fs';

// Read the index.html file
const indexContent = fs.readFileSync('index.html', 'utf-8');

// Replace the development script tag with the production one
const updatedContent = indexContent.replace(
  '<script type="module" src="./src/my-app.ts"></script>',
  '<script type="module" src="./my-app.js"></script>'
);

// Write the modified file to the dist directory
fs.writeFileSync('dist/index.html', updatedContent);

// src/my-app.ts
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
        router.setRoutes([
            { path: '/', component: 'home-page' },
            { path: '/about', component: 'about-page' },
            { path: '/contact', component: 'contact-page' },
            { path: '(.*)', redirect: '/' }
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