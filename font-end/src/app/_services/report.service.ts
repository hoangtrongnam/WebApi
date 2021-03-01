import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ReportService {
    constructor(
        private http: HttpClient
        ) {
    }

    searchReport(request) {
        return this.http.post<any>(`${environment.apiUrl}/report/reporttally`, request)
            .pipe(map(data => {
                return data;
            }));
    }
    
    displayReport(request) {
        return this.http.post<any>(`${environment.apiUrl}/report/min_max_adi`, request).toPromise();
    }
    
    searchDownloadADI(request) {
        return this.http.post<any>(`${environment.apiUrl}/report/get_report_adi`, request)
            .pipe(map(data => {
                return data;
            }));
    }
    
    getERPData(request) { 
        return this.http.post<any>(`${environment.apiUrl}/report/get_erp`, request)
        .pipe(map(data => {
            return data;
        }));
    }

    getInfoAPI(id){
        return this.http.get<any>(`${environment.apiUrl}/report/get_status_info_erp?p_id=` + id).toPromise();
    }
    
    approveERPData(request) { 
        return this.http.post<any>(`${environment.apiUrl}/report/erp_barcode_transaction`, request).toPromise();
    }
    
    rejectERPData(request) { 
        return this.http.post<any>(`${environment.apiUrl}/report/approved_erp_info?p_id=` + request.p_id + `&p_is_approved=` + request.p_is_approved + `&p_note_approved=` + request.p_note_approved, {}).toPromise();
    }

    exportReport(request) {
        return this.http.post(`${environment.apiUrl}/report/export_report_tally`, request, { responseType: 'blob' })
            .subscribe((result: Blob) => {
                // if (result.size == 0) {
                //    this.notifierService.error('Thông báo', 'Lỗi! Không thể export file!');
                // }
                // else {
                    var blob = new Blob([result]);
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    const currentTime = new Date();
                    var filename = "BAOCAO_" + currentTime
                        .getFullYear().toString() + (currentTime
                            .getMonth() + 1) + currentTime
                                .getDate() + currentTime
                                    .toLocaleTimeString()
                                    .replace(/[ ]|[,]|[:]/g, '')
                                    .trim() + ".xlsx";
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                // }
            });
    }
    inputExp(request){
        return this.http.post(`${environment.apiUrl}/report/export_report_adi`, request, { responseType: 'blob' })
        .subscribe((result: Blob) => {
            // if (result.size == 0) {
            //    this.notifierService.error('Thông báo', 'Lỗi! Không thể export file!');
            // }
            // else {
                var blob = new Blob([result]);
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                const currentTime = new Date();
                var filename = "ADI_MAU_" + currentTime
                    .getFullYear().toString() + (currentTime
                        .getMonth() + 1) + currentTime
                            .getDate() + currentTime
                                .toLocaleTimeString()
                                .replace(/[ ]|[,]|[:]/g, '')
                                .trim() + ".xlsx";
                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
            // }
        });
    }

    submitBatch(request){
        return this.http.get<any>(`${environment.apiUrl}/batch/update_submit?batch_id=`+ request.batch_id + `&is_submit=` + request.is_submit).toPromise();
    }
    
    getDataReport206(request) { 
        return this.http.post<any>(`${environment.apiUrl}/dataSynchronization/report_bc206`, request).toPromise();
    }
    
    getDataReport205(request) { 
        return this.http.post<any>(`${environment.apiUrl}/dataSynchronization/report_bc205`, request).toPromise();
    }
    
    getDataReport203(request) { 
        return this.http.post<any>(`${environment.apiUrl}/dataSynchronization/report_bc203`, request).toPromise();
    }
    
    getDataReport202(request) { 
        return this.http.post<any>(`${environment.apiUrl}/dataSynchronization/report_bc202`, request).toPromise();
    }
}


