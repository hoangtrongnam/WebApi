import { Component, ElementRef, Renderer2, Input, OnInit, OnDestroy, Inject } from '@angular/core';

import { NotifierService } from '@/_services';
import { QRCodeService } from '../../services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Reflist } from '../../models/qrcode.model';

@Component({
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})

export class DetailCategoryComponent implements OnInit {
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
    public dialogRef: MatDialogRef<DetailCategoryComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: Reflist) {
    this.data = data;
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
}