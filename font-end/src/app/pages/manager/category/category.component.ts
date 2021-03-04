import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CategoryService, NotifierService } from '@/_services';
import { QRCodeService } from './services';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent, DetailCategoryComponent, CreateCategoryComponent } from './dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { Subject, Observable, of } from 'rxjs';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data;
  term;
  sizePage;
  pageSize = 2000;
  pageIndex = 0;
  returnUrl: string;
  totalrow: any;
  public temp_var: Object = false;
  order: string = 'loai_acqt';
  sortedCollection: any[];
  reverse: boolean = true;
  itemCheckHandle: any;
  loading = false;
  indexPa = 0;
  checkLoad = false;
  getData$: Observable<any[]>;

  constructor(
    private categoryVMService: QRCodeService,
    private categoryService: CategoryService,
    private notifierService: NotifierService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private orderPipe: OrderPipe
  ) {
  }

  ngOnInit() {
    this.initData();
    this.sortedCollection = this.orderPipe.transform(this.data, 'loai_acqt');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  initData() {
    this.loading = true;
    this.checkLoad = false;
    this.itemCheckHandle = '';
    this.totalrow = 0;
    const request = {
      sizePage: this.pageSize,
      currentPage: this.pageIndex
    }
    this.categoryVMService.GetAllCategory_VM(request)
      .subscribe(data => {
        this.loading = false;
        this.data = data.category;
        this.totalrow = data.totalrow;
        this.temp_var=true;
      });
  }
  pageEvent (event){
    this.indexPa = 0;
    this.loading = true;
    const request = {
      sizePage: event.pageSize,
      currentPage: event.pageIndex
    }
    this.categoryVMService.GetAllCategory_VM(request)
      .subscribe(data => {
        this.loading = false;
        this.data = data.category;
        this.totalrow = data.totalrow;
        this.indexPa += (event.pageSize*event.pageIndex);
        this.temp_var=true;
      });
  }

  checkHideText(){
    if(this.data && this.data.length > 0){
        return false;
    }
    else{
      return true;
    }
  }

  createCategory() {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '600px',
      data: {  }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.initData();
    });
  }

  onSelectionHandle(item){
    this.itemCheckHandle = item;
  }
  
  editCategory(): void {
    if(this.itemCheckHandle === ''){
      this.notifierService.warning("Thông báo", "Vui lòng chọn ít nhất 1 danh mục để cập nhật!");
      return;
    }
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '600px',
      data: {
        danhmuc_id: this.itemCheckHandle.danhmuc_id,
        loai_acqt: this.itemCheckHandle.loai_acqt,
        kyhieu: this.itemCheckHandle.kyhieu,
        donvitinh: this.itemCheckHandle.donvitinh,
        sldonggoi: this.itemCheckHandle.sldonggoi,
        sldongthung: this.itemCheckHandle.sldongthung,
        status: this.itemCheckHandle.status,
        action: "Cập nhật"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initData();
    });
  }

  async createGoiACQT(item) {
  }
  async createBox(item){
    this.returnUrl = await this.route.snapshot.queryParams['returnUrl'] || '/tally/box_close';
    this.router.navigate([this.returnUrl], { queryParams: { danhmuc_id: item.danhmuc_id, loai_acqt : item.loai_acqt } });
  }
  onDetailCategory(){
    if(this.itemCheckHandle === ''){
      this.notifierService.warning("Thông báo", "Vui lòng chọn ít nhất 1 danh mục để xem chi tiết!");
      return;
    }
    const dialogRef = this.dialog.open(DetailCategoryComponent, {
      width: '600px',
      data: {
        danhmuc_id: this.itemCheckHandle.danhmuc_id,
        loai_acqt: this.itemCheckHandle.loai_acqt,
        kyhieu: this.itemCheckHandle.kyhieu,
        donvitinh: this.itemCheckHandle.donvitinh,
        sldonggoi: this.itemCheckHandle.sldonggoi,
        sldongthung: this.itemCheckHandle.sldongthung,
        status: this.itemCheckHandle.status
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initData();
    });
  }
}
