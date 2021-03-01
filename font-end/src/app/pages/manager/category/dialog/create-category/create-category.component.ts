import { Component, ElementRef, Renderer2, Input, OnInit, OnDestroy, Inject } from '@angular/core';

import { NotifierService } from '@/_services';
import { QRCodeService } from '../../services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Reflist } from '../../models/qrcode.model';

@Component({
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})

export class CreateCategoryComponent implements OnInit {
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
    public dialogRef: MatDialogRef<CreateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: Reflist) {
    this.formDanhMuc = this.formBuilder.group({
      danhmuc_id: [data.danhmuc_id],
      ma_an_chi: [data.ma_an_chi, Validators.compose([
        Validators.required
      ])],
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
        Validators.required
      ])],
      sldongthung: [data.sldongthung, Validators.compose([
        Validators.required
      ])],
      status: data.status
    });

  }

  get MassageErrorForm() { return this.formDanhMuc.controls; }
  onClose(): void {
    this.dialogRef.close();
  }

  // get getMaACQT() { return this.formDanhMuc.get('ma_an_chi'); };
  // get getLoaiACQT() { return this.formDanhMuc.get('loai_acqt'); };
  // get getKyHieu() { return this.formDanhMuc.get('kyhieu'); };
  // get getDVT() { return this.formDanhMuc.get('donvitinh'); };
  // get getSLDongGoi() { return this.formDanhMuc.get('sldonggoi'); };
  // get getSLDongThung() { return this.formDanhMuc.get('sldongthung'); };

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
    formDanhMuc.status = "Chưa Duyệt"
    this.categoryVMService.InsertDanhMuc_VM(formDanhMuc)
      .subscribe(data => {
        if (data.code == "200") {
          // show message success
          this.notifierService.success("Thông báo", "Thêm danh mục thành công!");
          this.message = data.message;
          this.onClose();
        }
        else {
          this.message = data.message;
          this.notifierService.error("Thông báo", data.message);
        }
      });
  }
}