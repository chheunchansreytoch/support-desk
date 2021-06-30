import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Product {
  name: string;
}

interface Category {
  name: string;
}

@Component({
  selector: 'app-create-case-page',
  templateUrl: './create-case-page.component.html',
  styleUrls: ['./create-case-page.component.scss'],
})
export class CreateCasePageComponent implements OnInit {
  descriptionForm!: FormGroup;
  descriptionStyle = {
    height: '300px',
  };
  SELECTED_FILES: { file: File; url?: string }[] = [];
  constructor() {}
  urgencyControl = new FormControl('', Validators.required);
  categoryControl = new FormControl('', Validators.required);
  productControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  products: Product[] = [{ name: 'Mobile' }, { name: 'Web' }];
  categories: Category[] = [{ name: 'Billing' }, { name: 'Technical' }];
  urgency: string[] = ['Low', 'Normal', 'Urgent'];

  selectFiles(event: Event) {
    const element = event.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (event && fileList!.length > 0) {
      for (let index = 0; index < fileList!.length; index++) {
        const element = fileList?.item(index)!;
        if (`${element.type}`.startsWith('image')) {
          const reader = new FileReader();
          reader.readAsDataURL(element);
          reader.onload = (event: any) => {
            const URL = event.target.result;
            this.SELECTED_FILES.push({
              file: element,
              url: URL,
            });
          };
        } else {
          this.SELECTED_FILES.push({
            file: element,
            url: undefined,
          });
        }
      }
    }
  }
  removeFile(item: { file: File; url?: string }) {
    const index = this.SELECTED_FILES.indexOf(item);
    this.SELECTED_FILES.splice(index, 1);
    console.log(this.SELECTED_FILES);
  }

  ngOnInit(): void {
    this.descriptionForm = new FormGroup({
      description: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.descriptionForm.get('description')?.value);
  }
}
