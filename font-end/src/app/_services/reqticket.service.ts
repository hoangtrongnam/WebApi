import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ReqTicketService {
    constructor(
        private http: HttpClient
        ) {
    }
    searchInforReqTicket(request) {
        return this.http.post<any>(`${environment.apiUrl}/requestforproviding/get`, request).toPromise();
    }

    insertInforReqTicket(request) {
        return this.http.post<any>(`${environment.apiUrl}/requestforproviding/insert`, request).toPromise();
    }
    
    updateInforReqTicket(request) {
        return this.http.post<any>(`${environment.apiUrl}/requestforproviding/update`, request).toPromise();
    }
    
    ApproveInforReqTicket(request) {
        return this.http.post<any>(`${environment.apiUrl}/requestforproviding/approved`, request).toPromise();
    }

    getListChoseACQT(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/chosen`, request).toPromise();
    }

    insertListChoseACQT(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/insert`, request).toPromise();
    }
    
    InsertImportWarehouse44(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/insert_transaction_type_44`, request).toPromise();
    }

    updateReqOutputTicket(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/update`, request).toPromise();
    }
    UpdateType44(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/update_type44`, request).toPromise();
    }
    changeInforAfterClose(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/check_out_chosen`, request).toPromise();
    }

    getListOuputTicket(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/get`, request).toPromise();
    }

    approveOutputTicketDischarge(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/approved`, request).toPromise();
    }

    disapproveOutputTicket(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/disapproved`, request).toPromise();
    }

    removeOutputTicket(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/deleted`, request).toPromise();
    }

    checkInforBarcode(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/check_barcode`, request).toPromise();
    }

    compareInforBarcode(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/compare`, request).toPromise();
    }
    UpdateContract(request){
        return this.http.post<any>(`${environment.apiUrl}/goods_issue/update_contract`, request).toPromise();
    }
    getERPTransType(request){
        return this.http.post<any>(`${environment.apiUrl}/erp/get_erp_transaction_type`, request).toPromise();
    }
}