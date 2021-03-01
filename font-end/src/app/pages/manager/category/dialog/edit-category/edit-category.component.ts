import { Component, ElementRef, Renderer2, Input, OnInit, OnDestroy, Inject } from '@angular/core';

import { NotifierService } from '@/_services';
import { QRCodeService } from '../../services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Reflist } from '../../models/qrcode.model';

@Component({
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {
  @Input() id: string;
  private element: any;
  formCategory;
  formDanhMuc;
  danhmuc_id;
  kyhieu;
  donvitinh;
  sldonggoi;
  data;
  sldongthung;
  presult;
  temp;
  message;
  submitted = false;

  request: Reflist;

  ngOnInit(): void {
  }

  constructor(

    private categoryVMService: QRCodeService,
    private formBuilder: FormBuilder,
    private notifierService: NotifierService,
    // private qRCodeComponent: QRCodeComponent,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: Reflist) {
    this.data = data;
    if (data.action == "Cập nhật") {
      this.temp = false;
    }
    else {
      this.temp = true;
    }
    this.formDanhMuc = this.formBuilder.group({
      danhmuc_id: [data.danhmuc_id],
      loai_acqt: [data.loai_acqt, Validators.compose([
        Validators.required
      ])],
      kyhieu: [data.kyhieu, Validators.compose([
        Validators.required
      ])],
      donvitinh: [data.donvitinh, Validators.compose([
        Validators.required
      ])],
      sldonggoi: [data.sldonggoi, Validators.compose([
        Validators.required,
        this.validateNumberOf
      ])],
      sldongthung: [data.sldongthung, Validators.compose([
        Validators.required,
        this.validateNumberOf
      ])],
      status: data.status
    });

  }

  get MassageErrorForm() { return this.formDanhMuc.controls; }
  onClose(): void {
    this.dialogRef.close();
  }

  validateNumberOf(controls) {
    var regex=/^[0-9]+$/;
    if (String(controls.value).match(regex)) {
      return null;
    } else {
      return { 'validateNumberOf': true }
    }
  }

  keyDownFunction(e){
    try {
      if (e.keyCode === 13) {
        document.getElementById("btnSave").click();
      }
    }catch (e) {
    }
  }

  onSave(formDanhMuc): void {
    this.submitted = true;
    if (this.formDanhMuc.invalid) {
      return;
    }
    this.categoryVMService.updateByIdDanhMuc_VM(formDanhMuc)
      .subscribe(data => {
        if (data.presult == 1) {
          // show message success
          this.message = data.message;
          this.notifierService.success("Thông báo", "Cập nhật danh mục thành công!");
          this.onClose();
          // this.qRCodeComponent.ngOnInit();
        }
        else {
          // Insert thất bại
          this.message = data.message;
          this.notifierService.error("Thông báo", data.message);
        }
      })
  }
  onDelete(form): void {
    this.categoryVMService.deleteByIdDanhMuc_VM(form.danhmuc_id)
      .subscribe(data => {
        if (data == null) {
          // Insert thất bại

        } else {
          // show message success
          this.onClose();
        }
      })
  }
  // getErrorMessgeloai_acqt() {
  //   return this.loai_acqt.hasError('required') ? 'You must enter a value' :
  //     '';
  // }
}