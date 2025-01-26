import { LitElement } from 'lit';
import './pages/home-page';
import './pages/about-page';
import './pages/contact-page';
export declare class MyApp extends LitElement {
    static styles: import("lit").CSSResult;
    private router?;
    private getBaseUrl;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-app': MyApp;
    }
}
//# sourceMappingURL=my-app.d.ts.map