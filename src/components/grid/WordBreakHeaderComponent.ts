import { AgPromise, IHeaderComp, IHeaderParams } from "ag-grid-community"

export class WordBreakHeaderComponent implements IHeaderComp {

    private params: IHeaderParams = {} as IHeaderParams

    init(params: IHeaderParams<any, any>): void | AgPromise<void> {
        this.params = params
    }

    getGui(): HTMLElement {
        const div = document.createElement('div')
        div.innerHTML = `<div class="ag-header-cell-label"><span class="ag-header-cell-text">${this.params.displayName.replace(/ /g, '<br>')}</span></div>`
        return div
    }

    refresh(params: IHeaderParams): boolean {
        this.params = params
        return false
    }

    // Gets called once by grid when the component is being removed; if your component needs to do any cleanup, do it here
    destroy(): void {
    }
}