import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { HeaderComponent } from './header/header.component';
import { LangageSelectorComponent } from './langage-selector/langage-selector.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LangageSelectorComponent,
    ThemeSwitcherComponent,
    FooterComponent,
    NotFoundComponent,
    ProjectDetailComponent,
  ],
  imports: [CommonModule, RouterModule, TranslocoModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ProjectDetailComponent,
  ],
})
export class SharedModule {}
