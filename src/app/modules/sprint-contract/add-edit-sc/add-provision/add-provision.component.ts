import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '@modules/shared/shared.module';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-add-provision',
  templateUrl: './add-provision.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    TabViewModule,
    ReactiveFormsModule,
    CalendarModule,
    TableModule,
    DropdownModule,
    SharedModule,
    FileUploadModule,
    HttpClientModule
  ]
})
export class AddProvisionComponent implements OnInit {

  isSubmited: boolean = false;
  actionLoading: boolean = false;
  addForm!: FormGroup;
  consultant:any[]=[];
  files:any[]=[];
  cols:any[]=[];

  constructor(private ref: DynamicDialogRef,private toast: MessageService,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
      this.initForm();
    this.cols = [
      { field: 'fileName', header: 'File name' },
    ];

  }

  initForm():void {
    this.addForm = new FormGroup({
      consultantName: new FormControl(null,[Validators.required]),
      profile: new FormControl(null,[Validators.required]),
      amount: new FormControl(null,[Validators.required]),
      oerpProjectCode: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
    });
  }

  onSubmit(){
    this.isSubmited = true;
    if (this.addForm.valid) {
      this.actionLoading = true;
      this.close();
    }
  }

  close(){
    this.ref.close();
  }

  edit(file:any){
    this.toast.add({ severity: 'info', summary: "Edit file", detail: file});
  }

  delete(file:any){
    this.confirmationService.confirm({
      message: 'You won\'t be able to revert this! ',
      header: 'Are you sure?',
      icon: 'pi pi-exclamation-circle text-yellow-500',
      acceptButtonStyleClass: 'p-button-danger p-button-raised',
      rejectButtonStyleClass: 'p-button-secondary p-button-raised',
      acceptLabel: 'Yes, delete it',
      rejectLabel: 'No, cancel',
      defaultFocus: 'reject',
      accept: () => {
        this.toast.add({ severity: 'info', summary: "Delete file", detail: file });
      },
  
    });
  }

}
