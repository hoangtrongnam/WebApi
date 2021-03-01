import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class BoxService {
    constructor(private http: HttpClient) {
    }

    closeBox(request) {
        return this.http.post<any>(`${environment.apiUrl}/box/closebox`, request).toPromise();
    }

    searchBox(request) {
        return this.http.get<any>(`${environment.apiUrl}/search/searchbox?query[sizePage]=` + request.page.sizePage +"&query[currentPage]=" + request.page.currentPage + "&query[danhmuc_id]=" + request.cbACQT + "&query[seri_from]=" + request.seri_from + "&query[seri_to]=" + request.seri_to + "&query[trangthai_nx]=" + request.trangthai_nx + "&query[is_approved]=" + request.is_approved + "&query[ngay_nhap_lo_hang]=" + request.ngaygd + "&query[batch]=" + request.batch)
            .pipe(map(data => {
                return data;
            }));
    }
    
    searchBatch(request) {
        return this.http.get<any>(`${environment.apiUrl}/batch/get?sizePage=` + request.sizePage + `&currentPage=` + request.currentPage + `&danhmuc_id=` + request.danhmuc_id + `&seri_from=` + request.seri_from + `&seri_to=` + request.seri_to + `&status_warehouse=` + request.status_warehouse + `&is_approved=` + request.is_approved + `&code_contracts=` + request.code_contracts + `&name_supplier=` + request.name_supplier + `&is_submit=` + request.is_submit).toPromise();
    }
    
    searchBatchDetail(request) {
        return this.http.get<any>(`${environment.apiUrl}/search/searchbox?query[sizePage]=` + request.sizePage + `&query[currentPage]=` + request.currentPage + `&query[danhmuc_id]=` + request.danhmuc_id + `&query[seri_from]=` + request.seri_from + `&query[seri_to]=` + request.seri_to + `&query[trangthai_nx]=` + request.trangthai_nx + `&query[ngay_nhap_lo_hang]=` + request.ngay_nhap_lo_hang + `&query[batch]=` + request.batch).toPromise();
    }

    confirmBatch(request) {
        return this.http.post<any>(`${environment.apiUrl}/box/confirm_complete_tally`, request).toPromise();
    }

    reverseConfirmBatch(request) {
        return this.http.post<any>(`${environment.apiUrl}/box/reverse_confirm_complete_tally`, request).toPromise();
    }

    approveComplete(request) {
        return this.http.post<any>(`${environment.apiUrl}/box/approved_complete_tally`, request).toPromise();
    }

    printfBox(thungId) {
        return this.http.get<any>(`${environment.apiUrl}/box/print_carton_labels?thung_id=`+ thungId).toPromise();
    }

    changeStatusWarehouse(request) {
        return this.http.post<any>(`${environment.apiUrl}/warehouse/confirm_warehousing`, request)
        .pipe(map(data => {
            return data;
        }));
    }
    
    detailsBox(thung_id) {
        return this.http.get<any>(`${environment.apiUrl}/box/by_id_detail?thung_id=` + thung_id).toPromise();
    }
}