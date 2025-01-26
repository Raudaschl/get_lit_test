import fs from 'fs';

// Read the index.html file
const indexContent = fs.readFileSync('index.html', 'utf-8');

// Add base tag and update script source for production
const updatedContent = indexContent
    .replace(
        '<meta name="viewport"',
        '<base href="/get_lit_test/"><meta name="viewport"'
    )
    .replace(
        '<script type="module" src="./src/my-app.ts"></script>',
        '<script type="module" src="./my-app.js"></script>'
    );

// Write the modified file to the dist directory
fs.writeFileSync('dist/index.html', updatedContent);

// src/my-app.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

@customElement('my-app')
export class MyApp extends LitElement {
    static styles = css`
        /* ... styles remain the same ... */
    `;

    firstUpdated() {
        const router = new Router(this.shadowRoot?.querySelector('#outlet'));
        
        // Get base URL from base tag if it exists, otherwise use '/'
        const baseElement = document.querySelector('base');
        const baseUrl = baseElement ? baseElement.getAttribute('href') : '/';
        
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
                <a href="./">Home</a>
                <a href="./about">About</a>
                <a href="./contact">Contact</a>
            </nav>
            <main id="outlet"></main>
        `;
    }
}