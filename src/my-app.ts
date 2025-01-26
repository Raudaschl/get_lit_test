// src/my-app.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

// Import page components
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

    private router?: Router;

    private getBaseUrl(): string {
        const baseElement = document.querySelector('base');
        return baseElement?.getAttribute('href') || '/';
    }

    async firstUpdated() {
        const outlet = this.shadowRoot?.querySelector('#outlet');
        if (!outlet) {
            console.error('No outlet element found');
            return;
        }

        const baseUrl = this.getBaseUrl();
        console.log('Base URL:', baseUrl); // Debug log
        
        // Initialize router
        this.router = new Router(outlet);
        
        // Configure router
        this.router.setRoutes([
            {
                path: '/',
                component: 'home-page',
                action: () => { console.log('Navigating to home page'); }
            },
            {
                path: '/about',
                component: 'about-page',
                action: () => { console.log('Navigating to about page'); }
            },
            {
                path: '/contact',
                component: 'contact-page',
                action: () => { console.log('Navigating to contact page'); }
            },
            {
                path: '(.*)',
                redirect: '/',
                action: () => { console.log('Redirecting to home page'); }
            }
        ]);

        // Set base URL for router
        this.router.baseUrl = baseUrl;

        // Wait for router to be ready
        try {
            await this.router.ready;
            console.log('Router is ready');
        } catch (error) {
            console.error('Router failed to initialize:', error);
        }
    }

    render() {
        const baseUrl = this.getBaseUrl();
        
        return html`
            <nav>
                <a href="${baseUrl}">Home</a>
                <a href="${baseUrl}about">About</a>
                <a href="${baseUrl}contact">Contact</a>
            </nav>
            <main id="outlet"></main>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-app': MyApp;
    }
}