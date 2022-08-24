
import { EditorView } from 'prosemirror-view'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import { MarkdownSerializer } from '../editor/lib/markdown/serializer'

class AppState {
    view: EditorView | undefined
    serializer: MarkdownSerializer | undefined
    

    constructor(public label="Untitled"){
      makeAutoObservable(this)
    }

    setView(v: EditorView, s: MarkdownSerializer) {
        this.view = v
        this.serializer = s
    }
    download() {
        if (!this.view || !this.serializer) return;
    
        const content = this.view.state.doc;
        const md = store.serializer.serialize(content)
        downloadString(store.label+".md", md)
    }
  }
export const store = new AppState();


function downloadString(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
  
   