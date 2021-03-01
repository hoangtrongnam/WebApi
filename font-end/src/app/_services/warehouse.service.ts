import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class WarehouseService {
    constructor(
        private http: HttpClient
        ) {
    }
    getListInforWarehouse(request) {
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_warehouse_save`, request).toPromise();
    }

    getDetailSeriWarehouse(request) {
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_detail_warehouse_save`, request).toPromise();
    }

    searchWarehouse(request) {
        return this.http.post<any>(`${environment.apiUrl}/warehouse/create_delivery_bills`, request).toPromise();
    }

    searchVotesOutput(request) {
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_list_delivery_bills`, request).toPromise();
    }

    getBranch(ParentWarehouseCode) {
        return this.http.get<any>(`${environment.apiUrl}/branch/get?ParentWarehouseCode=${ParentWarehouseCode}`).toPromise();
    }
    
    confirmItemOutput(request) {
        return this.http.post<any>(`${environment.apiUrl}/warehouse/insert_delivery_bills`, request).toPromise();
    }

    approveItemOutput(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/approved_delivery_bill`, request).toPromise();
    }

    getDetailItemOutput(number_of_delivery_notes){
        return this.http.get<any>(`${environment.apiUrl}/warehouse/get_by_id_delivery_bills?NumberOfDeliveryNotes=${number_of_delivery_notes}`).toPromise();
    }

    cancelItemOutput(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/cancel_item_delivery_bill`, request).toPromise();
    }

    getDataBoxWarehouse(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_box_warehouse`, request).toPromise();
    }

    getDataPackWarehouse(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_package_warehouse`, request).toPromise();
    }

    getDataACQTWarehouse(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_acqt_warehouse`, request).toPromise();
    }

    GetSerialAcqtFromTo(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_serial_acqt_from_to`, request).toPromise();
    }

    getInforBranch(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/get_warehouse_of_branch`, request).toPromise();
    }

    extractPackWarehouse(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/extract_package_warehouse`, request).toPromise();
    }

    extractBoxWarehouse(request){
        return this.http.post<any>(`${environment.apiUrl}/warehouse/extract_box_warehouse`, request).toPromise();
    }

    getWarehouseSynch(request){
        return this.http.post<any>(`${environment.apiUrl}/erp/onhand_branch`, request).toPromise();
    }
}