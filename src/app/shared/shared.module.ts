import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InnerHeaderRightComponent } from './inner-header-right/inner-header-right.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';
import { FeaturedComponent } from './featured/featured.component';
import { PostsFilterComponent } from './posts-filter/posts-filter.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostStatsComponent } from './post-stats/post-stats.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { PostImageComponent } from './post-image/post-image.component';
import { FormInputErrorComponent } from './form-input-error/form-input-error.component';
import { InputFieldComponent } from './input-field/input-field.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomeMessageComponent,
    ButtonComponent,
    InnerHeaderRightComponent,
    CategoriesComponent,
    PostComponent,
    FeaturedComponent,
    PostsFilterComponent,
    SubmitButtonComponent,
    PostTitleComponent,
    PostInfoComponent,
    PostStatsComponent,
    PostCategoryComponent,
    PostImageComponent,
    FormInputErrorComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WelcomeMessageComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CategoriesComponent,
    PostComponent,
    FeaturedComponent,
    PostsFilterComponent,
    SubmitButtonComponent,
    PostTitleComponent,
    FormInputErrorComponent,
    InputFieldComponent
  ]
})
export class SharedModule { }
