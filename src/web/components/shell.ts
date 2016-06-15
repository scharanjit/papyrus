import { Component } from 'angular2/core'
import { PapyrusVisualizations } from './core/visualizations'
import { PapyrusEditor } from './core/editor'
import { CompositeVisualization } from 'src/dvu/gfx/visualization'
import { FullLength } from '../directives/all'

@Component({
  selector: 'papyrus-shell',
  template: `
    <div class="row row-no-padding">
      <div class="col col-md-1">
        <pa-visualizations
          [visualizations]="visualizations"
          (onSelect)="select($event)"
        >
        </pa-visualizations>
      </div>
      <div class="editor-space col col-md-11">
        <pa-editor [visualization]="activeVisualization" full-length>
        
        </pa-editor>
      </div>
    </div>
  `,
  directives: [PapyrusVisualizations, PapyrusEditor, FullLength]
})
export class PapyrusShell {
  visualizations: CompositeVisualization[] = []
  activeVisualization: CompositeVisualization = null
  
  select(e) {
    this.activeVisualization = e.selected
  }
}
