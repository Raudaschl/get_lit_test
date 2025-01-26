import { LitElement } from 'lit';
import './pages/home-page.js';
import './pages/about-page.js';
import './pages/contact-page.js';
export declare class MyApp extends LitElement {
    static styles: import("lit").CSSResult;
    private router?;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-app': MyApp;
    }
}
//# sourceMappingURL=my-app.d.ts.map